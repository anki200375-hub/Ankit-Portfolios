import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The site has no server-side code, so every page is prerendered to static HTML
// in dist/client, which Netlify serves directly (see netlify.toml).
export default defineConfig({
  server: { port: 8080 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 2,
        // Only crawl pages; files such as the CV PDF are copied as-is from public/.
        filter: ({ path }) => !/\.[a-z0-9]+$/i.test(path),
      },
      // Written to 404.html, which Netlify serves for any unknown URL.
      pages: [{ path: "/404", prerender: { outputPath: "/404.html" } }],
    }),
    viteReact(),
  ],
});
