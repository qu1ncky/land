module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/icons-material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'mui-icons',
    ],
  ],
};
