const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        styles: resolve('src/styles')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~styles/variables.scss";`
      }
    }
  }
}
