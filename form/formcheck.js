var LoadPage = require('../common/loadpage');
var Header = require('../common/header');
var Footer = require('../common/footer');
var Hiddens = require('../common/hiddens');
var HiddensForm = require('../common/hiddensform');
var Steps = require('../common/steps');
var FormFields = require('../common/formfields');

var loadPage = new LoadPage();
var header = new Header();
var footer = new Footer();
var hiddens = new Hiddens();
var hiddensForm = new HiddensForm();
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

  it('Should check the hiddens', function(){
    expect(hiddens.userID).not.toBe(null);
    expect(hiddens.interactionId).not.toBe(null);
    expect(hiddens.cid).not.toBe(null);
    expect(hiddens.source_track).not.toBe(null);
    //form
    expect(hiddensForm.drvfrmcnt).not.toBe(null);
    expect(hiddensForm.vehfrmcnt).not.toBe(null);
    expect(hiddensForm.incidents).not.toBe(null);
    expect(hiddensForm.url_params).not.toBe(null);
    expect(hiddensForm.leadid_token).not.toBe(null);
    expect(hiddensForm.multivehicle).not.toBe(null);
  });

  it('Should check form steps', function(){
    expect((steps.stepContainer).isDisplayed()).toBe(true);
    expect((steps.step1).isDisplayed()).toBe(true);
    expect((steps.step2).isDisplayed()).toBe(true);
    expect((steps.step3).isDisplayed()).toBe(true);
  });

  it('Should display vehicle information', function(){
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
    expect((formFields.addVehicle).isDisplayed()).toBe(true);

  });

  it('Should display Driver Information', function(){
    expect((formFields.driversGroup).isDisplayed()).toBe(true);
    expect((formFields.driverfname_d1).isDisplayed()).toBe(true);
    expect((formFields.driverlname_d1).isDisplayed()).toBe(true);
    expect((formFields.dob_d1).isDisplayed()).toBe(true);
    expect((formFields.gender_d1).isPresent()).toBe(true);
    expect(formFields.occupation_d1).toBe('Employed');
    expect(formFields.education_d1).toBe('Bachelors Degree');
    expect(formFields.maritalstat_d1).toBe('Single');
    expect(formFields.credRating_d1).toBe('Good');
    expect((formFields.residenceStatus_d1).isPresent()).toBe(true);
    expect(formFields.residenceYears_d1).toBe('3');
    expect(formFields.residenceMonths_d1).toBe('0');
    expect(formFields.suspended_d1).toBe('Current');
    //TODO: Match state name with zipcode value
    expect((formFields.licState_d1).isPresent()).toBe(true);
    expect((formFields.licAge_d1).isDisplayed()).toBe(true);
    expect((formFields.incidentsBtnYes).isPresent()).toBe(true);
    expect((formFields.incidentsBtnNo).isPresent()).toBe(true);
    expect((formFields.incidentsChecked)).toBe('true');
    expect((formFields.addDriver).isDisplayed()).toBe(true);
  });

  it('Should display Additional Information', function(){
    expect((formFields.carried_inpYes).isPresent()).toBe(true);
    expect((formFields.carried_inpNo).isPresent()).toBe(true);
    expect(formFields.protection).toBe('Better Coverage');
    expect(formFields.compAmt_v1).toBe('250');
    expect(formFields.collAmt_v1).toBe('500');
    expect(formFields.multiPolicy).toBe('No');
    expect((formFields.contaddress).isDisplayed()).toBe(true);
    expect((formFields.contAdd1).isPresent()).toBe(true);
    expect(formFields.requireSR22_d1).toBe('N');
    //TODO: Match city/zip/state
    expect((formFields.contZip).isDisplayed()).toBe(true);
    expect((formFields.contCity).isDisplayed()).toBe(true);
    expect((formFields.contState).isPresent()).toBe(true);
    expect((formFields.email).isDisplayed()).toBe(true);
    expect((formFields.dayPhone).isDisplayed()).toBe(true);
    expect((formFields.tcpa).isDisplayed()).toBe(true);
    expect((formFields.tcpaContent)).not.toBe(null);
    expect((formFields.tcpaContent)).toBe('By entering a phone number and submitting this form, I am providing Katch LLC and one or more of these other organizations* or their agents my signature expressly consenting to receive telemarketing calls or texts (including by prerecorded messages or using an autodialer or automated means) at the number provided, even if the number I provide is on a corporate, state, or national Do Not Call list. I understand that my consent is not required to make a purchase, and I represent that I am at least 18 years old and agree to the Privacy Policy and Terms of Use, including the arbitration provision and class action waiver contained therein.');
    expect((formFields.getquotes).isDisplayed()).toBe(true);
    expect((formFields.secure).isDisplayed()).toBe(true);
  });

  it('Should display the Footer', function(){
    expect((footer.disclaimer).isDisplayed()).toBe(true); //disclaimer
    expect((footer.privacy).isDisplayed()).toBe(true); //Privacy Policy
    expect((footer.terms).isDisplayed()).toBe(true); // Terms of Use
  });

  //custom for site: example
    // landing/cciu/landing.js (zipbox/content )

  // browser.pause();
});
