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
    plugins: [
      './src/plugins/add/index.ts',
      './src/plugins/bar/index.ts',
      './src/plugins/foo/index.ts',
      './src/plugins/subtract/index.ts'
    ]
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
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'core'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}
