var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry : "./source/js/JavaScript_1.js",
  output: {
    path: path.resolve("dist"),
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
  devServer : {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port : 9000
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
