const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',    // hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry:{
        app: './Client',
    },
    module: {
        rules: [{
            test:/\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets: [
                    ['@babel/preset-env',{
                        target: {
                            browsers: ['> 1% in KR'],   // browerslist
                        }
                    }],    //옛날 브라우저 지원
                    '@babel/preset-react'
                 ],
                plugins: [],
            }
        }],
    },
    plugins: [
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },

}