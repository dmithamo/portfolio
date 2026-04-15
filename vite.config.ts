/// <reference types="vitest" />

import { defineConfig } from "vite";
import analog from "@analogjs/platform";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    analog({
      content: {
        highlighter: "shiki",
      },
      prerender: {
        routes: ["/blog"],
      },
    }),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"],
  },
  server: {
    proxy: {
      "/.well-known": {
        target: "http://localhost:5173", // Point to self
        bypass: (req, res) => {
          res.statusCode = 404;
          res.end();
          return false;
        },
      },
    },
  },
}));
