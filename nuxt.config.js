import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#0288D1'
  },
  i18n: {
    locales: () => [{
      code: 'es',
      iso: 'es-ES',
      file: 'es-ES.js',
      name: 'Español'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  head: {
    title: 'Laravel pagaloGT',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  target: 'static',
})
