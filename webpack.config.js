'use strict';

const path = require('path');

module.exports = {
  // 打包入口
  entry: {
    index: './src/index.js',
  },

  // 指定输出地址及打包出来的文件名
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  // Loader路径
  resolveLoader: {
    modules: ['node_modules', './loaders'],
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'replace-loader',
          // 传递参数
          options: {
            name: 'Tom',
          },
        },
      },
    ],
  },

  // 开发环境
  mode: 'production',
};
