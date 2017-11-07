exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['flow/prefillDriverInformation.js'],
  capabilities: {
  	'browserName': 'firefox'
  },
  jasmineNodeOpts:{
	showColors: true  	
  },
  params:{
  	site:{
  		alias: 'CCIU',
  		url:'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/',
      page: 'get-quotes/',
  		zip:'90210',
  		source_track: '',
      paths:{
        sitelinks: 'sitelinks/',
        thankyou: 'thankyou/',
        landing: 'get-quotes/'
      }
  	},
    driverInfo: require('./data/singleDriverIncidents.json')
  }
};