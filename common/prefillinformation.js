var PrefillInformation = function(){
	
    var driverList = browser.params.driverInfo;
    //Fill Vehicle(s)
    var FillVehicle = require('../common/fillvehicle');
    var fillVehicle = FillVehicle(driverList);
    //Fill Driver(s)
    var FillDriver = require('../common/filldriver');
    var fillDriver = FillDriver(driverList);
	//Carrier checkbox      
    var FillCurrentInsured = require('../common/fillcurrentinsured');
    var fillCurrentInsured = FillCurrentInsured(driverList);
    //Personal
    var FillPersonal = require('../common/fillpersonal');
    var fillPersonal = FillPersonal(driverList);
}

module.exports = PrefillInformation;