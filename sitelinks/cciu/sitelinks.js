

describe('CCIU sitelink check',function(){
	
	it('Should display CCIU zipbox correctly',function(){
	//custom
		expect(element(by.css('.ktContent__cta--cta-toc')).isDisplayed()).toBe(true);//cta
		expect(element(by.css('.ktContent__cta--subcta-toc')).isDisplayed()).toBe(true);//sub-cta
		var back = element(by.id('ktContent')).getCssValue('background-image');
		//To do: FIX path for images on sitelinks
		//expect(back).toBe('url("' + browser.params.site.url +'images/flag_and_truck.jpg' + '")','No background-image!');	
		//'url("http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/types-of-coverage/images/flag_and_truck.jpg")'
		//'url("http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/sitelinks/v1/images/flag_and_truck.jpg")'
	});

	it('Should display CCIU content correctly',function(){
		expect(element(by.css('.ktContainer__Content')).isDisplayed()).toBe(true);
		expect(element(by.css('.ktContainer__Content--title')).isDisplayed()).toBe(true);
	});
	/*
	it('Should display CCIU menu correctly',function(){
		var list = element.all(by.css('.ktNavbar__button'));
		var listTex = list.first().element(by.tagName('a')).getText();
		expect(listTex).toBe('2 Minute Quote');
	});
	*/
	
});