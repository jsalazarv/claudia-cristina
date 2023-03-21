import en from '~/locales/en';

export default {
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/axios',
    ],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    header: {
                        home: 'Home'
                    }
                },
                es: {
                    header: {
                        home: 'Inicio'
                    }
                }
            }
        }
    },
    axios: {
        baseURL: 'https://api.example.com',
    },
    css: [
        'assets/css/plugins.min.css',
        'assets/css/main.css'
    ]
};
