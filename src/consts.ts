import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
	NAME: "josiahsmith.dev",
	EMAIL: "jcsmithf22@gmail.com",
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 2,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION:
		"josiahsmith.dev is a minimal and lightweight blog and portfolio for Josiah Smith.",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
	{
		NAME: "X",
		HREF: "https://x.com/Sw1tchy_",
	},
	{
		NAME: "github",
		HREF: "https://github.com/jcsmithf22",
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/jcsmithf2",
	},
];
