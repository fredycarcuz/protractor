exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['form/formcheck.js'],
  capabilities: {
  	'browserName': 'firefox'
  },
  jasmineNodeOpts:{
	showColors: true  	
  },
  params:{
  	site:{
  		alias: 'CCIU',
      src: 'cciu_google',
  		url:'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/',
      page: 'form/',
  		zip:'90210',
  		source_track: '',
      paths:{
        sitelinks: 'sitelinks/',
        thankyou: 'thankyou/',
        landing: 'get-quotes/'
      }
  	},
    driverInfo: require('./data/singleDriver.json')
  }
};