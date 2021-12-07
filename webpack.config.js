const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
    })],
}