var myArguments = require('minimist')(process.argv.slice(2)); // grabs the Arguments
var defaultpages = ['get-quotes/']; // By default 
var scenarios = []; 
var siteList = require('./sitelist');

var alias = function(siteAlias){
     var key=0;
    for (var i = 0; i < siteList.sites.length; i++) {
        if (siteList.sites[i].site.alias===siteAlias) {
            key = i;
        }
    }
    return key;
};

if (myArguments.siteAlias) {
var siteAliasId = alias(myArguments.siteAlias);    
} else{
    var siteAliasId=0; //CCIU default
}


// dev-sem
if (!myArguments.testUrl) {
    myArguments.testUrl = siteList.sites[siteAliasId].site.devUrl; // Default dev
}
// Prod site
if (!myArguments.refUrl) {
    myArguments.refUrl = siteList.sites[siteAliasId].site.prodUrl; // Default prod
}

//which pages to use, either a supplied array, an array from a file, or the defaults

if (myArguments.pages) {
    pagestring = myArguments.pages;
    var pages = pagestring.split(',');
} else if (myArguments.pageList) {
    var pageList = require('./' + myArguments.pageList + '.js');
    var pages = pageList.array;
} else {
    var pages = defaultpages; // Default: the landing
}

//devices
if (!myArguments.device) {
    myArguments.device = 'desktop'; // Default dev
}

if (myArguments.device === 'mobile') {
    myArguments.testUrl = myArguments.testUrl + 'm/';
    myArguments.refUrl = myArguments.refUrl + 'm/';
}

//scenarios
for (var k = 0; k < pages.length; k++) {
    var currentPage = pages[k];
    currentPage = currentPage.replace(/[^a-z-]/g,'');

    scenarios.push({
        "label": siteList.sites[siteAliasId].site.alias + '_' + pages[k],
        "cookiePath":"",
        "referenceUrl": myArguments.refUrl + pages[k] + '?zip=' + siteList.sites[siteAliasId].site.zip,
        "url": myArguments.testUrl + pages[k]  + '?zip=' + siteList.sites[siteAliasId].site.zip,
        "hideSelectors": siteList.sites[siteAliasId].site.hideSelectors[currentPage],
        "removeSelectors": [],
        "hoverSelector": "",
        "clickSelector": "",
        "postInteractionWait": "",
        "selectors": [],
        "readyEvent": "",
        "readySelector": "",
        "delay": 500,
        "selectorExpansion": false,
        "misMatchThreshold": 0.1,
        "requireSameDimensions": true
    });
}


//viewports
var viewports={
    "desktop": [
    {
        "name": "medium",
        "width": 768,
        "height": 1024
    }, {
        "name": "large",
        "width": 1024,
        "height": 768
    }, {
        "name": "xlarge",
        "width": 1280,
        "height": 800
    }],
    "mobile": [
    {
        "name": "small",
        "width": 320,
        "height": 568
    }, {
        "name": "medium",
        "width": 375,
        "height": 667
    }, {
        "name": "large",
        "width": 375,
        "height": 633
    }]
};

// Configuration
module.exports = {
    "id": siteList.sites[siteAliasId].alias,
    "viewports": viewports[myArguments.device],
    "onBeforeScript": "chromy/onBefore.js",
    "onReadyScript": "chromy/onReady.js",
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "casper_scripts": "backstop_data/casper_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "chrome",
    "engineFlags": [],
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "casperFlags": [],
    "debug": false,
    "debugWindow": false
};