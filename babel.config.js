module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      modules: false, // this setting needed for tree shaking (especially with lodash)
      corejs: 3
    }]
  ],
  plugins: ['@babel/transform-runtime'],
  comments: true // if this is false, then webpackChunkName won't be used.
  // If we were using unit tests in this project, this is how it should be set up for mocha or jest
  // env: {
  //   test: {
  //     presets: ['@babel/preset-env'],
  //     plugins: ['dynamic-import-node']
  //   }
  // }
}
