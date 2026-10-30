const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src/app/index.tsx"),

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "js/[name].[contenthash:8].js" : "js/[name].js",
      publicPath: "/",
      clean: true,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  namedExport: false,
                  exportLocalsConvention: "as-is",
                  localIdentName: isProduction
                    ? "[hash:base64:8]"
                    : "[name]__[local]--[hash:base64:5]",
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        favicon: path.resolve(__dirname, "public/favicon.svg"),
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
        }),
    ].filter(Boolean),

    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
          },
        },
      },
    },

    performance: {
      hints: isProduction ? "warning" : false,
      maxAssetSize: 400 * 1024,
      maxEntrypointSize: 400 * 1024,
    },

    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",

    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
