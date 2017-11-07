var FillPersonal = function(driverList){
    //Personal
    element(by.id('contaddress')).sendKeys(driverList.personal.address);
    element(by.id('email')).sendKeys(driverList.personal.email);
    element(by.id('dayPhone')).sendKeys(driverList.personal.phone);
}

module.exports = FillPersonal;