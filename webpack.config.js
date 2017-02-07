module.exports = {
    entry:  {
        App: "./app/assets/views/js/main.js"
    },
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            test:/\.js$/,
            exclude: /node_modules/
            }
        ]
    }
}