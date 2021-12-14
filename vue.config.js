// vue.config.js
const FileManagerPlugin = require('filemanager-webpack-plugin')
const { resolve } = require('path')
const path = require('path')
const name = 'vueAdmin'
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
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new FileManagerPlugin({
        events: {
          onEnd: {
            delete: [`./${name}_${process.env.NODE_ENV}.zip`],
            archive: [
              {
                source: path.join(__dirname, './dist'),
                destination: path.join(
                  __dirname,
                  `./${name}_${process.env.NODE_ENV}.zip`
                )
              }
            ]
          }
        }
      })
    ]
  },
  productionSourceMap: false
}
