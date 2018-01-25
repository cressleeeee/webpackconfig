const path = require('path');

const baseConfig = {
	rules: [
		/**
		 * ES6
		 */
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				// options: {
				// 	presets: ['env']
				// }
			},
			include: [path.resolve(__dirname, './src')],
			exclude: '/node_modules/'
		},
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader',
					options: {
						inserInto: "#app", //插入到元素内
						singleton: true, //单个style标签
						transform: './css.transform.js' //webpack执行插入style标签时可以在该文件中做一些操作：判断浏览器版本厂商、浏览器的宽度等
					}
				},
				{
					loader: 'css-loader',
					options: {
						minimize: true, //是否压缩
					}
				},
			],
			exclude: '/node_modules/'
		},
		/**
		 * stylus * 必须配合css-loader使用
		 */
		{
			test: /\.styl$/,
			use: [
				{
					loader: "style-loader",
					options: {
						transform: './css.transform.js'
					}
				},
				{
					loader: "css-loader"
				},
				/**
				 * postcss *
				 */
				{
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: [
							require('autoprefixer')()
						]
					}
				},
				{
					loader: 'stylus-loader',
				},
			]
		},
		{
			test: /\.(png|jpg|jpeg|gif)$/,
			use: {
				// loader: 'file-loader',
				// options: {
				//     outputPath: 'dist/',
				//     useRelativePath: true,
				// }
				loader: 'url-loader',
				options: {
					limit: 10000,
					outputPath: 'assets/img/'
				}
			}
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: 'html-loader',
					options: {
						attrs: ['img:src', 'img:data-src']
					}
				}
			]
		}

	]
};

module.exports = baseConfig;