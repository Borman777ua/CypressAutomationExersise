const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  includeShadowDom: true,
  chromeWebSecutity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: false,
  experimentalSessionSupport: false,
  e2e: {
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    // implement node event listeners here
    baseUrl: "https://www.automationexercise.com/",
    specPattern: 'cypress/e2e/**/*.cy.js',

  },
  "env": {
    "testEmail": "chopin1@yopmail.com",
    "testEmail2": "chopin2@yopmail.com",
    "testName": "Frederyk",
    "testPassword": "Start123!",
    "testFirstName": "Freddie",
    "testLastName": "Chopin",
    "testStreet": "123 Main Street",
    "testCompany": "Alpha Industries",
    "testCountry": "United States",
    "testState": "Tennesy",
    "testCity": "Knoxville",
    "testZipCode": "37950",
    "testMobileNumber": "+15854990579",
    "testCardNumber": "4701322211111234",
    "testCVC": "837",
    "testMM": "12",
    "testYYYY": "2026"


  }
},
);
