var Footer = function(){
	if (browser.params.config.device === 'mobile') {
		this.disclaimer = element(by.id('footer-article'));
		this.privacy = element(by.css('.nav-footer')).all(by.tagName('a')).first();
		this.terms = element(by.css('.nav-footer')).all(by.tagName('a')).get(1);
	}else{
		this.disclaimer = element(by.css('.disclaimer-footer'));
		this.privacy = element(by.id('privacy-policy'));
		this.terms = element(by.id('terms-of-use'));
	}
	//this.copyright = element(by.id(''));
	//this.contact = element(by.id(''));
	//this.email = element(by.id(''));
};

module.exports = Footer;