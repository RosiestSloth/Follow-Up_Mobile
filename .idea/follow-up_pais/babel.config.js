module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};

module.exports = {
- plugins: [],
+ plugins: ["nativewind/babel"],
};