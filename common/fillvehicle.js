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
        element(by.id('year_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.year+'"]').click(); browser.sleep(700);
        var untilk = protractor.ExpectedConditions;
        browser.wait(untilk.textToBePresentInElement(element(by.css('#make_v'+ vehicleNumber +' [value=""]')),'- Select Option -'), 5000);
        element(by.id('make_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.make+'"]').click(); browser.sleep(700);
        var untilm = protractor.ExpectedConditions;
        browser.wait(untilm.textToBePresentInElement(element(by.css('#model_v'+ vehicleNumber +' [value=""]')),'- Select Option -'), 5000);
        element(by.id('model_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.model+'"]').click(); browser.driver.sleep(900);
        var untils = protractor.ExpectedConditions;
        browser.wait(untilm.textToBePresentInElement(element(by.css('#subModel_v'+ vehicleNumber +' [value=""]')),'- Select Option -'), 5000);
        element(by.id('subModel_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.subModel+'"]').click(); browser.driver.sleep(700);

        //Rest of Vehicle information
        if (driverList.vehicles[i].vehicle.ownership) {
            element(by.id('leased_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.ownership+'"]').click(); browser.sleep(300);
        }
        if (driverList.vehicles[i].vehicle.primaryUse) {
            element(by.id('vehUse_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.primaryUse+'"]').click(); browser.sleep(300);
        }
        if (driverList.vehicles[i].vehicle.annualMileage) {
            element(by.id('milesYear_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.annualMileage+'"]').click(); browser.sleep(300);
        }
        if (driverList.vehicles[i].vehicle.nightParking) {
            element(by.id('vehGarage_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.nightParking+'"]').click(); browser.sleep(300);
        }
        if (driverList.vehicles[i].vehicle.securitySystem) {
            element(by.id('vehSecurity_v'+ vehicleNumber)).$('[value="'+driverList.vehicles[i].vehicle.securitySystem+'"]').click(); browser.sleep(300);
        }

        if (vehicleNumber < driverList.vehicles.length){
            addVehicle.click();
            browser.sleep(400);
        }

    }
};

module.exports = FillVehicle;