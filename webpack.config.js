const path = require('path')
const webpack = require('webpack')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'source-map',
    entry: {
        app: process.env.NODE_ENV === 'production'
            ? [
                'babel-polyfill',
                path.resolve(__dirname, 'src', 'main.js')
            ]
            : [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://0.0.0.0:9000',
                'webpack/hot/only-dev-server',
                path.resolve(__dirname, 'src', 'main.js')
            ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                include: /node_modules\/bootstrap\/scss/,
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader'
                    }],
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf)$/,
                use: [
                    'url-loader?limit=10000'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'freeCodeCamp e-commerce',
            filename: 'index.html',
            template: 'index.ejs',
            inject: 'body',
            favicon: 'favicon.ico'
        }),
        new CopyWebpackPlugin([
            { from: 'images/', to: 'images/' }
        ]),
        new ExtractTextPlugin('styles.css'),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'dev'
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keen_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                join_vars: true,
                if_return: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ProgressBarPlugin()
    )

    // Remove logging in production
    config.module.rules.push({
        test: /\.jsx?$/,
        use: ['strip-loader?strip[]=console.log'],
        exclude: /node_modules/
    })
}

module.exports = config
