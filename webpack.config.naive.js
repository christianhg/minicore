const BundleBuddyWebpackPlugin = require('bundle-buddy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist-naive'),
    port: '8000'
  },
  devtool: 'source-map',
  entry: {
    core: './src/core/index.ts',
    add: './src/plugins/add/index.ts',
    subtract: './src/plugins/subtract/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist-naive'),
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
  plugins: [new BundleBuddyWebpackPlugin(), new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.ts']
  }
}
