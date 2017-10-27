var Hiddens = function(){
	this.userID = element(by.name('userID')).getAttribute('value');
	this.interactionID = element(by.name('interactionID')).getAttribute('value');
	this.cid = element(by.id('CID')).getAttribute('value');
	this.source_track = element(by.name('source_track')).getAttribute('value');
}

module.exports = Hiddens;