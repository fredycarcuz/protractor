var Functions = require('../common/_functions');
var functions = new Functions();

var ContactForm = function(){
	this.disclaimer = element(by.id('disclaimer'));
	this.reqWrapp = element(by.id('reqWrapp'));
	this.contact_request = element(by.id('contact_request'));
	this.contact_request.$('[value="Advertising"]').click(); browser.sleep(200);//Display de form
	this.first_name = element(by.name('first_name'));
	this.last_name = element(by.name('last_name'));
	this.email = element(by.name('email'));
	this.phone1 = element(by.name('phone1'));
	this.phone2 = element(by.name('phone2'));
	this.phone3 = element(by.name('phone3'));
	this.message = element(by.name('message'));
	this.word = element(by.name('word'));
	this.captcha = element(by.id('captcha'));
	this.reloadcaptcha = element(by.id('reloadcaptcha'));
	this.btnsend = element(by.id('btnsend'));
}

module.exports = ContactForm;