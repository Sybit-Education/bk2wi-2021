module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 240000
      }
    }
  }
}
