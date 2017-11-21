describe('CCIU Thankyou Check', function () {
  it('Should display CCIU header correctly', function () {
		// custom
	    var phone = element(by.css('.lighter'));// phone
	    expect(phone.isDisplayed()).toBe(true);// phone
	    var phoneNumber = phone.element(by.xpath('..'));
	    if (browser.params.site.src === '') {
	    expect(phoneNumber.getText()).toBe('Phone : 800-897-1359'); // default
	    } else if (browser.params.site.src === 'cciu_google') {
	    	expect(phoneNumber.getText()).toBe('Phone : 800-713-2712');
	    }
  });

  it('Should display CCIU Content Correctly', function () {
		// var ctaText = element(by.id('vm-cta-content')).all(by.tagName('h2')).last();
    var ctaTextSub = element(by.id('vm-cta-content')).all(by.tagName('h4')).first();
		// var articleTitle = element(by.id('article')).all(by.tagName('h2')).first();
		// expect(ctaText.getText()).toBe('Below are the top Car Insurance Providers in ' + state);
    expect(ctaTextSub.getText()).toBe('Don\'t Wait - Click your result below to see your best rate!\nSee Your Custom Quote Now!');
  });
});
