import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "es2022",
        lib: {
            entry: [
                "src/index.ts",
                "src/components/save-action.ts",
                "src/components/media-picker.ts"
            ],
            formats: ["es"],
        },
        outDir: "../ReadingRoom.Umbraco.CloudflareStream/wwwroot/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco-cms/, /^@umbraco\/backoffice/], // ignore the Umbraco Backoffice package in the build
            output: {
                // Force shared modules into a separate chunk so the singleton is truly shared
                manualChunks: {
                    'shared': ['./src/common/cf-stream-upload-context.ts']
                },
            }
        },
    },
    base: "/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/", // the base path of the app in the browser (used for assets)
});