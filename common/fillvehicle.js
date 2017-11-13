/*
Fill Vehicles using the date on diverList
@vehicleNumber: Numeric. The numeric id of the driver
*/
var FillVehicle = function(driverList){
    //+Add Another Vehicle
        var addVehicle = element.all(by.id('js-ktButton__addVehicle')).first();
    //Vehicle Information
    for (var i = 0; i < driverList.vehicles.length; i++) {
        var vehicleNumber = i+1;
        element(by.id('year_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.year+'"]').click(); browser.sleep(200);
        element(by.id('make_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.make+'"]').click(); browser.sleep(200);
        element(by.id('model_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.model+'"]').click(); browser.sleep(600);
        element(by.id('subModel_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.subModel+'"]').click(); browser.sleep(200);
        if (vehicleNumber < driverList.vehicles.length){
            addVehicle.click();
            browser.sleep(400);
        }
    }
};

module.exports = FillVehicle;