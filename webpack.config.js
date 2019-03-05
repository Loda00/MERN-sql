const miniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')


module.exports = {
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx']
    },
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './app/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 2020,
        open: true,
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new miniCssExtractPlugin({
            filename: './public/styles.css'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}