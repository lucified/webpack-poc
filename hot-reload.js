var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    host = 'localhost',
    port = 8080;


var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(port, host, function (err, result) {
  if (err) console.err(err)

  console.log("Listening at %s:%s", host, port)
});
