const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: "development",
	entry: "/src/index.js",
	output: {
		filename: 'html_bundeled.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /.html$/i,
				use: 'html-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png||jpeg||jpg||gif||svg||ico)$/i,
				use: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
				]
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			favicon: 'public/favicon.ico'
		}),
		new webpack.ProvidePlugin({
			"React": "react"
		})
	]
}