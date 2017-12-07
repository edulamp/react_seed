const webpack = require('webpack');
const webpackConfig = require('../webpack.prod');
const chalk = require('chalk');

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundles for production...'));

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();
	if (jsonStats.errors.length !== 0) {
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if (jsonStats.warnings.length !== 0) {
		console.log('webpack generates the following warnings');
		return jsonStats.warnings.map(warning =>
			console.log(chalk.yellow(warning)),
		);
	}

	console.log(
		chalk.green('You app has been built for production and written to /dist'),
	);
	return 0;
});
