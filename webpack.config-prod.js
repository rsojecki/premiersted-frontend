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
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: root('src/index.html'),
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: false,
        collapseWhitespace: true,
        conservativeCollapse: false,
        decodeEntities: true,
        html5: true,
        includeAutoGeneratedTags: false,
        keepClosingSlash: false,
        maxLineLength: 0,
        preserveLineBreaks: false,
        preventAttributesEscaping: false,
        processConditionalComments: true,
        processScripts: [
          "text/html"
        ],
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmptyElements: false,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true
      }
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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: true
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
};

module.exports = webpackConfig;