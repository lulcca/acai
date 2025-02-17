export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      repository: 'https://github.com/lulcca/acai',
    },
  },
});
