var LoadPage = function(){
	browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.get(browser.params.site.url + browser.params.site.page +'?zip='+ browser.params.site.zip);
    browser.sleep(1000);
    this.body = element(by.tagName('body'));//Needs to be generic
}

module.exports = LoadPage;