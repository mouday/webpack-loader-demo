const loaderUtils = require('loader-utils');

module.exports = function (source) {
  // 获取参数
  let options = loaderUtils.getOptions(this);

  for (let [key, value] of Object.entries(options)) {
    source = source.replace(`{{${key}}}`, value);
  }

  return source;
};
