const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				main: "#171717",
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
			},
			animation: {
				scroll: "scroll 1500ms infinite",
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
					"@apply before:absolute before:w-[130%] before:h-[60vh] before:top-[0] before:-left-[90px] before:-z-10 md:before:w-full md:before:h-[95vh] md:before:left-0":
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
					},
				},
			});
		}),
	],
};
