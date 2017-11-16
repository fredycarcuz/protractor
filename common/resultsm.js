var Results = function(){
	this.cta = element(by.id('content')).$('h2');
	this.logos = element(by.id('Container')).all(by.css('.bwapsListingDomainLogo'));
	this.titles = element(by.id('Container')).all(by.css('.bwapstitle'));
	this.buttons = element(by.id('Container')).all(by.css('.bwapsListingGetQuotes'));
};

module.exports = Results;