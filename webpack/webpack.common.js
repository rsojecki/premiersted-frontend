const { root } = require('./helpers');

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', "sass-loader"] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(ttf|eot|svg|jpg|jpeg|png|gif|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
    ]
  },
  plugins: []
};
