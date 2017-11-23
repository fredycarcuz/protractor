var FillPersonal = function(driverList){
    //Personal
    if (browser.params.config.device === 'desktop') {
    element(by.id('contaddress')).sendKeys(driverList.personal.address);
    }else{
        element(by.id('contAdd1')).sendKeys(driverList.personal.address);
    }
    element(by.id('email')).sendKeys(driverList.personal.email);
    element(by.id('dayPhone')).sendKeys(driverList.personal.phone);

    if (driverList.personal.coverageDesired) {
        element(by.id('protection')).$('[value="'+driverList.personal.coverageDesired+'"]').click(); browser.sleep(300);
    }
    if (driverList.personal.comprehensiveAmount) {
        element(by.id('compAmt_v1')).$('[value="'+driverList.personal.comprehensiveAmount+'"]').click(); browser.sleep(300);
    }
    if (driverList.personal.collisionAmount) {
        element(by.id('collAmt_v1')).$('[value="'+driverList.personal.collisionAmount+'"]').click(); browser.sleep(300);
    }
    if (driverList.personal.multiplePolicyDiscount) {
        element(by.id('multiPolicy')).$('[value="'+driverList.personal.multiplePolicyDiscount+'"]').click(); browser.sleep(300);
    }
    if (driverList.personal.sr22) {
        element(by.id('requireSR22_d1')).$('[value="'+driverList.personal.sr22+'"]').click(); browser.sleep(300);
    }
    if (driverList.personal.zipCode) {
    	element(by.id('contZip')).clear();
        element(by.id('contZip')).sendKeys(driverList.personal.zipCode);
    }
    if (driverList.personal.city) {
    	element(by.id('contCity')).clear();
        element(by.id('contCity')).sendKeys(driverList.personal.city);
    }
    if (driverList.personal.state) {
        element(by.id('contState')).$('[value="'+driverList.personal.state+'"]').click(); browser.sleep(300);
    }
};

module.exports = FillPersonal;