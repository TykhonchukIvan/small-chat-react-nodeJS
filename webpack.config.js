const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"./server/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx?$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/,
                use: [CssWebpackPlugin.loader, "css-loader", "less-loader"]
            },
        ]
    },
    // devServer: {
    //     port: 5000,
    //     proxy: {
    //         context: () => true,
    //         "/api": {
    //             target: "http://localhost:8888",
    //             pathRewrite: {"^/api" : ""}
    //         }
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new CssWebpackPlugin({
            filename: "style.css"
        })
    ],
};