const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:"https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/HRMPOC/**/*.{js,jsx,ts,tsx,feature}",
    // chromeWebSecurity: false,
    testIsolation: false,
    experimentalRunAllSpecs: true,
  },

  env: {
    url: "https://opensource-demo.orangehrmlive.com",
    // url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username: "Admin",
    password: "admin123",
  },
});
