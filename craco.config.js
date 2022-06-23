const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
};