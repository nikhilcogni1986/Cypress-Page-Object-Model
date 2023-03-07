const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: "https://rahulshettyacademy.com",
      teststore_url: "https://automationteststore.com/",
      webdriveruni_url: "http://www.webdriveruniversity.com"
    },
    specPattern: 'cypress/e2e/**/*.js',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 15000,
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true,
    waitForAnimations: true
  },
});
