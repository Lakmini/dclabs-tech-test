const path = require("path");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    bundle: ["./src/app.js"],
  },
  output: {
    publicPath: "/dist/",
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".mjs", ".js", ".jsx"],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    writeToDisk: true,
    contentBase: path.resolve("dist"),
    publicPath: "/",
    hot: true,
    historyApiFallback: true,
  },
  target: "web",
};
