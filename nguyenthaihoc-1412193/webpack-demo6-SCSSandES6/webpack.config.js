module.exports = {

  // file duong dan bat dau
  entry: './js/script-1.js',

  // file output ra
  output: {
    path:'dist',
    filename: '/bundle.js'
  },

module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            presets:['es2015']
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      }
    ]
  }
}
