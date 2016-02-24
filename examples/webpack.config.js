var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  './index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.ejs$/,
				loader: "html!ejs4html"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.ejs',
			inject: 'body'
		})
	]
};