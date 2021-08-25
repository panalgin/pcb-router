module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx'
    ],
  },
  // ...
}