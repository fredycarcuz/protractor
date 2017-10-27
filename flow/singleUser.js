describe('CCIU', function() {
  it('Should load the Landing',function(){
    var LoadPage = require('../common/loadpage');
    /*
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.get('http://dev-sem.vm.local/~fcarcuz/auto-sem-cheapcarinsuranceusa.com/get-quotes/?zip=90210');
    browser.sleep(1000);  
    */
    expect(element(by.css('.lighter')).isDisplayed()).toBe(true); //phone
    expect(element(by.css('.cta')).isDisplayed()).toBe(true); //cta
    var zipcode = element(by.id('zip')).getAttribute('value');
    expect(zipcode.isDisplayed()).toBe(true);
    expect(zipcode).toBe('90210'); //prefill zip
    expect(element(by.id('submitBtn')).isDisplayed()).toBe(true); //submit button
    expect(element(by.css('.brand-slide')).isDisplayed()).toBe(true); //logos
  });

  it('Should submit the zipcode',function(){
    //submit
    element(by.id('submitBtn')).click();
    browser.waitForAngularEnabled(false);
    browser.sleep(500);
  });

  it('Should open and fill the form and show the TYP', function() {
    //focus on new window
    browser.getAllWindowHandles().then(function(handles){
    browser.switchTo().window(handles[1]).then(function(){
        //do your stuff on the pop up window
      expect(element(by.css('.header-phone')).isDisplayed()).toBe(true); //phone
      //fill form
      element(by.id('year_v1')).$('[value="2015"]').click(); browser.sleep(200); 
      element(by.id('make_v1')).$('[value="AUDI"]').click(); browser.sleep(200);
      element(by.id('model_v1')).$('[value="A3"]').click();browser.sleep(700);
      element(by.id('subModel_v1')).$('[value="SEDAN 4 DOOR"]').click(); browser.sleep(200);
      element(by.id('driverfname_d1')).sendKeys('Jonh');
      element(by.id('driverlname_d1')).sendKeys('Rambo');
      element(by.id('dob_d1')).sendKeys('12111988');//issue
      element(by.id('gender_d1')).$('[value="M"]').click();
      element(by.id('residenceStatus_d1')).$('[value="Own"]').click();
      //Carrier checkbox      
      var carried = element(by.id('carried_inpNo'));
      var newE = carried.element(by.xpath('..'));
      newE.click();
      //Personal
      element(by.id('contaddress')).sendKeys('13 Main Street ');
      element(by.id('email')).sendKeys('qa@vantagemedia.com');
      element(by.id('dayPhone')).sendKeys('3056464444');
      //submit form
      element(by.id('getquotes')).click();

      //TYP
      browser.waitForAngularEnabled(false);
      browser.sleep(1000);
      expect(element(by.css('.cta-upper')).isDisplayed()).toBe(true);
      browser.pause();//prevent close window
      });
    });    
	});
});
