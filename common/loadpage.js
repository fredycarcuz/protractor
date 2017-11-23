var LoadPage = function(){
	browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(browser.params.site.url + browser.params.site.page +'?zip='+ browser.params.site.zip + '&source_track=' + browser.params.site.source_track + '&SRC=' + browser.params.site.src);
    browser.sleep(1500);
    this.body = element(by.tagName('body'));//Needs to be generic
    var untilLoad = protractor.ExpectedConditions;
    browser.wait(untilLoad.presenceOf(this.body), 3000, 'Waiting for information to be displayed');
};

module.exports = LoadPage;