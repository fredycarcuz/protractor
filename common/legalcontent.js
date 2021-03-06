var LegalContent = function(){
	this.content = element(by.id('article'));
	this.section = element(by.id('default_section'));
	this.legalContainer = element(by.css('.kt-legal-container'));
	this.titles = element.all(by.tagName('h2'));
	this.title1 = this.titles.get(1).getText();
	this.titleLast = this.titles.last().getText();
	if(browser.params.site.page==='organizations/'){	
	this.organizationList = element(by.id('content')).all(by.tagName('li'));
	this.organization1 = this.organizationList.get(0).getText();
	this.organizationRandom = this.organizationList.get(25).getText();//some random #
	this.organizationLast = this.organizationList.last().getText();
	}
};

module.exports = LegalContent;