var FillSingleDriver = function(){
	element(by.id('year_v1')).$('[value="2015"]').click(); browser.sleep(200);
    element(by.id('make_v1')).$('[value="AUDI"]').click(); browser.sleep(200);
    element(by.id('model_v1')).$('[value="A3"]').click(); browser.sleep(700);
    element(by.id('subModel_v1')).$('[value="SEDAN 4 DOOR"]').click(); browser.sleep(200);	
    element(by.id('driverfname_d1')).sendKeys('Jonh');
	element(by.id('driverlname_d1')).sendKeys('Rambo');
	element(by.id('dob_d1')).sendKeys('12111988');//issue
	element(by.id('gender_d1')).$('[value="M"]').click();
	element(by.id('residenceStatus_d1')).$('[value="Own"]').click();
	//Carrier checkbox      
    var carried = element(by.id('carried_inpNo'));
    var newE = carried.element(by.xpath('..'));
    newE.click();
    //Personal
    element(by.id('contaddress')).sendKeys('13 Main Street ');
    element(by.id('email')).sendKeys('qa@vantagemedia.com');
    element(by.id('dayPhone')).sendKeys('3056464444');
}

module.exports = FillSingleDriver;