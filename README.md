# ejs4html-loader for webpack.

EJS loader for [webpack](http://webpack.github.io/) [html-loader]. Uses [ejs](https://github.com/mde/ejs) function to render templates.


## Installation

`npm install ejs4html-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
 module:{
 	loaders: [
 		{
 			test: /\.ejs$/,
 			loader: "html!ejs-render"
 		}
 	]
 },
 plugins: [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'index.ejs', 
		inject: 'body', 
		minify: { 
			removeComments: true,
			collapseWhitespace: true
		}
	})
],
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



