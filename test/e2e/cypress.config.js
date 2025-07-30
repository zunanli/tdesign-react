const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:15000',
    specPattern: 'test/e2e/**/*.spec.js',
    supportFile: 'test/scripts/cypress/support/index.js',
    fixturesFolder: 'test/scripts/cypress/fixtures',
    videosFolder: 'test/e2e/cy-report/videos',
    screenshotsFolder: 'test/e2e/cy-report/screenshots',
    viewportWidth: 1600,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // 实现节点事件监听器
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'test/e2e/**/*.spec.js',
  },
});