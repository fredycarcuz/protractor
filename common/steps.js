var Steps = function(){
	this.stepContainer = element(by.id('topStep'));
	this.step1 = element(by.css('.first'));
	this.step2 = element(by.css('.middle'));
	this.step3 = element(by.css('.last'));
}

module.exports = Steps;