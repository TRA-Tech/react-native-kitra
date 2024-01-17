// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: 'webpack-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            "util": false
          },
        },
      };
    },
  };
};
