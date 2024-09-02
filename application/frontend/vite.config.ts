import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  base: import.meta.VITE_BASENAME || "/",
  resolve: {
    alias: {
      "~api": path.resolve(__dirname, "./src/api"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~types": path.resolve(__dirname, "./src/types"),
      "~locales": path.resolve(__dirname, "./src/locales"),
      "~configs": path.resolve(__dirname, "./src/configs"),
      "~assets": path.resolve(__dirname, "./src/assets"),
      "~pages": path.resolve(__dirname, "./src/pages"),
    },
  },
})
