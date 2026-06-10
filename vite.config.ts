import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://<user>.github.io/portfolio-murtaza/
export default defineConfig({
  base: "/portfolio-murtaza/",
  plugins: [react(), tailwindcss()],
});
