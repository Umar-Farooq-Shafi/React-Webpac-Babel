const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry:  ['react-hot-loader/patch', "./src/index.js"],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "public"),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
