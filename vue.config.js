const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isProduction ? './' : '/',

  outputDir: 'dist',

  assetsDir: 'static',

  filenameHashing: true,

  productionSourceMap: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: (config) => {
    if (isProduction) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          // 是否过滤
          chunkFilter: (chunk) => {
            // Exclude uglification for the `vendor` chunk
            if (chunk.name === 'vendor') {
              return false
            }
            return true
          },
          // 是否缓存
          cache: true,
          // 是否多进程打包
          parallel: true,
          // 提取注释
          extractComments: 'all'
        })
      )
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
      .set('@router', resolve('src/router'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  }
}
