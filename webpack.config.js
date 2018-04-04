const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'prop-types', 'react', 'react-dom', 'react-redux', 'react-router-dom',
  'redux', 'redux-thunk', 'redux-logger'
]

module.exports = {
  entry: {
    'client': 'webpack-dev-server/client?http://0.0.0.0:8080',
    'babel-polyfill': ['babel-polyfill'],
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
      /* SCSS */
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [/*'css-loader', 'sass-loader'*/
            {
              loader: 'css-loader',
              options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                    path: './config/postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }))
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '/dist/'),
    publicPath: '/'
  },
  resolve: {
   extensions: ['.js']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: "0.0.0.0"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ]
}
