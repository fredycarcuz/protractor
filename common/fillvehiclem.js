/*
Fill Vehicles using the date on diverList
@vehicleNumber: Numeric. The numeric id of the driver
*/
var FillVehicle = function(driverList){
    //+Add Another Vehicle
        var addVehicle = element.all(by.id('js-ktButton__addVehicle')).first();
    //Vehicle Information
    /*for (var i = 0; i < driverList.vehicles.length; i++) {*/
        //var vehicleNumber = i+1;
        var i=0;
        var vehicleNumber = 1;
        //element(by.id('year_v'+ vehicleNumber)).click();
        element(by.id('year_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.year+'"]').click(); browser.driver.sleep(1000);
        //element(by.id('getquotes')).click();
        element(by.id('make_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.make+'"]').click(); browser.driver.sleep(1000);
        //element(by.id('getquotes')).click();
        element(by.id('model_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.model+'"]').click(); browser.driver.sleep(3000);
        //element(by.id('getquotes')).click();
        element(by.id('subModel_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.subModel+'"]').click(); browser.driver.sleep(1000);
        
        /*if (vehicleNumber < driverList.vehicles.length){
            addVehicle.click();
            browser.sleep(400);
        }*/
    //}
};

module.exports = FillVehicle;
