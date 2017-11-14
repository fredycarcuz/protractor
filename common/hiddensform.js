var HiddensForm = function(){
	//TODO: Add Form page hiddens
	this.drvfrmcnt = element(by.name('drvfrmcnt')).getAttribute('value');
	this.vehfrmcnt = element(by.name('vehfrmcnt')).getAttribute('value');
	this.incidents = element(by.name('incidents')).getAttribute('value');
	this.url_params = element(by.name('url_params')).getAttribute('value');
	this.leadid_token = element(by.name('universal_leadid')).getAttribute('value');
	this.multivehicle = element(by.name('multivehicle')).getAttribute('value');
	//this.trustedToken = element(by.name('xxTrustedFormToken')).getAttribute('value');
	//this.trustedUrl = element(by.name('xxTrustedFormCertUrl')).getAttribute('value');
	//this.multidriverhousehold = element(by.name('multidriverhousehold')).getAttribute('value');
	
};

module.exports = HiddensForm;
