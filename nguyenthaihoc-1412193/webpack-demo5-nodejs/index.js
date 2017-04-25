var express = require("express");
var app = express();
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var exphbs  = require('express-handlebars');
var path = require("path");

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');
app.set("views", path.resolve("views"));


// muc dich cua toi la day cai public ra ngoai bang cach nao ? quen mat tich

webpack({
    // configuration
    entry : "./source/js/JavaScript_1.js",
    output: {
      path: __dirname + "/public",
      filename: "js/bundle.js"
    },
    module : {
      loaders: [
        {
          test: /\.css$/,
          exclude: /(node_modules)/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader",
          })
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Form Dang Ky By Webpack",
        filename: path.resolve("views/admin.hbs"),
        template: "./source/hello.html",
        minify: false;
      }),
      new ExtractTextPlugin({
        filename: "css/bundle.css",
        disable: false,
        allChunks: true,
      })
    ]
}, function(err, stats) {
    if(err) {
      console.log("is Error");
    }
});
app.use("/public", express.static("public")); // khuc nay quan trong


app.get("/", function (req, res) {
  res.render("admin.hbs");
});


app.listen(8080, function (err) {
  if(err)  {
    console.error(err);
  }
  console.log("Server is connecting in port 8080");
})
