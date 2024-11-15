import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        src: fileURLToPath(new URL("./src", import.meta.url)),
    },
    compatibilityDate: "2024-04-03",
    css: ["~/assets/styles/index.scss"],
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    modules: [
        "@nuxt/test-utils/module",
        "@nuxtjs/stylelint-module",
        "@vueuse/nuxt",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
});
