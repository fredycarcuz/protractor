var FooterLegal = function(){
	this.footer = element(by.id('footer'));
	this.address = element(by.css('.left'));
	this.copy = element(by.css('.right'));	
}

module.exports = FooterLegal;