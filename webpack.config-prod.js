const webpack = require('webpack');
const path = require('path');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

const {AotPlugin} = require('@ngtools/webpack');

const tsconfigs = {
  client: root('./src/tsconfig.browser.json')
};

const aotTsconfigs = {
  client: root('./src/tsconfig.browser.json')
};

function getAotPlugin(platform, aot) {
  return new AotPlugin({
    tsConfigPath: aot ? aotTsconfigs[platform] : tsconfigs[platform],
    skipCodeGeneration: !aot
  });
}

function root(path) {
  console.log('test');
  console.log(resolve(__dirname, path));
  return resolve(__dirname, path);
}

const webpackConfig = {
  entry: root('./src/main.browser.ts'),
  output: {
    path: root('dist/public'),
    filename: 'client.js'
  },
  target: 'web',
  plugins: [
    getAotPlugin('client', !!{}),
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'head'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: false,
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
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
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
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
