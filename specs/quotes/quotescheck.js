var LoadPage = require('../../common/loadpage');
var Header = require('../../common/header');
var Results = require('../../common/results');
var Footer = require('../../common/footer');

var loadPage = new LoadPage();
var header = new Header();
var results = new Results();
var footer = new Footer();


describe('Quotes Page check', function() {
  it('Should load the Landing',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
    expect((header.phone).isDisplayed()).toBe(true);//phone
  });

  it('Should display the content', function(){
    expect(results.cta.isDisplayed()).toBe(true);
    expect((results.logos.first()).isDisplayed()).toBe(true);
    expect((results.titles.first()).isDisplayed()).toBe(true);
    expect((results.description.first()).isDisplayed()).toBe(true);
    expect((results.buttons.first()).isDisplayed()).toBe(true);
  });

  it('Should display the Footer',function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true); //disclaimer
    expect((footer.privacy).isDisplayed()).toBe(true); //Privacy Policy
    expect((footer.terms).isDisplayed()).toBe(true); // Terms of Use
  });

  // browser.pause();
});

