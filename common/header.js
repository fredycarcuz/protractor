var Header = function(){
	if (browser.params.config.device === 'mobile') {
		this.logo = element(by.css('.logo'));
		if (browser.params.site.page ==='get-quotes/') {
			this.phone = element(by.id('liveAgentBtn'));
		}
	}else{
	this.phone = element(by.css('.header-phone')); 
	this.logo = element(by.css('.logo'));
	}
};

module.exports = Header;