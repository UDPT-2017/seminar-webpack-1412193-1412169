var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

  entry: './js/1.js',

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  // css-loader: chuyen ma
  module: {
      loaders: [
         {
           test: /\.css$/,
           exclude: /(node_modules)/,
           use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
                publicPath: "/dist"
           })
           //use: ['style-loader','css-loader'] //'style-loader!css-loader' // style phải làm trước rồi mới tới css
         },
         {
           test: /\.scss$/,
           exclude: /(node_modules)/,
           use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"],
                publicPath: "/dist"
           })
           //use: ['style-loader','css-loader', 'sass-loader']
         }
      ]
  },

  // dinh nghia file dau vao va file dau ra de webpack thuc hien chuan hoa sang JS Thuan
  plugins: [
      new HtmlWebpackPlugin({
        title: {"Title":'Demo html-webpack-plugin',"Hello":"This is my ejs plugins"},
        filename: '../assets/admin.html', // tai sao lai la .. do no se lay file output lam chinh
        template: './html/index.html'
      }),
      new ExtractTextPlugin({
        filename: "bundle.css",
        disable: false,
        allChunks: true
      })
  ]
  // dinh nghia file se dc dinh nghia
}
