describe('CCIU Quotes Check',function(){
	it('Should display CCIU header correctly', function(){
		//custom
	    var phone = element(by.css('.lighter'));//phone
	    expect(phone.isDisplayed()).toBe(true);//phone
	    var phoneNumber = phone.element(by.xpath('..'));
	    if(browser.params.site.src === ''){
	    expect(phoneNumber.getText()).toBe('Phone : 800-897-1359'); //default	
	    }else if(browser.params.site.src === 'cciu_google'){
	    	expect(phoneNumber.getText()).toBe('Phone : 800-713-2712'); 
	    }
	});
	it('Should display CCIU Content Correctly', function(){
		var ctaText = element(by.id('vm-cta-content')).all(by.tagName('h2')).first();
		var ctaTextSub = element(by.id('vm-cta-content')).all(by.tagName('h4')).first();
		var articleTitle = element(by.id('article')).all(by.tagName('h2')).first();
		//get state Name - Only on FAS page
		browser.driver.executeScript(function(){
			var st=window.st;
			return st;
		}).then(function(st){
			var state =	st;
			expect(ctaText.getText()).toBe('Below are the top Car Insurance Providers in ' + state);
			expect(articleTitle.getText()).toBe('Driver Statistics for ' + state + ':');
		});
		expect(ctaTextSub.getText()).toBe('Click the providers below to compare your rates and see your savings!\nDon\'t delay - Start Saving Money Today');		
	});		
});