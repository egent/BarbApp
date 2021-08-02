"use strict";

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['babel-plugin-inline-import', {
    extensions: ['.svg']
  }], ['module-resolver', {
    root: ['./'],
    alias: {
      '@actions': './src/actions',
      '@assets': './src/assets',
      '@components': './src/components',
      '@constants': './src/constants',
      '@reducers': './src/reducers',
      '@sagas': './src/sagas',
      '@screens': './src/screens',
      '@services': './src/services',
      '@store': './src/store'
    }
  }]]
};