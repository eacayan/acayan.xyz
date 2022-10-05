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
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".social-icon": {
					"@apply w-4 h-4 md:w-6 md:h-6 transition-all duration-300 ease-in-out text-white hover:text-rose-500": {},
				},
			});
		}),
	],
};
