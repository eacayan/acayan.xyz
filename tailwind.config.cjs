const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				main: "#171717",
				black: "#111111",
				gold: "#F8C307",
			},
			fontFamily: {
				sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				scroll: {
					to: {
						opacity: 0,
						bottom: "48px",
					},
				},
				breathe: {
					"0%": {
						transform: "scale(1)",
					},
					"33%": {
						transform: "scale(1.05)",
					},
					"66%": {
						transform: "scale(1.1)",
					},
					"80%": {
						transform: "scale(1.05)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(1deg)",
					},
					"75%": {
						transform: "rotate(-1deg)",
					},
				},
			},
			animation: {
				scroll: "scroll 1500ms infinite",
				breathe: "breathe 5000ms infinite",
				tilt: "tilt 10000ms infinite linear",
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				".social-icon": {
					"@apply w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ease-in-out text-white hover:text-rose-500": {},
				},
				".gradient-bg": {
					"@apply before:absolute before:w-[130%] before:h-[60vh] before:top-[110px] before:-left-[90px] before:-z-10 md:before:w-full md:before:h-[85vh] md:before:top-[65px] md:before:left-0":
						{},
					"&::before": {
						backgroundImage: `radial-gradient(at 65% 75%, ${theme(
							"colors.main",
						)} 0, transparent 100%),radial-gradient(at 30% 35%, ${theme(
							"colors.rose.600",
						)} 0, transparent 35%),radial-gradient(at 65% 42%, ${theme(
							"colors.yellow.500",
						)} 0, transparent 50%),radial-gradient(at 34% 57%, ${theme(
							"colors.pink.700",
						)} 0, transparent 50%),radial-gradient(at 76% 53%, ${theme("colors.violet.700")} 0, transparent 64%)`,
						animation: `${theme("animation.breathe")}`,
					},
				},
			});
		}),
	],
};
