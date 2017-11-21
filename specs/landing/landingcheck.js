var LoadPage = require('../../common/loadpage');
var Header = require('../../common/header');
var Zipbox = require('../../common/zipbox');
var Footer = require('../../common/footer');
var Hiddens = require('../../common/hiddens');

var loadPage = new LoadPage();
var header = new Header();
var zipbox = new Zipbox();
var footer = new Footer();
var hiddens = new Hiddens();


describe('Landing Page check', function() {
  it('Should load the Landing',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
    expect((header.phone).isDisplayed()).toBe(true);//phone
  });

  it('Should display Zipbox', function() {
    expect((zipbox.zip).isDisplayed()).toBe(true);
    expect(zipbox.zipValue).toBe(browser.params.site.zip, 'Zipcode does not match!');
    expect((zipbox.submitBtn).isDisplayed()).toBe(true);//submit
	});

  it('Should check the hiddens',function(){
    expect(hiddens.userID).not.toBe(null);
    expect(hiddens.interactionId).not.toBe(null);
    expect(hiddens.cid).not.toBe(null);
    expect(hiddens.source_track).not.toBe(null);
  });

  it('Should display the Footer',function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true); //disclaimer
    expect((footer.privacy).isDisplayed()).toBe(true); //Privacy Policy
    expect((footer.terms).isDisplayed()).toBe(true); // Terms of Use
  });

  //custom for site: example
    // landing/cciu/landing.js (zipbox/content )

  // browser.pause();
});
