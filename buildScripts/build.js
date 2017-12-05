const webpack = require('webpack');
const webpackConfig = require('../webpack.prod');
const chalk = require('chalk');

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundles for production...'));

webpack(webpackConfig).run(err => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  return 0;
});
