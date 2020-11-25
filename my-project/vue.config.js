module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/mimal/': {
        target: 'http://mock.shtodream.cn/mock/5f96744d04f654354c74d039/mimal',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/mimal': '/'
        }
      }
    }
  },
  publicPath: '/app',
  outputDir: 'dest',
  indexPath: 'index2.html'
}
