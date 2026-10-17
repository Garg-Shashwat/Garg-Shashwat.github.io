import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    rollupOptions: {
      // One HTML file per URL, so GitHub Pages serves /sikka/privacy/ and the rest as plain pages.
      input: {
        main: path.resolve(__dirname, "index.html"),
        sikka: path.resolve(__dirname, "sikka/index.html"),
        sikkaChangelog: path.resolve(__dirname, "sikka/changelog/index.html"),
        sikkaPrivacy: path.resolve(__dirname, "sikka/privacy/index.html"),
        sikkaTerms: path.resolve(__dirname, "sikka/terms/index.html"),
        sikkaDeleteAccount: path.resolve(
          __dirname,
          "sikka/delete-account/index.html",
        ),
      },
    },
  },
});
