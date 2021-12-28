
// vue.config.js
const { resolve } = require('path')
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
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  productionSourceMap: false
}
