/*
getSelectById
Gets the current option selected on the Select input
@elementId: Select id
*/

var Functions = function(){
	this.getSelectById = function(elementId) {
	return element(by.id(elementId)).element(by.css('option[selected="selected"]')).getAttribute('value'); 
	}	
}

module.exports = Functions;