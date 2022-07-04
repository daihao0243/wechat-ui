const {
  defineConfig
} = require('@vue/cli-service')
const {
  VantResolver
} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  outputDir: process.env.outputDir,
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#009688',
          'van-primary-color': '#009688',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})