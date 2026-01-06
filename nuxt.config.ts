// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxtjs/tailwindcss"],
    app: {
        head: {
            script: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
        },
    },
    css: ["@/assets/css/global.css"],
    ssr: false,
});
