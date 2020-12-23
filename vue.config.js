module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? `/${process.env.VUE_APP_CONTEXT}` : '',
  assetsDir: process.env.VUE_APP_ASSETS,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false
}
