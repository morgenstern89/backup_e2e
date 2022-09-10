const cucumber = require('cypress-cucumber-preprocessor').default

module.exports=(on,config)=>{
    on('file:preprocessor', cucumber())
}

// cypress/plugins/index.js
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
module.exports = (on, config) => {
  on('file:preprocessor', createBundler())
}

const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {

    const options = webpackPreprocessor.defaultOptions;

    Object.assign(options.webpackOptions, {
        resolve: {
            modules: [
                'node_modules',
                path.resolve(__dirname, '../../')
            ]
        }
    });

    on('file:preprocessor', webpackPreprocessor(options));
});