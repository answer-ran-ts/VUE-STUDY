// vue.config.js
module.exports = {
  lintOnSave: true,
  publicPath: './',
  // outputDir: "dist",

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/index.scss";'
      }
    }
  },
  // performance: {
  //   hints: 'warning',
  //   // 入口起点的最大体积
  //   maxEntrypointSize: 50000000,
  //   // 生成文件的最大体积
  //   maxAssetSize: 30000000,
  //   // 只给出 js 文件的性能提示
  //   assetFilter: function (assetFilename) {
  //     return assetFilename.endsWith('.js')
  //   }
  // },
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
