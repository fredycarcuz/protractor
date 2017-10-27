var Zipbox = function(){
	this.zip = element(by.id('zip'));
	this.submitBtn = element(by.id('submitBtn'));
	this.zipValue = this.zip.getAttribute('value');
}

module.exports = Zipbox;