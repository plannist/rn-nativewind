module.exports = {
  presets: ['module:@react-native/babel-preset', "nativewind/babel"],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src', "./"],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "@": "./"
        }
      },
    ],
  ],
};
