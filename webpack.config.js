const path = require('path');
// const webpack = require('webpack');

console.log(process.env);

module.exports = {
	entry: {},
	devtool: 'inline-source-map',
	target: 'web',
	output: {
		path: path.join(__dirname, ''),
		filename: '[name].bundle.js',
	},
	devServer: {
		port: 5000,
		inline: true,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loaders: ['babel-loader'],
			},
			{ test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
			{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream',
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml',
			},
		],
	},
};
