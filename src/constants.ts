import { IMenuItems, IProjectItems } from "./types";

export const MENU_ITEMS: IMenuItems[] = [
	{ title: "Home", href: "/" },
	{ title: "Resume", href: "/resume" },
	{ title: "Blog", href: "/blog" },
];

export const PROJECT_ITEMS: IProjectItems[] = [
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
		sColor: "purple-800",
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
		pColor: "cyan-700",
		sColor: "red-700",
		technologies: [
			{ alt: "Javascript logo", logo: "icons/javascript.svg" },
			{ alt: "Wordpress logo", logo: "icons/wordpress.svg" },
		],
	},
	{
		name: "Primis Bank",
		logo: "images/primis-icon.png",
		alt: "Primis Bank Logo",
		href: "https://primisbank.com",
		role: "Front-End",
		description:
			"Formerly Sonabank, Primis Bank is a local financial institution based in Virginia, USA. They reinvent the banking experience by being heavily tech-focused.",
		cta: "Visit Website",
		pColor: "lime-700",
		sColor: "gray-600",
		technologies: [
			{ alt: "Javascript logo", logo: "icons/javascript.svg" },
			{ alt: "Wordpress logo", logo: "icons/wordpress.svg" },
		],
	},
	{
		name: "Hotaling & Co.",
		logo: "images/hotaling-icon.png",
		alt: "Hotaling & Co. Logo",
		href: "https://www.hotalingandco.com",
		role: "Front-End",
		description:
			"Hotaling & Co. is a San Francisco-based leading importer and distiller of super-premium artisanal spirits and cocktail essentials.",
		cta: "Visit Website",
		pColor: "amber-600",
		sColor: "stone-500",
		technologies: [
			{ alt: "Javascript logo", logo: "icons/javascript.svg" },
			{ alt: "Wordpress logo", logo: "icons/wordpress.svg" },
		],
	},
];
