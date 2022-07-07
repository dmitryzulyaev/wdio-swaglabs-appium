exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'dmytroziuliaiev1',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'bgeUErs1RiZgpyvNvDyq',

    updateJob: false,
    specs: [
        'appiumtests/ios/specs/loginClass.spec.js',
        'appiumtests/ios/specs/login.spec.js',
        'appiumtests/ios/specs/productPurchase.spec.js',
    ],
    exclude: [],

    capabilities: [{
        project: "SwagLabsMobileApp Project",
        build: 'SwagLabsMobileApp iOS',
        name: 'SwagLabsMobileApp_test',
        device: 'iPhone 12',
        os_version: "14",
        app: process.env.BROWSERSTACK_APP_ID || 'bs://a47aa5e3855689a0b6200a9ee199f0db2bf4e295',
        'browserstack.debug': true
    }],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 40000
    }
};
