describe('CCIU Landing Check',function(){
	it('Should display CCIU zipbox correctly',function(){
		//custom
	    expect(element(by.css('.lighter')).isDisplayed()).toBe(true);//phone
    	expect(element(by.css('.cta')).isDisplayed()).toBe(true);//cta
    	expect(element(by.css('.cta-form')).isDisplayed()).toBe(true);//sub-cta
    	var back = element(by.id('banner')).getCssValue('background-image');
    	expect(back).toBe('url("' + browser.params.site.url +'v2/images/map.png' + '")','No background-image!');	
	});

	it('Should display CCIU content correctly',function(){
		expect(element(by.css('.brand-slide')).isDisplayed()).toBe(true);//carriers
    	expect(element(by.css('.works')).isDisplayed()).toBe(true);//Content
    	expect(element(by.id('article')).isDisplayed()).toBe(true);//Article
    	expect(element(by.css('.state-list')).isDisplayed()).toBe(true,'No State List!');//State list
	});
});