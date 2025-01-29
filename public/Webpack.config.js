module.exports = {
  // Other configurations...
  devtool: false, // Disable source maps
  ignoreWarnings: [
      {
          message: /Failed to parse source map/,
      },
  ],
};