var StepsMobile = function(){
	this.stepContainer = element(by.id('step-bar'));
	this.stepText = element(by.css('.progress-pre-text'));
	this.stepBar = element(by.css('.progress-bar'));
	this.stepStep = element(by.css('.progress-text'));
};

module.exports = StepsMobile;