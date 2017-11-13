var Menu = function(){
	this.menuContainer = element(by.css('.ktNavbar'));
	this.first = element(by.css('.ktNavbar__button--first'));
	this.last = element(by.css('.ktNavbar__button--last'));
	this.list = element.all(by.css('.ktNavbar__button--text')).first();//2 minutes quote
	//TODO: function to get the text from sitelink
};

module.exports = Menu;