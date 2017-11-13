/*
Fill Drivers by using the date on diverList
@driverNumber: Numeric. The numeric id of the driver
*/
var FillDriver = function (driverList) {
    // +Add Another Driver
  var addDriver = element.all(by.css('.btntype2')).last();
    // Drivers Information
  for (var i = 0; i < driverList.drivers.length; i++) {
    var driverNumber = i + 1;
    element(by.id('driverfname_d' + driverNumber)).sendKeys(driverList.drivers[i].driver.firstName);
    element(by.id('driverlname_d' + driverNumber)).sendKeys(driverList.drivers[i].driver.lastName);
    element(by.id('dob_d' + driverNumber)).sendKeys(driverList.drivers[i].driver.dob);// issue
    element(by.id('gender_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.gender + '"]').click();
    element(by.id('residenceStatus_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.residenceStatus + '"]').click();

    if (driverNumber > 1) {
      element(by.id('relationship_d' + driverNumber)).$('[value="' + driverList.drivers[i].driver.relationship + '"]').click();
    }

        // Incidents
    if (!driverList.drivers[i].driver.incidentsList) {
            // 'No' is selected by default.
    } else {
      var FillIncidents = require('../common/fillincidents');
      var fillIncidents = FillIncidents(driverNumber, driverList.drivers[i].driver.incidentsList);
    }

    if (driverNumber < driverList.drivers.length) {
      addDriver.click();
      browser.sleep(400);
    }
  }
};

module.exports = FillDriver;
