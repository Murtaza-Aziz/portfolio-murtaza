import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const base = "/portfolio-murtaza/";

/** Redirect localhost:5173/ → /portfolio-murtaza/ during dev. */
function devBaseRedirect(): Plugin {
  return {
    name: "dev-base-redirect",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req as { url?: string }).url ?? "";
        if (url === "/" || url === "/index.html") {
          res.writeHead(302, { Location: base });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), devBaseRedirect()],
  server: {
    open: base,
  },
  preview: {
    open: base,
  },
});
