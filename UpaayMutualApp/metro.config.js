const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add NativeWind configuration
  const windConfig = withNativeWind(config, { input: "./global.css" });

  const { transformer, resolver } = windConfig;

  // Add react-native-svg-transformer configuration
  windConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };

  windConfig.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return windConfig;
})();
