const path = require("path");

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/assets/scss/config.scss';`
      }
    }
  },
  outputDir: path.resolve(__dirname, "dist")
}