/*
Fill Drivers by using the date on diverList
@driverNumber: Numeric. The numeric id of the driver
*/
var FillDriver = function (driverList) {
    // +Add Another Driver
  var addDriver = element.all(by.css('.addBtn')).first();
    // Drivers Information
  for (var i = 0; i < driverList.drivers.length; i++) {
    var driverNumber = i + 1;
    element(by.id('driverfname_d' + driverNumber)).sendKeys(driverList.drivers[i].driver.firstName);
    element(by.id('driverlname_d' + driverNumber)).sendKeys(driverList.drivers[i].driver.lastName);
    element(by.id('month_' + driverNumber)).sendKeys((driverList.drivers[i].driver.dobm));
    element(by.id('day_' + driverNumber)).sendKeys((driverList.drivers[i].driver.dobd));
    element(by.id('year_' + driverNumber)).sendKeys((driverList.drivers[i].driver.doba));
    element(by.id('gender_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.gender + '"]').click(); browser.driver.sleep(200);
    element(by.id('residenceStatus_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.residenceStatus + '"]').click(); browser.driver.sleep(200);

    if (driverNumber > 1) {
      element(by.id('relationship_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.relationship + '"]').click();
    }
    
    if (driverNumber < driverList.drivers.length) {
      addDriver.click();
      browser.sleep(400);
    }
  }
};

module.exports = FillDriver;
