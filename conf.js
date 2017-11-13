exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['validations/landing.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  jasmineNodeOpts: {
    showColors: true
  },
  params: {
    site: {
      alias: 'AIF',
      src: '',
      url: 'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/',
      page: 'get-quotes/',
      zip: '78505',
      source_track: '',
      paths: {
        sitelinks: 'sitelinks/',
        thankyou: 'thankyou/',
        landing: 'get-quotes/'
      }
    },
    driverInfo: require('./data/multiVehicleCurrentlyInsuredIncidents.json')
  }
};
