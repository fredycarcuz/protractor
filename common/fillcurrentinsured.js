var FillCurrentInsured = function(driverList){
	//Carrier checkbox
    var carriedNo = '';
    var carriedYes = '';
    if (browser.params.config.device === 'desktop') {
        carriedNo = element(by.id('carried_inpNo'));
        carriedYes = element(by.id('carried_inpYes'));
    } else{
         carriedNo = element(by.id('carried_no_d'));
         carriedYes =  element(by.id('carried_yes_d'));        
    }

    if(!driverList.personal.currentlyInsured){
    var newENo = carriedNo.element(by.xpath('..'));
    newENo.click();
    }else{       
    var newEYes = carriedYes.element(by.xpath('..'));
    newEYes.click();
    browser.sleep(700);
    //Insurance information
    element(by.id('current_ins_company')).$('[value="3"]').click(); browser.sleep(1000);//AARP
    element(by.id('ins_exp_renew_date')).sendKeys('11032018');
    element(by.id('dur_ins_company_yr')).sendKeys('1');
    element(by.id('dur_ins_company_mnth')).sendKeys('5');
    element(by.id('dur_insured_yr')).sendKeys('5');
    element(by.id('dur_insured_mnth')).sendKeys('10');
    }
};

module.exports = FillCurrentInsured;