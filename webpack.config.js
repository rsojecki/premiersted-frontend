const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const {AotPlugin} = require('@ngtools/webpack');

function root(path) {
  return resolve(__dirname, path);
}

const webpackConfig = {
  entry: root('src/main.browser.ts'),
  output: {
    path: root('dist/public'),
    filename: 'client.js'
  },
  target: 'web',
  plugins: [
    new AotPlugin({
      tsConfigPath: root('src/tsconfig.browser.json'),
      skipCodeGeneration: false
    }),
    new HtmlWebpackPlugin({
      template: root('src/index.html'),
      output: root('dist'),
      inject: 'head'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [root('node_modules')]
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: '@ngtools/webpack'},
      {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', "sass-loader"]},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'},
      {test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = webpackConfig;
