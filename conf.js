exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['sitelinks/sitelinkscheck.js','sitelinks/cciu/sitelinks.js'],
  capabilities: {
  	'browserName': 'firefox'
  },
  jasmineNodeOpts:{
	showColors: true  	
  },
  params:{
  	site:{
  		alias: 'CCIU',
  		url:'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/types-of-coverage/',
  		zip:'90210',
  		source_track: 'CCOI_landing'
  	}
  }
};