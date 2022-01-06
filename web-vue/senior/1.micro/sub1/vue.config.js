module.exports = {
    devServer: {
        port: 5501,
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    },
    publicPath: './',
    configureWebpack: {
        output: {
            library: "sub1",
            libraryTarget: "umd",
        },
    },
}