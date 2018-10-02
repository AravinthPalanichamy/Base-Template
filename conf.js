
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
   
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,

    // specs: ['specs/*Spec.js'],
    suites:{
        one: ['specs/lavaSpec.js'],
    },
    baseUrl: 'https://www.lavanguardia.com/',
    framework: 'jasmine',

    onPrepare: () => {
        // set browser size...
        browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};