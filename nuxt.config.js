export default {
  srcDir: 'src',
  ssr: false,
  target: 'static',
  head: {
    title: '{ title }',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api', '@nuxtjs/stylelint-module'],
  modules: [],
  build: {},
}
