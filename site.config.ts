/**
 * Scholar Pages - primary configuration
 *
 * Start here for identity, profile, links, and page introductions.
 * About, research, and teaching pages live in src/data as Markdown, and
 * posts live in src/content so this file stays quick to scan.
 */
import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	// Required: the four values most sites should personalize first.
	author: "Richard Villagomez",
	siteUrl: "https://astro-theme-scholars.pages.dev",
	hero: {
		headline: "",
		subheadline:
			`
			I'm a first-year MS candidate in Computer Science at the Baskin School of Engineering, with a research focus in equitable computing education under Professor Hao Yue. I'm excited to be a teaching assistant for CSE 20: Beginning Programming in Python.

I’m a recent UC Berkeley graduate from the island of Saipan in the Northern Mariana Islands, and I studied Computer Science and Data Science.

I'm passionate about finding ways to make computing and data science education more equitable and accessible. I discovered my passion for computing education through my position as an undergraduate teaching assistant for Data 8: Foundations of Data Science (UC Berkeley's largest course!), teaching weekly discussion sections across core data science topics using Python and Jupyter notebooks. I'm currently spending my final summer in Berkeley as a Head Teaching Assistant for the course.

I also organize as a proud member of UAW Local 4811, the union of 48,000 academic workers at the University of California. During undergrad, I organized with fellow EECS and Data Science Workers—it was because of member organizing that we had strong workplace protections to maintain high quality of instruction.
			
			
			
			`,
		profileImage: "/richard.jpg",
		profileAlt: "Abstract illustration representing the fictional researcher Mira Latticewell",
		profileImageHeight: 250,
		profileImageWidth: 250,
		statusBadge: "Fictional demo profile",
	},

	// Common profile and discovery settings.
	description:
		"An entirely fictional academic profile demonstrating the Scholar Pages Astro theme.",
	keywords: [
		"synthetic learning environments",
		"fictional archives",
		"humane web infrastructure",
		"academic website",
		"demo profile",
	],
	// Optional social-preview overrides:
	// language: "en",
	// locale: "en_US",
	// ogImage: "/social-card.png", // Prefer a 1200 × 630 raster image.
	// ogImageAlt: "Scholar name - academic portfolio",
	// ogImageWidth: 1200,
	// ogImageHeight: 630,

	researchInterests: [
		"Synthetic Learning Environments",
		"Speculative Interfaces",
		"Fictional Archives",
		"Imaginary Civic Systems",
	],

	navLinks: [
		{ href: "/about", label: "about" },
		{ href: "/researches", label: "research" },
		{ href: "/teaching", label: "teaching" },
	],
	
	socialLinks: [
		{
			label: "Sample repository",
			href: "https://example.com/mira-latticewell/repository",
			icon: "i-mdi:github",
		},
		{
			label: "Sample notes",
			href: "https://example.com/mira-latticewell/notes",
			icon: "i-mdi:bookshelf",
		},
		{
			label: "Sample archive",
			href: "https://example.com/mira-latticewell/archive",
			icon: "i-mdi:tag-outline",
		},
	],

	// Footer display: links are hidden by default for a quieter academic layout.
	footer: {
		showProfileLinks: false, // Set true to show the social links above in the footer.
		showAuthor: true, // Set false to show the copyright line without the author name.
	},

	// Optional: omit any entry to use the concise academic default copy.
	pageTitles: {
		about: {
			description:
				"A fictional academic background created solely to demonstrate profile, experience, service, and award layouts."
		},
		researches: {
			description:
				"Fictional publications attributed to Mira Latticewell for demonstrating scholarly records and citation tools.",
		},
		teaching: {
			description:
				"Fictional courses showing how teaching records, terms, and materials appear in the theme.",
		},
		posts: {
			description:
				"Fictional notes from the Mira Latticewell demo profile.",
		},
	},

	// Homepage composition: switch off any block you do not want to display.
	homeBlocks: {
		hero: { enabled: true },
		publications: {
			enabled: true,
			description: "Selected fictional publications",
		},
		posts: { enabled: true, description: "Notes from a fictional practice" },
	},
});

export default siteConfig;
