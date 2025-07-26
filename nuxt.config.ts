import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        src: fileURLToPath(new URL("./src", import.meta.url)),
    },
    compatibilityDate: "2025-07-16",
    css: ["~/assets/styles/index.scss"],
    devtools: { enabled: true },
    modules: [
        "@nuxt/test-utils/module",
        "@vueuse/nuxt",
    ],
});
