import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: [
                "src/index.ts"
            ],
            formats: ["es"],
        },
        outDir: "../ReadingRoom.Umbraco.CloudflareStream/wwwroot/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco-cms/, /^@umbraco\/backoffice/], // ignore the Umbraco Backoffice package in the build
        },
    },
    base: "/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/", // the base path of the app in the browser (used for assets)
});