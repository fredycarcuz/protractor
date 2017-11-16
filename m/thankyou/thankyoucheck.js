var LoadPage = require('../../common/loadpage');
var Header = require('../../common/header');
var Footer = require('../../common/footer');
var Results = require('../../common/resultsm');

var loadPage = new LoadPage();
var header = new Header();
var results = new Results();
var footer = new Footer();



describe('Mobile Thankyou Page check', function() {
  it('Should load the Landing',function(){
    browser.driver.sleep(1000);
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(loadPage.body), 5000, 'Waiting for information to be displayed');
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
  });

  it('Should display the content', function(){
    expect(results.cta.isDisplayed()).toBe(true);
    expect((results.logos.first()).isDisplayed()).toBe(true);
    expect((results.titles.first()).isDisplayed()).toBe(true);
    expect((results.buttons.first()).isDisplayed()).toBe(true);
  });

  xit('Should display the Footer',function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true);
    expect((footer.privacy).isDisplayed()).toBe(true);
    expect((footer.terms).isDisplayed()).toBe(true);
  });

  //custom for site: example
    // landing/cciu/landing.js (zipbox/content )

  //browser.pause();
});
