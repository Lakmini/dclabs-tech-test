const path = require('path');

module.exports = {
  setupFiles: [path.resolve(__dirname, 'config/shim.js')],
  setupTestFrameworkScriptFile: path.resolve(__dirname, 'config/testConfig.js'),
  testMatch: ['<rootDir>/src/**/*.spec.js?(x)']
};