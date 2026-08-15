const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/assets/js/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        static: './docs',
        port: 3000,
        open: true,
        hot: true
    }
};