describe('CCIU Landing Check',function(){
	it('Should display CCIU header correctly', function(){
		//custom
	    var phone = element(by.css('.lighter'));//phone
	    expect(phone.isDisplayed()).toBe(true);//phone
	    var phoneNumber = phone.element(by.xpath('..'));
	    if(browser.params.site.src === ''){
	    expect(phoneNumber.getText()).toBe('Call : 800-897-1359'); //default	
	    }else if(browser.params.site.src === 'cciu_google'){
	    	expect(phoneNumber.getText()).toBe('Call : 800-713-2712'); 
	    }
	});
	it('Should display CCIU zipbox correctly', function(){
    	expect(element(by.css('.cta')).isDisplayed()).toBe(true);//cta
    	expect(element(by.css('.cta')).getText()).toBe('LET’S DROP YOUR\nRATE TODAY');//cta
    	expect(element(by.css('.cta-form')).isDisplayed()).toBe(true);//sub-cta
    	expect(element(by.css('.cta-form')).getText()).toBe('100% Safe & Secure!');//sub-cta
    	expect(element(by.id('submitBtn')).getAttribute('value')).toBe('Start Quote');
    	var back = element(by.id('banner')).getCssValue('background-image');
    	expect(back).toBe('url("' + browser.params.site.url+ browser.params.site.paths.landing+'v2/images/map.png' + '")','No background-image!');	
	});

	it('Should display CCIU content correctly',function(){
		expect(element(by.css('.brand-slide')).isDisplayed()).toBe(true);//carriers
		expect(element(by.css('.brand-slide')).all(by.tagName('img')).first().getAttribute('title')).toBe('Libertymutual');//carriers
		expect(element(by.css('.brand-slide')).all(by.tagName('img')).last().getAttribute('title')).toBe('Mercuryinsurance');//carriers
		expect(element(by.css('.works')).isDisplayed()).toBe(true);//Content		
		expect(element(by.id('article')).all(by.tagName('h2')).first().getText()).toBe('CheapCarInsuranceUSA.com:');//Article
    	expect(element(by.css('.state-list')).isDisplayed()).toBe(true,'No State List!');//State list
	});
});