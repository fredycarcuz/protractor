var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var LegalContent = require('../common/legalcontent');
var FooterLegal = require('../common/footerlegal');

var loadPage = new LoadPage();
var header = new Header();
var legalContent = new LegalContent();
var footerLegal = new FooterLegal();

describe('Organizations Page check', function() {
  it('Should load the Page',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
  });

  it('Should display the content', function(){
    expect((legalContent.organizationList).isPresent()).toBe(true);
    expect(legalContent.organization1).toBe('21st Century Insurance');
    expect(legalContent.organizationLast).toBe('American Home Assurance');
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
