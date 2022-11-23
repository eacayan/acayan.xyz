import { IMenuItems } from "./types";

export const MENU_ITEMS: IMenuItems[] = [
	{ title: "Home", href: "/" },
	{ title: "Resume", href: "/resume" },
	{ title: "Blog", href: "/blog" },
];

export const PROJECT_ITEMS = [
	{
		name: "Rally",
		logo: "images/rally-icon.png",
		alt: "Rally Logo",
		href: "https://rally.io",
		role: "Front-End",
		description:
			"Rally is a decentralized network that allows content creators to make and host their own cryptocurrency within the Ethereum blockchain.",
		cta: "Visit Website",
		pColor: "rose-600",
		sColor: "yellow-500",
		technologies: [
			{ alt: "React logo", logo: "icons/react.svg" },
			{ alt: "Next logo", logo: "icons/next.svg" },
			{ alt: "GraphQL logo", logo: "icons/graphql.svg" },
		],
	},
	{
		name: "Giffords",
		logo: "images/giffords-icon.png",
		alt: "Giffords Logo",
		href: "https://giffords.org",
		role: "Front-End",
		description:
			"Giffords is an American organization dedicated to fighting gun violence. They offer political, legal, and policy expertise with regards to gun safety.",
		cta: "Visit Website",
		pColor: "red-800",
		sColor: "blue-800",
		technologies: [
			{ alt: "Javascript logo", logo: "icons/javascript.svg" },
			{ alt: "Wordpress logo", logo: "icons/wordpress.svg" },
		],
	},
];
