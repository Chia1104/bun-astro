import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  server: { port: process.env.PORT ? Number(process.env.PORT) : undefined },
  adapter: node({
    mode: "standalone",
  }),
});
