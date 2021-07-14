const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: "commonjs2"
    },
    devtool: false, // prevent webpack from using eval() on my module
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", 'css-loader', "sass-loader"]
            }
        ],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
