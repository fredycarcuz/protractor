var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var Quotes = require('../common/quotes');
var Footer = require('../common/footer');

var loadPage = new LoadPage();
var header = new Header();
var quotes = new Quotes();
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
    expect(quotes.cta.isDisplayed()).toBe(true);
    expect((quotes.logos.first()).isDisplayed()).toBe(true);
    expect((quotes.titles.first()).isDisplayed()).toBe(true);
    expect((quotes.description.first()).isDisplayed()).toBe(true);
    expect((quotes.buttons.first()).isDisplayed()).toBe(true);
  });

  it('Should display the Footer',function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true); //disclaimer
    expect((footer.privacy).isDisplayed()).toBe(true); //Privacy Policy
    expect((footer.terms).isDisplayed()).toBe(true); // Terms of Use
  });

  // browser.pause();
});

