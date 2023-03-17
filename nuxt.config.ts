export default {
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: 'https://api.example.com',
    },
    css: [
        'assets/css/plugins.min.css',
        'assets/css/main.css'
    ]
};
