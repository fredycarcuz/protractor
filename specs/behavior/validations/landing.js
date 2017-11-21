var LoadPage = require('../../../common/loadpage');
var Zipbox = require('../../../common/zipbox');

var loadPage = new LoadPage();
var zipbox = new Zipbox();

describe('Validate the zipbox', function () {

  beforeEach(function(){
    zipbox.zipValue.clear();
  });

  it('Should load the Landing', function () {
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should validate the placeholder', function(){
    expect(zipbox.zip.getAttribute('placeholder')).toBe('Enter Your Zip');
  });

  it('Should validate the zipcode error message', function () {
    zipbox.submitBtn.click();
    var validationError = element(by.css('.validationErrorCont'));
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid zip code');
  });

  it('Should validate the zipcode to not accept strings', function () {
    zipbox.zip.sendKeys('aaaaa');
    expect(zipbox.zipValue.getText()).toBe('');
  });
  // browser.pause();
});