var Quotes = function(){
	this.cta = element(by.id('vm-cta-content'));
	//this.subCta = element(by.css(''));
	this.logos = element(by.id('content')).all(by.css('.vm-logo'));
	this.titles = element(by.id('content')).all(by.css('.vm-title'));
	this.description = element(by.id('content')).all(by.css('.vm-snippet'));
	this.buttons = element(by.id('content')).all(by.css('.vm-quotes'));
	this.contentByState = element(by.id('article'));
}

module.exports = Quotes;