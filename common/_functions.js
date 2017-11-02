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
	this.loadSingleDriver = function(currentInsured){
		var FillSingleDriver = require('../common/fillsingledriver');
    	var fillSingleDriver = FillSingleDriver(currentInsured);
    	browser.sleep(1000);
	};
	this.loadMultiDriver = function(){
		var FillMultiDriver = require('../common/fillmultidriver');
    	var fillMultiDriver = FillMultiDriver();
    	browser.sleep(1000);
	};
	this.loadMultiVehicle = function(){
		var FillMultiVehicle = require('../common/fillmultivehicle');
    	var fillMultiVehicle = FillMultiVehicle();
    	browser.sleep(1000);
	};
	this.focusNewWindow = function(currentInsured,callback){
		browser.getAllWindowHandles().then(function(handles){
    		browser.switchTo().window(handles[1]).then(function(){
    			callback(currentInsured);
    		});
    	});
	}
}

module.exports = Functions;