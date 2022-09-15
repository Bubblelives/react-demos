import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        hmr: true,
        host: "localhost",
        port: 3000,
    },
});