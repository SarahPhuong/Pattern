module.exports = {
    entry: [
        'bootstrap/dist/css/bootstrap.min.css',
        './sass/a.scss',
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!bootstrap/dist/js/bootstrap.min.js',
        './src2/app.jsx'
    ],
    output: {
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        loaders: [
            { 
                loader: 'babel-loader', 
                test: /\.jsx$/, 
                exclude: /node_modules/
            },
            { loader: 'style-loader!css-loader', test: /\.css$/ },
            { loader: 'style-loader!css-loader!sass-loader', test: /\.scss$/ },
            { loader: 'url-loader', test: /\.(svg|ttf|woff|woff2|eot)$/ }
        ]
    },
    devtool: 'source-map'
}