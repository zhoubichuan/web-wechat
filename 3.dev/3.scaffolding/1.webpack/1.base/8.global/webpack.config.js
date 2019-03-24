const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let webpack = require("webpack");
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
    // new webpack.ProvidePlugin({
    //   $: "jquery" //在每个模块中注入$
    // })
  ],
  externals: [{ jquery: "$" }],
  module: {
    rules: [
      // {
      //   test: require.resolve("jquery"),
      //   use: "expose-loader?$!jquery"
      // },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  }
};
