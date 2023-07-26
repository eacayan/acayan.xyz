describe("WHEN visiting the website", () => {
	it("THEN should send a GET request to visitor count API", () => {
		cy.visit(Cypress.env("CLOUDFRONT_URL"));

		cy.request(Cypress.env("API_URL")).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.visits).to.be.a("number");
		});
	});
});
