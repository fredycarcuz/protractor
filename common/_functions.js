/*
---
getSelectById
Gets the current option selected on the Select input
@elementId: Select id
---
*/

var Functions = function(){
	this.getSelectById = function(elementId) {
		return element(by.id(elementId)).element(by.css('option[selected="selected"]')).getAttribute('value'); 
	};
	this.submitButton = function(elementId){
		return element(by.id(elementId)).click();
	};
	this.waitToLoad = function(){
		browser.waitForAngularEnabled(false);
    	browser.sleep(500);
	};
	this.loadSingleDriver = function(incidents,currentlyInsured){
		var FillSingleDriver = require('../common/fillsingledriver');
    	var fillSingleDriver = FillSingleDriver(incidents,currentlyInsured);
    	browser.sleep(1000);
	};
	this.loadMultiDriver = function(incidents,currentlyInsured){
		var FillMultiDriver = require('../common/fillmultidriver');
    	var fillMultiDriver = FillMultiDriver(incidents,currentlyInsured);
    	browser.sleep(1000);
	};
	this.loadMultiVehicle = function(currentlyInsured){
		var FillMultiVehicle = require('../common/fillmultivehicle');
    	var fillMultiVehicle = FillMultiVehicle(currentlyInsured);
    	browser.sleep(1000);
	};
	this.focusNewWindow = function(incidents,currentlyInsured,callback){
		browser.getAllWindowHandles().then(function(handles){
    		browser.switchTo().window(handles[1]).then(function(){
    			callback(incidents,currentlyInsured);
    		});
    	});
	}
}

module.exports = Functions;