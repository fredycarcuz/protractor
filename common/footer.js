var Footer = function(){
	this.disclaimer = element(by.css('.disclaimer-footer'));
	this.privacy = element(by.id('privacy-policy'));
	this.terms = element(by.id('terms-of-use'));
	//this.copyright = element(by.id(''));
	//this.contact = element(by.id(''));
	//this.email = element(by.id(''));
};

module.exports = Footer;