var allure = require("nightwatch-allure-adapter");

module.exports = {
    
    reportDir: './report',
    reporter: allure.write,
    waitForConditionTimeout: 10000 

  
};