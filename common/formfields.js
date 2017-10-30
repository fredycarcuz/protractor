var FormFields = function(){
	this.form = element(by.id('frmSinglePageForm'));
	this.vehiclesGroup = element(by.id('vehiclesGroup'));

	this.vehicle_1_Info = element(by.id('vehicle_1_Info'));
	this.year_v1 = element(by.id('year_v1'));
	this.make_v1 = element(by.id('make_v1'));
	this.model_v1 = element(by.id('model_v1'));
	this.subModel_v1 = element(by.id('subModel_v1'));
	this.leased_v1 = element(by.id('leased_v1')).element(by.css('option[selected="selected"]')).getAttribute('value'); //Ownership
	this.vehUse_v1 = element(by.id('vehUse_v1')).element(by.css('option[selected="selected"]')).getAttribute('value');
	this.milesYear_v1 = element(by.id('milesYear_v1')).element(by.css('option[selected="selected"]')).getAttribute('value');
	this.vehGarage_v1 = element(by.id('vehGarage_v1')).element(by.css('option[selected="selected"]')).getAttribute('value');
	this.vehSecurity_v1 = element(by.id('vehSecurity_v1')).element(by.css('option[selected="selected"]')).getAttribute('value');

	this.driversGroup =  element(by.id('driversGroup'));	
	this.driverfname_d1 =  element(by.id('driverfname_d1'));
	this.driverlname_d1 =  element(by.id('driverlname_d1'));
	this.dob_d1 =  element(by.id('dob_d1'));
	this.gender_d1 =  element(by.id('gender_d1'));
}

module.exports = FormFields;