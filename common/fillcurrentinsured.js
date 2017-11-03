var FillCurrentInsured = function(){
	//Carrier checkbox      
    var carried = element(by.id('carried_inpYes'));
    var newE = carried.element(by.xpath('..'));
    newE.click();
    browser.sleep(700);
    //Insurance information
    element(by.id('current_ins_company')).$('[value="AARP"]').click(); browser.sleep(1000);
    element(by.id('ins_exp_renew_date')).sendKeys('11032018');
    element(by.id('dur_ins_company_yr')).sendKeys('2');
    element(by.id('dur_ins_company_mnth')).sendKeys('5');
    element(by.id('dur_insured_yr')).sendKeys('4');
    element(by.id('dur_insured_mnth')).sendKeys('11');
}

module.exports = FillCurrentInsured;