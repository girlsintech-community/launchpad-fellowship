// Static SPA build for Vercel (or any static host).
// SPA mode emits a prerendered index.html shell into dist/client.
// nitro is disabled — no serverless runtime is needed for a pure static site.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
