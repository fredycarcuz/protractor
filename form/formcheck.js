var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var Footer = require('../common/footer');
var Hiddens = require('../common/hiddens');
var Steps = require('../common/steps');
var FormFields = require('../common/formfields');

var loadPage = new LoadPage();
var header = new Header();
var footer = new Footer();
var hiddens = new Hiddens();
var steps = new Steps();
var formFields = new FormFields();


describe('Form Page check', function() {
  it('Should load the Form',function(){
    expect((loadPage.body).isDisplayed()).toBe(true);
  });

  it('Should display the header', function(){
    expect((header.logo).isDisplayed()).toBe(true);//logo
    expect((header.phone).isDisplayed()).toBe(true);//phone
  });

  it('Should check the hiddens',function(){
    expect(hiddens.userID).not.toBe(null);
    expect(hiddens.interactionId).not.toBe(null);
    expect(hiddens.cid).not.toBe(null);
    expect(hiddens.source_track).not.toBe(null);
  });

  it('Should check form steps',function(){
    expect((steps.stepContainer).isDisplayed()).toBe(true);
    expect((steps.step1).isDisplayed()).toBe(true);
    expect((steps.step2).isDisplayed()).toBe(true);
    expect((steps.step3).isDisplayed()).toBe(true);
  });

  it('Should display vehicle information',function(){
    expect((formFields.form)).not.toBe(null);
    expect((formFields.vehiclesGroup).isDisplayed()).toBe(true);
    expect((formFields.vehicle_1_Info).isDisplayed()).toBe(true);
    expect((formFields.year_v1).isPresent()).toBe(true); //Not displayed but present, due the .inputWrapp
    //..
    expect(formFields.leased_v1).toBe('Financed');
    expect(formFields.vehUse_v1).toBe('Commute To/From Work');
    expect(formFields.milesYear_v1).toBe('10001 - 12500');
    expect(formFields.vehGarage_v1).toBe('No Cover');
    expect(formFields.vehSecurity_v1).toBe('No Alarm');
  });

  it('Should display Driver Information',function(){
    expect((formFields.driversGroup).isDisplayed()).toBe(true);
    expect((formFields.driverfname_d1).isDisplayed()).toBe(true);
    expect((formFields.driverlname_d1).isDisplayed()).toBe(true);
    expect((formFields.dob_d1).isDisplayed()).toBe(true);
    expect((formFields.gender_d1).isPresent()).toBe(true);
  });

  it('Should display the Footer',function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true); //disclaimer
    expect((footer.privacy).isDisplayed()).toBe(true); //Privacy Policy
    expect((footer.terms).isDisplayed()).toBe(true); // Terms of Use
  });

  //custom for site: example
    // landing/cciu/landing.js (zipbox/content )

  // browser.pause();
});
