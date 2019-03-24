const path = require('path')
const glob = require('glob')
const webpack = require('webpack');
const withCSS = require('@zeit/next-css')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const generateUUIDV4 = () => {
  var seed = Date.now();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (seed + Math.random() * 16) % 16 | 0;
      seed = Math.floor(seed / 16);
      return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16);
  });
  return uuid;
}
module.exports = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(new webpack.DefinePlugin({
      "process.env": {
          build_version: JSON.stringify(generateUUIDV4()),
      }
  }))
    config.resolve.alias = {
      Config$: path.resolve(__dirname, 'src/common/config/index.js')
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'Config': 'Config',
        'Redux': 'redux',
        'ReactRouterRedux': 'react-router-redux',
        'ReactRedux': 'react-redux',
        'ReactRouter': 'react-router',
        'Link': 'next/link',
        'axios': 'axios'
      })
    ),
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      ,
      config.module.rules.push(
        {
          test: /\.(css|scss)/,
          loader: 'emit-file-loader',
          options: {
            name: 'static/[path][name].[ext]'
          }
        }
        ,
        {
          test: /\.css$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader']
        }
        ,
        {
          test: /\.s(a|c)ss$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['styles', 'node_modules']
                  .map((d) => path.join(__dirname, d))
                  .map((g) => glob.sync(g))
                  .reduce((a, c) => a.concat(c), [])
              }
            }
          ]
        }
      );
    config.resolve.modules.push(path.resolve('./src'))
    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  },

}
