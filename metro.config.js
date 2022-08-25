// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = getDefaultConfig(__dirname);

module.exports = {
    resolver: {
        blacklistRE: exclusionList([/#current-cloud-backend\/.*/])
    }
};