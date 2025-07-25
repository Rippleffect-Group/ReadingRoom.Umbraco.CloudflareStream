import {defineConfig} from "vite";
import postcssLit from 'rollup-plugin-postcss-lit';

export default defineConfig({
    build: {
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        lib: {
            entry: ["src/index.ts", "src/backoffice.ts"],
            formats: ["es"],
        },
        outDir: "../ReadingRoom.Umbraco.CloudflareStream/wwwroot/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/dist/",
        sourcemap: true,
        rollupOptions: {
            // external: [/^@umbraco-ui/],
            plugins: [
                postcssLit(),
            ]
        },
    },
});