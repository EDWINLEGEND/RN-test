// This file tells Babel how to transform your JS code.
module.exports = function (api) {
    // Cache the config for faster builds
    api.cache(true);
  
    return {
      // Use Expo's default Babel preset
      presets: ['babel-preset-expo'],
  
      // Enable NativeWind so className works in React Native components
      plugins: ['nativewind/babel'],
    };
  };
  