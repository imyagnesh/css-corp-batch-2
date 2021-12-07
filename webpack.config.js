const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
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