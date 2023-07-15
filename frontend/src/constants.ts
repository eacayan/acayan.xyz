import { IMenuItems, IProjectItems, IExpItems } from "./types";

export const MENU_ITEMS: IMenuItems[] = [
	{ title: "Home", href: "/" },
	{ title: "Projects", href: "#projects" },
	{ title: "Experience", href: "#experience" },
	// { title: "Blog", href: "/blog" },
];

export const PROJECT_ITEMS: IProjectItems[] = [
	{
		name: "@accelo/crayon",
		logo: "images/accelo-icon.png",
		alt: "Accelo Logo",
		href: "https://accelo.com",
		role: "Maintainer",
		status: "wip",
		description:
			"Crayon is the React UI component library for Accelo - a project management system for professional service companies. The future platform will be using all components from this library. It is currently a work-in-progress.",
		cta: "Visit Main Company",
		pColor: "rose-600",
		sColor: "purple-800",
		technologies: [
			{ alt: "React logo", logo: "icons/react.svg" },
			{ alt: "Typescript logo", logo: "icons/typescript.svg" },
			{ alt: "MUI logo", logo: "icons/mui.svg" },
			{ alt: "Storybook logo", logo: "icons/storybook.svg" },
		],
	},
	{
		name: "Rally",
		logo: "images/rally-icon.png",
		alt: "Rally Logo",
		href: "https://rally.io",
		role: "Front-End",
		status: "completed",
		description:
			"Rally is a decentralized network that allows content creators to make and host their own cryptocurrency within the Ethereum blockchain.",
		cta: "Visit Website",
		pColor: "orange-600",
		sColor: "pink-700",
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
		status: "completed",
		description:
			"Giffords is an American organization dedicated to fighting gun violence. They offer political, legal, and policy expertise with regards to gun safety.",
		cta: "Visit Website",
		pColor: "cyan-600",
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
		status: "completed",
		description:
			"Formerly Sonabank, Primis Bank is a local financial institution based in Virginia, USA. They reinvent the banking experience by being heavily tech-focused.",
		cta: "Visit Website",
		pColor: "lime-600",
		sColor: "gray-500",
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
		status: "completed",
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

export const EXP_ITEMS: IExpItems[] = [
	{
		company: "Accelo",
		period: "January 2022 - Present",
		description:
			"Maintainer for Accelo's component library which is built using Typescript, React, Next.js, MUI, and Storybook",
		isCurrent: true,
	},
	{
		company: "Code & Theory",
		period: "June 2019 - January 2022",
		description:
			"Front end development for clients from various industries. Different technologies are used primarily, Javascript, React, Node.js, and PHP",
		isCurrent: false,
	},
];
