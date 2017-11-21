var LoadPage = require('../../../common/loadpage');
var Header = require('../../../common/header');
var FooterLegal = require('../../../common/footerlegal');
var ContactForm = require('../../../common/contactform');

var loadPage = new LoadPage();
var header = new Header();
var footerLegal = new FooterLegal();
var contactForm = new ContactForm();

describe('Contact Page check', function() {
  it('Should load the Page',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
  });

  it('Should display the content', function(){
    expect((contactForm.disclaimer).isDisplayed()).toBe(true);
    expect((contactForm.reqWrapp).isDisplayed()).toBe(true);
    expect((contactForm.contact_request).isDisplayed()).toBe(true);
    expect((contactForm.first_name).isDisplayed()).toBe(true);
    expect((contactForm.last_name).isDisplayed()).toBe(true);
    expect((contactForm.phone1).isDisplayed()).toBe(true);
    expect((contactForm.phone2).isDisplayed()).toBe(true);
    expect((contactForm.phone3).isDisplayed()).toBe(true);
    expect((contactForm.message).isDisplayed()).toBe(true);
    expect((contactForm.word).isDisplayed()).toBe(true);
    expect((contactForm.captcha).isDisplayed()).toBe(true);
    expect((contactForm.reloadcaptcha).isDisplayed()).toBe(true);
    expect((contactForm.btnsend).isDisplayed()).toBe(true);
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
