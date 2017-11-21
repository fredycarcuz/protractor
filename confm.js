exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['specs/m/thankyou/thankyoucheck.js'],
  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '7.0',
    deviceName: 'Android Emulator'
  },
  baseUrl: 'http://10.0.2.2:8000',
  params: {
    config:{
      env: 'dev',//'dev', 'pro'
      device: 'mobile', //'desktop', 'mobile'
    },
    site: {
      alias: 'CCIU',
      src: 'cciu_google',
      url: 'http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/m/',
      page: 'thankyou/',
      zip: '90245',
      source_track: '',
      paths: {
        sitelinks: 'sitelinks/',
        thankyou: 'thankyou/',
        landing: 'get-quotes/'
      }
    },
    driverInfo: require('./data/singleDriver.json')
  }
};
