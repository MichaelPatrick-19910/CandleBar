const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/CandleBar/'
  //   : '/',
  //   pages: {
  //     index: {
  //       // entry for the page
  //       entry: 'src/index/main.js',
  //       // the source template
  //       template: 'public/index.html',
  //       // output as dist/index.html
  //       filename: 'index.html',
  //     }
  //   }
})
