const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require("cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;


module.exports = defineConfig({
  projectId: 'yq7q5c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  specPatterns:"cypress/e2e/**/*.{feature, features}"
});
