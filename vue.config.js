module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ['vuetify'],
  publicPath: process.env.NODE_ENV === 'production' ? 'https://waleedhamza.github.io/Portfolio/' : '/',
}
