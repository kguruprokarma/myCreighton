var excel = require('../CommonFiles/ProfileReader');
  var profiledata=excel.returnProfileData();

module.exports = {

  elements: {
    profilepageheader :{
      selector: '.bebasregular.headerLabel.mt5.mb20' 
    },
     profilenavigation:{
      selector : '//a[contains(text(),My Profile)]',
      locateStrategy : 'xpath'
    },
    AcademicNavigation :{
      selector : "//a[contains(text(),Academic)]",
      locateStrategy : 'xpath'
    },
    Academicpageheader :{
      selector : "h1#header"
    },
    dataElements : {
      selector : '.dataHeading.openSansRegular'
    },
    firstname :
    {
      selector : "//div[contains(text(),'6aed0206d6')]",
      locateStrategy : 'xpath'
    },
      Lastname :
    {
      selector : "//div[contains(text(),'15f86e24ed')]",
      locateStrategy : 'xpath'
    },
      Middle :
    {
      selector : "//div[contains(text(),'Marie')]",
      locateStrategy : 'xpath'
    },
      NetID :
    {
      selector : "//div[contains(text(),'6cb4db8459')]",
      locateStrategy : 'xpath'
    }
    
  },
  
 commands : [{
   NavigateProfile:function(){
     return this.waitForElementVisible('@profilenavigation',5000)
                 .click('profilenavigation');                           
   },
     NavigateAcademic : function () {
        return this
                 .waitForElementVisible('@AcademicNavigation',20000);                 
                 this.click('@AcademicNavigation');
                //.moveToElement('@AcademicNavigation')
                 
     },
       ProfilePageheaderText : function () {
     
    return this.waitForElementVisible('@profilepageheader',5000)
               .getText('profilepageheader');
      
       },
       verifyProfile : function() {
            this.assert.containsText('@firstname',profiledata[0].Firstname)
                .assert.containsText('@Lastname',profiledata[0].Lastname)
                .assert.containsText('@Middle',profiledata[0].Middle)
                .assert.containsText('@NetID',profiledata[0].NetID)
                 

       }
 }]
};