// vue.config.js
module.exports = {
  lintOnSave: true,
  publicPath: './',
  // outputDir: "dist",
  devServer: {
    port: 8093,
    proxy: {
      '/yx': {
        target: 'http://aladdin.zj.chinamobile.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/yx': ''
        }
      }
    }
  },
  productionSourceMap: false
}
