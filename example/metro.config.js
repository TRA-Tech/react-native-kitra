const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

// eslint-disable-next-line import/no-unresolved
const pak = require('../package.json');

const root = path.resolve(__dirname, '..');

const modules = [
  '@expo/vector-icons',
  'expo-modules-core',
  ...Object.keys(pak.peerDependencies || {}),
];

const config = getDefaultConfig(__dirname);

config.watchFolders = [root];

// Create exclusion patterns for node_modules
const exclusions = modules.map(
  m => new RegExp(`^${path.join(root, 'node_modules', m).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/.*$`),
);

if (config.resolver.blockList) {
  config.resolver.blockList = config.resolver.blockList.concat(exclusions);
} else {
  config.resolver.blockList = exclusions;
}

// Map the package name to the local source
config.resolver.extraNodeModules = {
  ...modules.reduce((acc, name) => {
    acc[name] = path.join(__dirname, 'node_modules', name);
    return acc;
  }, {}),
  '@tra-tech/react-native-kitra': path.join(root, 'src'),
};

// Resolve extensions
config.resolver.sourceExts = [...config.resolver.sourceExts, 'ts', 'tsx'];

module.exports = config;
