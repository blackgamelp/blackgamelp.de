const webpack = require('webpack');
const path = require('path');
let config = {
	entry: ['babel-polyfill', './src/client.jsx'],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js',
		publicPath: '/',
	},
	plugins: [],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
				],
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!css-loader?module&localIdentName=[hash:base64:5]!sass-loader?indentedSyntax&outputStyle=compressed',
			},

			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						query: {
							progressive: true,
							mozjpeg: {
								quality: 45
							},
							optipng:{
								optimizationLevel: 7,
							},
						}
					}
				]
			}


		],
	},

  // Automatically transform files with these extensions
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	target: 'web',
	
};

if(process.env.NODE_ENV === 'production') {
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			screw_ie8: true,
			warnings: false
		},
	}));
	config.plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}
	}));

}else{
	config.devServer = {
		host: 'localhost',
		contentBase: 'build',
		port: 3000,
		historyApiFallback: true,
		hot: false,
		inline: true,
	};
}
module.exports = config;