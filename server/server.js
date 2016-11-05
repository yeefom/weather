const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = express();
const port = 8080;
const compiler = webpack(config);

app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
