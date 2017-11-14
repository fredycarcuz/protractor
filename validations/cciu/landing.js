var LoadPage = require('../../common/loadpage');
var Functions = require('../../common/_functions');

var functions = new Functions();
var loadPage = new LoadPage();



describe('Validate Landing Page for CCIU', function () {

  it('Should load the Landing', function () {
    expect((loadPage.body).isDisplayed()).toBe(true);
  });
  it('Should pop Privacy Policy Information', function () {
  	var pp = element(by.id('privacy-policy'));
  	pp.click();
    expect((element(by.id('backgroundveil'))).isDisplayed()).toBe(true);
    expect((element(by.css('.privacy-policy.privacy-policy-tcpa.b-e-c'))).isDisplayed()).toBe(true);
    expect(element.all(by.css('.b-external-title')).first().isDisplayed()).toBe(true);
    expect(element.all(by.css('.b-external-content')).first().isDisplayed()).toBe(true);
    element.all(by.css('.close')).first().click();
    browser.sleep(3000);
  });
  it('Should pop Terms of Use Information', function () {
  	var tou = element(by.id('terms-of-use'));
  	tou.click();
    expect((element(by.id('backgroundveil'))).isDisplayed()).toBe(true);
    expect((element(by.css('.terms-of-use.terms-of-use-tcpa.b-e-c'))).isDisplayed()).toBe(true);
    expect(element.all(by.css('.b-external-title')).last().isDisplayed()).toBe(true);
    expect(element.all(by.css('.b-external-content')).last().isDisplayed()).toBe(true);
    element.all(by.css('.close')).last().click();
    browser.sleep(1000);
  });
  it('Should pop the form page using State list', function(){
  	var stateList = element(by.css('.state-list')).all(by.tagName('a'));
  	stateList.get(25).click();//random
    functions.focusNewWindow(functions.waitToLoad);
    expect((functions.getSelectById('compAmt_v1')).isPresent()).toBe(true);
  });
});