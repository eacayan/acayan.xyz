type TailwindColors =
	| "red"
	| "blue"
	| "yellow"
	| "green"
	| "orange"
	| "purple"
	| "violet"
	| "cyan"
	| "teal"
	| "sky"
	| "rose"
	| "pink"
	| "rose"
	| "amber"
	| "emerald"
	| "lime"
	| "indigo"
	| "fuchsia"
	| "slate"
	| "gray"
	| "zinc"
	| "neutral"
	| "stone";
type TailwindLuminance = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type ThemeColors = `${TailwindColors}-${TailwindLuminance}`;

enum StatusEnum {
	completed,
	wip,
}

export interface IMenuItems {
	title: string;
	href: string;
}

export interface IProjectItems {
	name: string;
	logo: string;
	alt: string;
	href: string;
	role: string;
	status: keyof typeof StatusEnum;
	description: string;
	cta: string;
	pColor: ThemeColors;
	sColor: ThemeColors;
	technologies: { alt: string; logo: string }[];
}
