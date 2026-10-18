import { defineConfig } from "astro/config";

// Moving hosts? Change these two (or set the env vars in your host's build settings).
//   GitHub user site : SITE_URL=https://<user>.github.io        BASE_PATH=/
//   GitHub project   : SITE_URL=https://<user>.github.io        BASE_PATH=/<repo>
//   Netlify/Vercel/CF: SITE_URL=https://your-domain.com         BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL ?? "https://joshualumzy.github.io",
  base: process.env.BASE_PATH ?? "/",
  output: "static",
});
