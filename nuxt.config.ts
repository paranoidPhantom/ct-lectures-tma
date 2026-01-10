// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: [
      "@nuxt/eslint",
      "@nuxt/fonts",
      "@nuxtjs/tailwindcss",
      "@nuxt/icon",
      "@vueuse/nuxt",
    ],
    fonts: {
        defaults: {
            weights: ["100", "400", "700", "800", "900"],
        },
    },
    app: {
        head: {
            script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
        },
    },
    ssr: false,
    css: ["@/assets/css/global.css"],
    build: {
        transpile: ["vue"],
    },
});