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
    
    //Rest of Driver information
    if (driverList.drivers[i].driver.occupation) {
        element(by.id('occupation_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.occupation+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.education) {
        element(by.id('education_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.education+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.maritalStatus) {
        element(by.id('maritalstat_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.maritalStatus+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.creditEvaluation) {
        element(by.id('credRating_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.creditEvaluation+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.residenceYears) {
        element(by.id('residenceYears_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.residenceYears+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.residenceMonths) {
        element(by.id('residenceMonths_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.residenceMonths+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.licenseStatus) {
        element(by.id('suspended_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.licenseStatus+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.licenseState) {
        element(by.id('licState_d'+ driverNumber)).$('[value="'+driverList.drivers[i].driver.licenseState+'"]').click(); browser.sleep(300);
    }
    if (driverList.drivers[i].driver.ageFirstLicensed) {
        element(by.id('licAge_d'+ driverNumber)).sendKeys(driverList.drivers[i].driver.ageFirstLicensed); browser.sleep(500);
    }

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
