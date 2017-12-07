const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

console.log('NODE_ENV:', process.env.NODE_ENV);

module.exports = {
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index'),
	},
	devtool: 'source-map',
	target: 'web',
	output: {
		path: DIST_DIR,
		publicPath: '/',
		filename: '[name].[chunkhash].js',
	},
	devServer: {
		inline: true,
		port: 5000,
	},
	plugins: [
		new ExtractTextPlugin('[name].[contenthash].css'),
		new WebpackMd5Hash(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true,
			},
		}),
		new webpack.optimize.UglifyJsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loaders: ['babel-loader'],
			},
			// {
			// 	test: /(\.css)$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		use: ['style-loader', 'css-loader'],
			// 	}),
			// },
			{
				test: /(\.css)$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap'),
			},
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
