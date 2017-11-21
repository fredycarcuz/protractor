describe('CCIU Mobile Landing Check',function(){
	it('Should display CCIU mobile header correctly', function(){
		//custom
	    var phoneNumber = element(by.css('.phonelogo')).all(by.tagName('a')).first().getAttribute('href');//phone
	    expect(phoneNumber.isDisplayed()).toBe(true);//phone
	    if(browser.params.site.src === ''){
	    expect(phoneNumber).toBe('tel:+1-800-897-1359'); //default	
	    }else if(browser.params.site.src === 'cciu_google'){
	    	expect(phoneNumber).toBe('tel:+1-800-805-5178'); 
	    }
	});
	it('Should display CCIU mobile zipbox correctly', function(){
    	expect(element(by.css('.search')).isDisplayed()).toBe(true);//cta
    	expect(element(by.css('.search')).all(by.tagName('h4')).first().getText()).toBe('LET’S DROP YOUR\nRATE TODAY!');//cta
    	expect(element(by.css('.secure')).isDisplayed()).toBe(true);//cta//sub-cta
    	expect(element(by.css('.secure')).getText()).toBe('100% Safe & Secure!');//sub-cta
    	expect(element(by.id('startMyQuoteBtn')).getAttribute('value')).toBe('Start Quote');
	});

	it('Should display CCIU mobile content correctly',function(){
		expect(element(by.id('article')).isDisplayed()).toBe(true);//Content
		expect(element(by.id('article')).all(by.tagName('h1')).first().getText()).toBe('CheapCarInsuranceUSA.com:\nThe New Way To Shop For Car Insurance');//Article
		expect(element(by.id('article')).all(by.tagName('p')).first().getText()).toBe('Nowadays, almost all car insurance carriers determine their rates through complex calculations. These technologies incorporate Big Data and sophisticated algorithms to determine your insurance rates. In other words, rates are constantly changing day-by-day, minute-by-minute. Additionally, accidents or tickets could have cleared from your driving record, or your zip code could have become a safer place to drive. Unfortunately, insurance companies are not obligated to inform you of such changes, or that you qualify for a lower rate. Thus, you could be overpaying, and not even know it.');//Article
    	
	});
});