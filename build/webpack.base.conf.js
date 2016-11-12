var path = require('path')

module.exports = {
    entry: {
        app: './examples/index.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    externals: {
        vue: 'Vue'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        preLoaders: [
//      {
//        test: /\.vue$/,
//        loader: 'eslint',
//        exclude: /node_modules/
//      },
//      {
//        test: /\.js$/,
//        loader: 'eslint',
//        exclude: /node_modules/
//      }
        ],
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
//      {
//        test: /\.json$/,
//        loader: 'json'
//      },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            },
//      {
//        test: /\.(less|css)$/,
//        loader: 'style!css!less'
//      }
        ]
    }
}
