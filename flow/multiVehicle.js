var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var Zipbox = require('../common/zipbox');
var Footer = require('../common/footer');
var Functions = require('../common/_functions');

var loadPage = new LoadPage();
var header = new Header();
var zipbox = new Zipbox();
var footer = new Footer();
var functions = new Functions();

describe('Flow for Multi Vehicle', function() {
  it('Should load the Landing Page',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);

    it('Should display the header', function(){
      expect((header.logo).isDisplayed()).toBe(true);
      expect((header.phone).isDisplayed()).toBe(true);
    });
    it('Should display the Footer', function(){
      expect((footer.disclaimer).isDisplayed()).toBe(true); 
      expect((footer.privacy).isDisplayed()).toBe(true);
      expect((footer.terms).isDisplayed()).toBe(true);
    });
  });

  it('Should submit the zipcode',function(){
    expect((zipbox.submitBtn).isDisplayed()).toBe(true);
    functions.submitButton('submitBtn');
  });

  it('Should open and fill the form Page', function() {      
    functions.waitToLoad();
    //Focus on new window
    //then fill the multi Vehicle
    functions.focusNewWindow(functions.loadMultiVehicle);
    //submit the form
    functions.submitButton('getquotes');      
  });
  it('Should display the Thankyou Page', function(){
    //TYP
    functions.waitToLoad();
    expect(element(by.css('.cta-upper')).isDisplayed()).toBe(true); 
  });
});
