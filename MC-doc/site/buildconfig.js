import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", ">0.016%", "chromeAndroid 44"],
      // >0.016%, defaults, chromeAndroid 44
    }),
  ],
});
