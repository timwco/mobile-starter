const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve('./')],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        // TODO: SET THESE
        alias: {
          assets: './src/assets',
          screens: './src/screens',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
