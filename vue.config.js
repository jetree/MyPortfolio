module.exports = {
  outputDir: 'docs',
  assetsDir: './myportfolio/',
  publicPath: process.env.NODE_ENV === 'production'? '/myportfolio/' : '/'
}