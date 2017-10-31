var FillMultiDriver = function(){
	element(by.id('year_v1')).$('[value="2015"]').click(); browser.sleep(200);
    element(by.id('make_v1')).$('[value="AUDI"]').click(); browser.sleep(200);
    element(by.id('model_v1')).$('[value="A3"]').click(); browser.sleep(700);
    element(by.id('subModel_v1')).$('[value="SEDAN 4 DOOR"]').click(); browser.sleep(200);	
    //1st driver    
    element(by.id('driverfname_d1')).sendKeys('Jonh');
	element(by.id('driverlname_d1')).sendKeys('Rambo');
	element(by.id('dob_d1')).sendKeys('12111988');//issue
	element(by.id('gender_d1')).$('[value="M"]').click();
	element(by.id('residenceStatus_d1')).$('[value="Own"]').click();
    //2nd driver
    var addVehicle = element.all(by.css('.btntype2')).last();
    addVehicle.click();

    element(by.id('driverfname_d2')).sendKeys('Mary');
    element(by.id('driverlname_d2')).sendKeys('Cooper');
    element(by.id('dob_d2')).sendKeys('12111988');//issue
    element(by.id('gender_d2')).$('[value="F"]').click();
    element(by.id('residenceStatus_d2')).$('[value="Own"]').click();
    element(by.id('relationship_d2')).$('[value="Spouse"]').click();

	//Carrier checkbox      
    var carried = element(by.id('carried_inpNo'));
    var newE = carried.element(by.xpath('..'));
    newE.click();
    //Personal
    element(by.id('contaddress')).sendKeys('13 Main Street ');
    element(by.id('email')).sendKeys('qa@vantagemedia.com');
    element(by.id('dayPhone')).sendKeys('3056464444');
}

module.exports = FillMultiDriver;