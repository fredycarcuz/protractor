var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var LegalContent = require('../common/legalcontent');
var FooterLegal = require('../common/footerlegal');


var loadPage = new LoadPage();
var header = new Header();
var legalContent = new LegalContent();
var footerLegal = new FooterLegal();


describe('Privacy Page check', function() {
  it('Should load the Page',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
  });

  it('Should display the content', function(){
    expect((legalContent.content).isDisplayed()).toBe(true);
    expect((legalContent.section).isDisplayed()).toBe(true);
    expect((legalContent.legalContainer).isDisplayed()).toBe(true);
    expect((legalContent.titles).isPresent()).toBe(true);
    expect(legalContent.title1).toBe('Our Practices Regarding Privacy');
    expect(legalContent.titleLast).toBe('Contact Us');
  });

  it('Should display the Footer', function(){
    expect((footerLegal.footer).isDisplayed()).toBe(true);
    expect((footerLegal.address).isDisplayed()).toBe(true);
    expect((footerLegal.copy).isDisplayed()).toBe(true);
  });

  //custom for site: example
    // landing/cciu/landing.js (zipbox/content )

  // browser.pause();
});
