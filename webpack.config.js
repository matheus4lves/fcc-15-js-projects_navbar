let mode = process.env.npm_lifecycle_event;

const path = require("path");
const postcssPlugins = [require("postcss-import")];

let config = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postcssPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};

if (mode === "dev") {
  config.devServer = {
    host: "local-ip",
    hot: true,
    open: {
      app: {
        name: "firefox",
        arguments: ["--private-window"],
      },
    },
    static: {
      directory: path.join(__dirname, "app"),
    },
  };
}

if (mode === "build") {
}

module.exports = config;
