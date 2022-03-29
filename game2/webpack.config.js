const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: "wordrelay-setting",
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./Client'],
    },  // 입력
    module: {
        rules: [{
            test:/\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets: [
                    ['@babel/preset-env',{
                        targets: {
                            browsers: ['> 1% in KR'],   // browerslist
                        }
                    }],    //옛날 브라우저 지원
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ],
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        devMiddleware: { publicPath: '/dist/' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
};
