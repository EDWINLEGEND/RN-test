// This file tells Babel how to transform your JS code.
module.exports = function (api) {
    // Cache the config for faster builds
    api.cache(true);
  
    return {
      // Use Expo's default Babel preset plus NativeWind preset
      // NativeWind's babel entry returns an internal preset (it nests plugins),
      // so include it under "presets" instead of "plugins".
      presets: ['babel-preset-expo', 'nativewind/babel'],
    };
  };
  