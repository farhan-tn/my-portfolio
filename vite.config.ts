import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages project site (farhan-tn.github.io/portfolio).
// If deploying as a user site (farhan-tn.github.io), change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  build: {
    outDir: "dist",
    target: "es2020",
  },
});
