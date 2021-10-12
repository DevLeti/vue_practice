module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
        `
      }
    }
  },
  publicPath: '/vue_practice'
}