

describe('CCIU sitelink check',function(){
	
	it('Should display CCIU zipbox correctly',function(){
	//custom
		expect(element(by.css('.ktContent__cta')).isDisplayed()).toBe(true);//cta
		var back = element(by.id('ktContent')).getCssValue('background-image');
		expect(back).not.toBe(null);
		//TODO: change image name to match sitelink name
		//expect(back).toBe('url("' + browser.params.site.url + browser.params.site.paths.sitelinks +'v1/images/flag_and_truck.jpg' + '")','No background-image!');		
	});

	it('Should display CCIU content correctly',function(){
		expect(element(by.css('.ktContainer__Content')).isDisplayed()).toBe(true);
		expect(element(by.css('.ktContainer__Content--title')).isDisplayed()).toBe(true);
	});
	
});