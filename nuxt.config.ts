import locales from "./locales";

export default {
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/axios'
    ],
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: locales
        }
    },
    axios: {
        baseURL: 'https://api.example.com',
    },
    css: [
        'assets/css/plugins.min.css',
        'assets/css/main.css',
        'assets/css/general.css',
    ]
};
