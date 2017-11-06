/*
Fill incidents by driver and type
@driverNumber: Numeric. The numeric id of the driver
@type: Incident type: DUI, Ticket, Accident, Claim
*/
var FillIncidents = function(driverNumber,incidentTypeList){
        var incidents = element(by.id('incident_yes_d'+ driverNumber));
        var newE = incidents.element(by.xpath('..'));
        newE.click();
        browser.sleep(400);
    //Incidents
    for (var i = 0; i < incidentTypeList.incidents.length; i++) {
        var incidentType = incidentTypeList.incidents[i].type;
        var incidentNumber = i+1;
        if (incidentType==='Ticket'){
            element(by.id('incidentType_'+ incidentNumber +'_d'+ driverNumber)).$('[value="'+ incidentType +'"]').click(); browser.sleep(400);
            element(by.id('incidentDesc_'+ incidentNumber +'_d'+ driverNumber)).$('[value="Speeding Violation"]').click(); browser.sleep(400);
        }else if(incidentType==='DUI'){
            element(by.id('incidentType_'+ incidentNumber +'_d'+ driverNumber)).$('[value="'+ incidentType +'"]').click(); browser.sleep(400);
            element(by.id('incidentState_'+ incidentNumber +'_d'+ driverNumber)).$('[value="CA"]').click(); browser.sleep(400);
        }else if(incidentType=='Accident' || incidentType=='Claim'){
            element(by.id('incidentType_'+ incidentNumber +'_d'+ driverNumber)).$('[value="'+ incidentType +'"]').click(); browser.sleep(400);
            if(incidentType=='Accident'){
                element(by.id('incidentDesc_'+ incidentNumber +'_d'+ driverNumber)).$('[value="Vehicle Hit Vehicle"]').click(); browser.sleep(400);    
            }else{
                element(by.id('incidentDesc_'+ incidentNumber +'_d'+ driverNumber)).$('[value="Vandalism Damage"]').click(); browser.sleep(400);    
            }
        element(by.id('incidentDamaged_'+ incidentNumber +'_d'+ driverNumber)).$('[value="Property"]').click(); browser.sleep(400);
        element(by.id('incidentFault_'+ incidentNumber +'_d'+ driverNumber)).$('[value="y"]').click(); browser.sleep(400);
        element(by.id('incidentAmount_'+ incidentNumber +'_d'+ driverNumber)).sendKeys('3400'); browser.sleep(400);
        }
        element(by.id('incidentYear_'+ incidentNumber +'_d'+ driverNumber)).$('[value="2016"]').click(); browser.sleep(400);
        element(by.id('incidentMonth_'+ incidentNumber +'_d'+ driverNumber)).$('[value="10"]').click(); browser.sleep(400);
        if (incidentNumber < incidentTypeList.incidents.length){
            element(by.id('js-ktButton__addAnotherIncident-'+ driverNumber)).click();//Add Incident
        }
    }
}

module.exports = FillIncidents;