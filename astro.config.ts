// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import UnoCSS from "unocss/vite";
import siteConfig from "./src/side.config";
import { withTrailingSlash } from "./src/lib/site-url";

// for importing font
import { fontProviders } from "astro/config";

export default defineConfig({
	site: 'https://richardvillagomez.github.io',
	integrations: [sitemap(), mdx()],
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
		plugins: [UnoCSS()],
	},
	image: {
		responsiveStyles: true,
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},
	fonts: [{
    provider: fontProviders.local(),
    name: "Hanken Grotesk",
    cssVariable: "--font-hanken-grotesk",
    options: {
      variants: [{
        src: ['./src/assets/fonts/hankengrotesk-400-latin.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
