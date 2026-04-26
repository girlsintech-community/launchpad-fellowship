// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, cloudflare (build-only), componentTagger (dev-only), and more.
// We pass options through `tanstackStart` and disable the Cloudflare adapter so
// the build emits a static SPA that Vercel (or any static host) can serve.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
