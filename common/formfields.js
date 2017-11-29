var Functions = require('../common/_functions');
var functions = new Functions();

var FormFields = function(){
	this.form = element(by.id('frmSinglePageForm'));
	this.vehiclesGroup = element(by.id('vehiclesGroup'));

	this.vehicle_1_Info = element(by.id('vehicle_1_Info'));
	this.year_v1 = element(by.id('year_v1'));
	this.make_v1 = element(by.id('make_v1'));
	this.model_v1 = element(by.id('model_v1'));
	this.subModel_v1 = element(by.id('subModel_v1'));
	this.leased_v1 = functions.getSelectById('leased_v1'); //Ownership
	this.vehUse_v1 = functions.getSelectById('vehUse_v1');
	this.milesYear_v1 = functions.getSelectById('milesYear_v1');
	this.vehGarage_v1 = functions.getSelectById('vehGarage_v1');
	this.vehSecurity_v1 = functions.getSelectById('vehSecurity_v1');
	if(browser.params.config.device === 'desktop'){
		this.addVehicle = element(by.id('js-ktButton__addVehicle'));
	}
	
	this.driversGroup =  element(by.id('driversGroup'));	
	this.driverfname_d1 =  element(by.id('driverfname_d1'));
	this.driverlname_d1 =  element(by.id('driverlname_d1'));
	this.dob_d1 =  element(by.id('dob_d1'));
	if (browser.params.config.device ==='mobile') {
		this.dob_month_1 = element(by.id('month_1'));
		this.dob_day_1 = element(by.id('day_1'));
		this.dob_year_1= element(by.id('year_1'));
	}
	this.gender_d1 =  element(by.id('gender_d1'));
	this.occupation_d1 = functions.getSelectById('occupation_d1');
	this.education_d1 = functions.getSelectById('education_d1');
	this.maritalstat_d1 = functions.getSelectById('maritalstat_d1');
	this.credRating_d1 = functions.getSelectById('credRating_d1');
	this.residenceStatus_d1 = element(by.id('residenceStatus_d1'));
	this.residenceYears_d1 = functions.getSelectById('residenceYears_d1');
	this.residenceMonths_d1 = functions.getSelectById('residenceMonths_d1');
	this.suspended_d1 = functions.getSelectById('suspended_d1'); //License Status
	this.licState_d1 = element(by.id('licState_d1'));
	this.licAge_d1 =  element(by.id('licAge_d1'));
	if (browser.params.config.device === 'mobile') {
		this.incidentsBtnYes = element(by.id('incident_yes_d'));
		this.incidentsBtnNo = element(by.id('incident_no_d'));
		this.primaryVehicle = element(by.id('vehicleRow1'));
		this.moreVehicles = element(by.id('morveh'));
		this.moreVehiclesYes = element(by.id('morveh_yes_d'));
		this.moreVehiclesNo = element(by.id('morveh_no_d'));
		this.moreDriver = element(by.id('driverRow1'));
		this.moreIncidents = element(by.id('duiGroup'));
	}else{
		this.incidentsBtnYes = element(by.id('incident_yes_d1'));
		this.incidentsBtnNo = element(by.id('incident_no_d1'));	
	}
	this.incidentsChecked = this.incidentsBtnNo.getAttribute('checked');
	this.addDriver = element(by.id('js-ktButton__addDriver'));
	
	this.carried_inpYes = element(by.id('carried_inpYes'));
	this.carried_inpNo =  element(by.id('carried_inpNo'));
	if (browser.params.config.device === 'mobile') {
		this.carried_inpYes = element(by.id('carried_yes_d'));
		this.carried_inpNo =  element(by.id('carried_no_d'));
	}

	this.protection = functions.getSelectById('protection'); 
	this.compAmt_v1 = functions.getSelectById('compAmt_v1');
	this.collAmt_v1 = functions.getSelectById('collAmt_v1');
	this.multiPolicy = functions.getSelectById('multiPolicy');
	this.requireSR22_d1 = functions.getSelectById('requireSR22_d1');
	if (browser.params.config.device === 'desktop') {
		this.contaddress =  element(by.id('contaddress')); //displayed
	}
	this.contAdd1 =  element(by.id('contAdd1'));//present
	this.contZip =   element(by.id('contZip'));
	this.contCity = element(by.id('contCity'));
	this.contState = functions.getSelectById('compAmt_v1');
	this.email = element(by.id('email'));
	this.dayPhone = element(by.id('dayPhone'));

	if (browser.params.config.device === 'mobile') {
		this.tcpa = element(by.css('#lbl-tcpa label'));
		this.tcpaContent = this.tcpa.getText();
	} else{
		this.tcpa = element(by.id('js-ktContent__tcpa'));
		this.tcpaContent = this.tcpa.getText();
	}
	this.getquotes = element(by.id('getquotes')); 
	this.secure = element(by.css('.secure'));
};

module.exports = FormFields;