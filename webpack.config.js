var path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "out"),
        filename: "out.js"        
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
       ],
    },
};