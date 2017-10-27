var Menu = function(){
	this.menuContainer = element(by.css('.ktNavbar'));
	this.first = element(by.css('.ktNavbar__button--first'));
	this.last = element(by.css('.ktNavbar__button--last'));
	this.list = element.all(by.css('.ktNavbar__button'));
	//TODO: function to get the text for sitelink
	//this.listText = this.list.first().element(by.tagName('a')).innerHTML;
}

module.exports = Menu;