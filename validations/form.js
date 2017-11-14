var LoadPage = require('../common/loadpage');
var FormFields = require('../common/formfields');

var loadPage = new LoadPage();
var formFields = new FormFields();
var driverList = browser.params.driverInfo;

describe('Validate Vehicle, Driver and Additional Information', function () {

  var validationError = '';
  beforeEach(function(){
    validationError = '';
    formFields.getquotes.click();
    validationError = element(by.css('.validationErrorCont'));
  });
  
  it('Should load the Landing', function () {
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should validate Vechicle Year', function(){
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select vehicle year');
    formFields.year_v1.$('[value="'+driverList.vehicles[0].vehicle.year+'"]').click().then(function(){
      browser.sleep(3000);
      }); 
  });

  it('Should validate Vechicle Make', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select vehicle make');
    formFields.make_v1.$('[value="'+driverList.vehicles[0].vehicle.make+'"]').click().then(function(){
      browser.sleep(3000);
      });
  });

  it('Should validate Vehicle Model', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select vehicle model');
    formFields.model_v1.$('[value="'+driverList.vehicles[0].vehicle.model+'"]').click().then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Vehicle SubModel', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select vehicle submodel');
    formFields.subModel_v1.$('[value="'+driverList.vehicles[0].vehicle.subModel+'"]').click().then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate First Name', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid first name');
    formFields.driverfname_d1.sendKeys(driverList.drivers[0].driver.firstName).then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Last Name', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid last name');
    formFields.driverlname_d1.sendKeys(driverList.drivers[0].driver.lastName).then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate DOB', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid date of birth');
    browser.sleep(3000);
    element(by.id('dob_d1')).clear();
    expect(element(by.id('dob_d1')).isPresent()).toBe(true);// issue
    browser.driver.switchTo().activeElement();
    formFields.dob_d1.sendKeys(driverList.drivers[0].driver.dob);   
    //formFields.dob_d1.sendKeys('12111988');   
  });
  it('Should validate Gender', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select a gender');
    formFields.gender_d1.$('[value="'+driverList.drivers[0].driver.gender+'"]').click().then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Current Residence', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select residence status');
    formFields.residenceStatus_d1.$('[value="'+driverList.drivers[0].driver.residenceStatus+'"]').click().then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Current Insured', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please select Yes or No.');
    var newEYes = formFields.carried_inpNo.element(by.xpath('..'));
    newEYes.click().then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Address', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter street address');
    formFields.contaddress.sendKeys(driverList.personal.address).then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Email', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid email');
    formFields.email.sendKeys(driverList.personal.email).then(function(){
      browser.sleep(3000);
      });
  });
  it('Should validate Phone', function () {
    expect(validationError.isDisplayed()).toBe(true);
    expect(validationError.getText()).toBe('Please enter a valid US phone');
    formFields.dayPhone.sendKeys(driverList.personal.phone).then(function(){
      browser.sleep(3000);
      });
  });
  it('Should submit the form', function () {
    
  });

   //browser.pause();
});

describe('Goes to the TYP after the submit', function () {
  it('Should display the Thankyou Page', function(){
    //TYP
    browser.sleep(3000);
    expect(element(by.css('.cta-upper')).isDisplayed()).toBe(true); 
  });
});

