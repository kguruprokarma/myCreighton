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
    firstname :{
      selector : "//div[contains(text(),'6aed0206d6')]",
      locateStrategy : 'xpath'
    },
      Lastname : {
      selector : "//div[contains(text(),'15f86e24ed')]",
      locateStrategy : 'xpath'
    },
      Middle :{
      selector : "//div[contains(text(),'Marie')]",
      locateStrategy : 'xpath'
    },
      NetID : {
      selector : "//div[contains(text(),'6cb4db8459')]",
      locateStrategy : 'xpath'
    },
    LegalName : {
      selector :  "//h2[contains(text(),'Legal Name')]",
       locateStrategy : 'xpath'
    },
    HomeAddress : {
      selector : "//h2[contains(text(),'Home Address')]",
       locateStrategy : 'xpath'
    },
    SchoolAddress : {
      selector :  "//h2[contains(text(),'School Address')]",
       locateStrategy : 'xpath'
    },
    PrimaryContact : {
      selector : "//h2[contains(text(),'Primary Contact')]",
       locateStrategy : 'xpath'
    },
    EmergencyContact : {
      selector :  "//h2[contains(text(),'Emergency Contact')]",
       locateStrategy : 'xpath'
    },
    Email : {
      selector :  "//h2[contains(text(),'Email')]",
       locateStrategy : 'xpath'
    },
    Other :  {
      selector :  "//h2[contains(text(),'Other')]",
       locateStrategy : 'xpath'
    },
    AgeOfMajority :{
      selector : "//h2[contains(text(),'IF NOT AGE OF MAJORITY')]",
       locateStrategy : 'xpath'
    },
    AcademicStatus :{
      selector : "//h2[contains(text(),'Academic Status')]",
       locateStrategy : 'xpath'
    },
    AdvisorInformation :{
       selector : "//h2[contains(text(),'Advisor Information')]",
        locateStrategy : 'xpath'
    },
    phone : {
      selector :"a[href*=tel]"
    },
    emailformat :{
      selector : "a[href*='@creighton.edu']"
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
                .assert.containsText('@profilepageheader', 'My Profile');  
       },
          AcademicPageheaderText : function () {
    return this.waitForElementVisible('@Academicpageheader',5000)
                .assert.containsText('@Academicpageheader', 'Academic');  
       },
       verifyProfile : function() {
            this.assert.containsText('@firstname',profiledata[0].Firstname)
                .assert.containsText('@Lastname',profiledata[0].Lastname)
                .assert.containsText('@Middle',profiledata[0].Middle)
                .assert.containsText('@NetID',profiledata[0].NetID)
                 

       },
         verifyMyProfileLabels : function() {
         this.assert.containsText('@LegalName',profiledata[0].MyProfileLabel)
                .assert.containsText('@HomeAddress',profiledata[1].MyProfileLabel)
                .assert.containsText('@SchoolAddress',profiledata[2].MyProfileLabel)
                .assert.containsText('@PrimaryContact',profiledata[3].MyProfileLabel)
                .assert.containsText('@EmergencyContact',profiledata[4].MyProfileLabel)
                .assert.containsText('@Email',profiledata[5].MyProfileLabel)
                .assert.containsText('@Other',profiledata[6].MyProfileLabel)
                .assert.containsText('@AgeOfMajority',profiledata[7].MyProfileLabel)
                 

       },
        verifyAcademicLabels : function() {
      this.waitForElementVisible('@AcademicStatus',5000)
               .assert.containsText('@AcademicStatus',profiledata[0].AcademicLabel)
                .assert.containsText('@AdvisorInformation',profiledata[1].AcademicLabel)
        },
       verifyPhoneNumber : function () {
    return  this.getText('a[href*=tel]',function(result){
      console.log('Phone no : ',result.value);
      var phoneformat =  /^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/; 
      if(result.value.match(phoneformat))
        {  
      console.log("Valid phone number format");  
        }  
      else  
        {  
       console.log("Invalid phone number format");
        return false;  
       }
    });

       },
        verifyEmailFormat : function () {
    return  this.getText("a[href*='@creighton.edu']",function(result){
      console.log('School Email id : ',result.value);
      var emailformat =/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@creighton.edu/; 
      ///[a-z]{2}[0-9]{5}[a-z]{1}@creighton.edu/;
      
      if(result.value.match(emailformat))
        {  
      console.log("Valid email id format");  
        }  
      else  
        {  
       console.log("Invalid  email id format");
        return false;  
       }
    });
       }
       }]
};