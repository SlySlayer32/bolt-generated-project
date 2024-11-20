const { getDefaultConfig } = require('@expo/metro-config');

    const defaultConfig = getDefaultConfig(__dirname);

    defaultConfig.resolver.assetExts.push('db', 'mp3', 'ttf', 'png', 'jpg');

    module.exports = defaultConfig;
