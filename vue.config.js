const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    // 在vue.config.js中添加配置就可以定义全局需要使用的less变量。
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          // 这里定义不需要加@，使用的时候需要加@
          globalVars: {
            'geek-color': '#FC6627',
            'geek-gray-color': '#F7F8FA'
          }
        }
      }
    }
  }
})
