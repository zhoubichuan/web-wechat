module.exports = {
    webpack: (config) => {
      config.output.library = `sub2`
      config.output.libraryTarget = "umd"
      config.output.publicPath = "//localhost:5052/"
      return config
    },
    devServer: function(configFunction) {
      return function(proxy, allowedHost) {
        const config = configFunction(proxy, allowedHost)
        config.headers = {
          "Access-Control-Allow-Origin": "*",
        }
        return config
      }
    },
  }