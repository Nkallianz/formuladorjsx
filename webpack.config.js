const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  entry: {  index: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, 
    {
      test: /\.scss|css$/,
      use: [{
        loader:   'style-loader'
      },{
          loader:'css-loader'
      },{  
        loader:'sass-loader'},
      ]
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 4200,
    stats: "errors-only",
    open: false,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      "React": "react"
  }),
  ],
};