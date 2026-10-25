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
		plugins: [
			UnoCSS(),
			{
				// The dev server doesn't map directories in public/ to their index.html
				// the way GitHub Pages does, so the CSE20 Jupyter Book 404s locally without this.
				name: "cse20-directory-index",
				apply: "serve",
				configureServer(server) {
					server.middlewares.use((req, _res, next) => {
						const [path, query] = (req.url ?? "").split("?");
						if (/^\/CSE20(\/|$)/.test(path) && !/\.[^/]+$/.test(path)) {
							req.url = `${path.replace(/\/?$/, "/")}index.html${query ? `?${query}` : ""}`;
						}
						next();
					});
				},
			},
		],
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
