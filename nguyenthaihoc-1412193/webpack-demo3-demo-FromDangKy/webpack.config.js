var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry : "./source/js/JavaScript_1.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module : {
    loaders: [
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
            publicPath: "/dist"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Form Dang Ky By Webpack",
      filename: "admin.html",
      template: "./source/hello.html",
      minify: false,
      hash:true
    }),
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true,
    })
  ]
}
