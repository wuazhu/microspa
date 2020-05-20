const path = require('path')

module.exports = {
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    }
  },
}