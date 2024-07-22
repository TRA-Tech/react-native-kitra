const { getDefaultConfig } = require('@expo/metro-config');
const escape = require('escape-string-regexp');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const path = require('path');
const pak = require('../package.json');

const root = path.resolve(__dirname, '..');

const defaultConfig = getDefaultConfig(__dirname);
const modules = [
  '@expo/vector-icons',
  'expo-modules-core',
  ...Object.keys(pak.peerDependencies),
];

module.exports = {
  ...defaultConfig,

  projectRoot: __dirname,
  watchFolders: [root],
  resolver: {
    ...defaultConfig.resolver,
    enableGlobalPackages: true,
    blockList: exclusionList(
      modules.map(
        m => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`),
      ),
    ),

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },
};
