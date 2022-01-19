module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
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
