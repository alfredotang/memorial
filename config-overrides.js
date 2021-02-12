const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBabelPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
  }),
  addBabelPlugins(['@emotion']),
  addDecoratorsLegacy()
);
