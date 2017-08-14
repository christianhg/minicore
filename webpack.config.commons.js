const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist-commons'),
    port: '8000'
  },
  devtool: 'source-map',
  entry: {
    core: './src/core/index.ts',
    add: './src/plugins/add/index.ts',
    subtract: './src/plugins/subtract/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist-commons'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new BundleBuddyWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'core',
      filename: 'core.js'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}
