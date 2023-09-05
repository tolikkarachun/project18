const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		carousel: './src/js/owl.carousel.min.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
