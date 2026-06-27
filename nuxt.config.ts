// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-16",
    css: ["~/assets/styles/index.scss"],
    devtools: { enabled: true },
    modules: [
        "@nuxt/test-utils/module",
        "@vueuse/nuxt",
    ],
});
