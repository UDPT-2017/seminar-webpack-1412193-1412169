var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // file duong dan bat dau
  entry: './js/1.js',

  // file output ra
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo html-webpack-plugin',
      filename: '../assets/admin.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './ejs/index.ejs'
    })
  ]
}
