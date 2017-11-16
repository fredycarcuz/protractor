exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['thankyou/thankyoucheck.js','thankyou/cciu/landing.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  jasmineNodeOpts: {
    showColors: true
  },
  params: {
    config:{
      env: 'dev',
      device: 'desktop',
    },
    site: {
      alias: 'CCIU',
      src: '',
      url: 'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/',
      page: 'thankyou/',
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
