
module.exports = {
    devServer: {
      port: 8080,
      // host: '10.28.218.137',
      //lqy添加 axios出现跨域失败，需要配置，再更改axios.defaults.baseURL = '/apis'
      proxy: {
        '/apis': {
          target: 'http://47.99.134.126:28019/api/v1',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/apis': ''
          }
        }
      }
    },
    css: {
      loaderOptions: {
        stylus: {
          import: '~@/assets/css/mixin.styl'
        }
      }
    }
  }