exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/behavior/flow/prefillDriverInformation.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  SELENIUM_PROMISE_MANAGER: 1,
  jasmineNodeOpts: {
    showColors: true
  },
  params: {
    config:{
      env: 'dev',//'dev', 'pro'
      device: 'desktop', //'desktop', 'mobile'
    },
    site: {
      alias: 'CCIU',
      src: '',
      url: 'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/',
      page: 'get-quotes/',
      zip: '90245',
      source_track: '',
      paths: {
        sitelinks: 'sitelinks/',
        thankyou: 'thankyou/',
        landing: 'get-quotes/'
      }
    },
    driverInfo: require('./data/multiVehicle.json')
  }
};
