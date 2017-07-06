var excel = require('../CommonFiles/ProfileReader');
  var user=excel.returnLoginData();
var label=require("../CommonFiles/LabelConstants");

module.exports = {  
  elements: {
   CampusDirectoryPageHeader :{
       selector:'h1.bebasregular.headerLabel.mt5.mb20',
   },
   LocalPageSimpleSearch:{
       selector:"//h3[text()=Classes]",
              locateStrategy: 'xpath'
   },
     LocalPageAdvancedSearch:{
       selector:"//h3[text()=Classes]",
              locateStrategy: 'xpath'
   },
   CampusDirectorySearchfield :{
       selector:"input[type=search]"
   },
   clearicon :{
       selector:"div.icon-addon-right.openSansLight.show"
   },
   searchbutton:{
       selector : "a[class*=cmpsDirSearchBtn]"
       //selector:"div.form-group a[class*=cmpsDirSearchBtn]"
   },
   result :{
       selector : "div.col-md-9.col-xs-6"
   },
   resultslist :{
       selector : "button.btn.btn-primary.resultsList"
   }
  },
    commands : [{
verifyCampusDirectoryPageTitle: function(){
   const msg ="Campus Directory page header";
return this.waitForElementPresent('@CampusDirectoryPageHeader')
		    .assert.containsText('@CampusDirectoryPageHeader', 'Campus Directory',msg + "verified");       
    },
enterSearchQuery :function(){
return this.waitForElementVisible('@CampusDirectorySearchfield',20000)
           .setValue('@CampusDirectorySearchfield', user[0].StaffName);
           
   },
     clickOnSearch:function(){
return this .waitForElementVisible('@searchbutton',6000)   
                .click('@searchbutton') ;      
                console.log("clicked on search")              
    },

    clickOnClearIcon :function(){
     return this.waitForElementVisible('body',2000)
	            .waitForElementVisible('@clearicon',2000);
                this.click('@clearicon');
    },
    verifyResults :function(){
   this.api.elements('css selector','p.cpmsDirProfName', function (result) {
             if(result.value.length!==0)
             {
               return this.waitForElementVisible('p.cpmsDirProfName',20000)
                          .waitForElementPresent('p.cpmsDirProfName','Click on first result from list of results ')
                          .click('p.cpmsDirProfName');  
                    
             }
             else{
                return this.waitForElementVisible('col-md-9 col-xs-6',20000,'No matches found for the search')
                           .assert.containsText('col-md-9 col-xs-6', "0 Results","0 Results")

             }
     });               
    },
verifyStaffDetail : function(){
    return this.waitForElementVisible('body',20000,"wait till Staff Detail page is loaded")
               .assert.containsText('@CampusDirectoryPageHeader',label.STAFFDETAIL_PAGEHEADER,"Verified STAFF DETAIL page header")
},
  clickOnResultList:function(){
     return this .waitForElementVisible('@resultslist',6000,"click on resultlist tab to navigate back to Result page")   
                 .click('@resultslist') ;      

    },
verifyResultsPage : function() {
     return this.waitForElementVisible('@CampusDirectoryPageHeader',20000,"wait till results page is loaded")
                .assert.containsText('@CampusDirectoryPageHeader',label.RESULTS_PAGEHEADER,"Verified Results page header")
}

 }]
};