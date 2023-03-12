const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: "https://rahulshettyacademy.com",
      teststore_url: "https://automationteststore.com/",
      webdriveruni_url: "http://www.webdriveruniversity.com",
      sauceDemo_url: "https://www.saucedemo.com/"
    },
    specPattern: 'cypress/e2e/**/*.js',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 10000,
    experimentalSourceRewriting:true,
    screenshotOnRunFailure: true,
    video: false,
    trashAssetsBeforeRuns: true,
    waitForAnimations: true
  },
});
