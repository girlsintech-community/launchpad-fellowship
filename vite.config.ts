// Static SPA build for Vercel (or any static host).
// SPA mode emits a prerendered index.html shell into dist/client and skips
// the Cloudflare/Nitro server output, so no serverless runtime is required.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
