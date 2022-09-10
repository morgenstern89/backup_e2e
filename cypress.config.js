const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'yq7q5c',
  e2e: {
     async setupNodeEvents(on, config) {
          const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });

          on("file:preprocessor", bundler);
          await addCucumberPreprocessorPlugin(on, config);

          return config;
        },
     baseUrl:"https://react-redux.realworld.io",
//     specPattern: "cypress/e2e/features/**/*.{feature, features}",
     supportFile: false,
     experimentalStudio: true
  },
});



