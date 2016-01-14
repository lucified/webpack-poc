var webpack = require('webpack'),
    path = require('path'),
    babelSettings = {
      cacheDirectory: true,
      presets: ['es2015', 'react']
    }

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    //extensions: [ '', '.js', '.jsx', '.css', '.scss' ],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel?'+JSON.stringify(babelSettings)],
        //exclude: ['node_modules'],
        include: [
         path.resolve(__dirname, "src"),
         path.resolve(__dirname, 'node_modules/sub-project'),
         path.resolve(__dirname, 'node_modules/sub-sub-project')
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass"]
      },
      {
        test: /\.(jpeg|jpg|gif|png|json)$/,
        loaders: ["file-loader?name=[name]-[hash:12].[ext]"]
      }

    ]
  }
}
