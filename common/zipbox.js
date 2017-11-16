var Zipbox = function () {
	if (browser.params.config.device === 'mobile') {
		this.submitBtn = element(by.id('startMyQuoteBtn'));
	}else{
		this.submitBtn = element(by.id('submitBtn'));
	}
  	this.zip = element(by.id('zip'));
  	this.zipValue = this.zip.getAttribute('value');
};

module.exports = Zipbox;
