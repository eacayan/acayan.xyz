terraform {
  required_providers {  
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "acayan.xyz-tf-state"
    key            = "global/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-locking"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-1"
  profile = "default"
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "acayan.xyz"
}
resource "aws_s3_bucket_website_configuration" "website_bucket_config" {
  bucket = "acayan.xyz"
  index_document {
    suffix = "index.html"
  }
}
output "s3_website_endpoint" {
  value = aws_s3_bucket_website_configuration.website_bucket_config.website_endpoint
}

resource "aws_cloudfront_distribution" "cf_distribution" {
  origin {
    connection_attempts      = 3 
    connection_timeout       = 10 
    domain_name              = aws_s3_bucket.website_bucket.bucket_regional_domain_name 
    origin_access_control_id = aws_cloudfront_origin_access_control.cf_oac.id
    origin_id                = aws_s3_bucket.website_bucket.bucket_regional_domain_name 
  }

  origin {
    connection_attempts = 3 
    connection_timeout  = 10 
    domain_name         = aws_s3_bucket_website_configuration.website_bucket_config.website_endpoint
    origin_id           = aws_s3_bucket_website_configuration.website_bucket_config.website_endpoint
  
    custom_origin_config {
        http_port                = 80
        https_port               = 443
        origin_keepalive_timeout = 5
        origin_protocol_policy   = "http-only"
        origin_read_timeout      = 30
        origin_ssl_protocols     = ["TLSv1.2"]
      }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["acayan.xyz", "www.acayan.xyz"]

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.website_cert.arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    cache_policy_id        = data.aws_cloudfront_cache_policy.cf_caching_policy.id
    target_origin_id       = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }
}

resource "aws_cloudfront_origin_access_control" "cf_oac" {
  name                              = aws_s3_bucket.website_bucket.bucket_regional_domain_name
  description                       = ""
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "cf_caching_policy" {
  name = "Managed-CachingOptimized"
}

resource "aws_acm_certificate" "website_cert" {
  domain_name               = "acayan.xyz"
  subject_alternative_names = ["www.acayan.xyz"]
  validation_method         = "DNS"
}
