module.exports = {  
  elements: {
   schoolAndSemester:{
        selector:"//h3[contains(text(),'School & Semester')]",
        locateStrategy: 'xpath'
   },
   Classes:{
       selector:"//h3[contains(text(),'Classes')]",
       locateStrategy : 'xpath'            
   },
   nextEvents:{
       selector:"//h3[contains(text(),'Next Events')]",
       locateStrategy: 'xpath'
   },
      CreightonServicesResources:{
       selector:"//a[contains(text(),'Creighton Services & Resources')]",
       locateStrategy: 'xpath'
   },
       CampusDirectory :{
       selector:"ul.main-navigation li:nth-of-type(3) a"
      
   },
       LibrarySearch  :{
       selector:'ul.main-navigation li:nth-of-type(4) a'
   },
     DoITServicesSupport  :{
       selector:'ul.main-navigation li:nth-of-type(5) a'
   },

   Hide :{
       selector : "button.doller-icon.pull-right.btn.btn-link.openSansBold.btnnoPadding"
   },
   dollaricon :{
       selector : "img[alt='Show Creighton currency amounts']"
   },
   userdetailname:{
       selector : "span.openSansRegular.avatar-name"
   },
   userdetailtype:{
       selector : "span.openSansBold.user-type"
   },
   profileicon :{
       selector :"icon.glyphicon.glyphicon-user.btnnoPadding"
   },
    myprofile :{
       selector :"li.openSansLight.profile-icon.list-group-item",
       index:1
   },
    Academic :{
         selector :"li a[href*=academic]"
    //    selector :"li.openSansLight.profile-icon.list-group-item",
    //    index:2
   },
    changeLanguage :{
       selector :"li.openSansLight.profile-icon.list-group-item",
       index:3
   },
    signout :{
       selector :"li.openSansLight.profile-icon.list-group-item",
       index:4
   }
   
  },

    commands : [{
   clickOnSchoolAndSemester :function(){
     return this.waitForElementVisible('schoolAndSemester',2000)
                .click('schoolAndSemester')
           
   },
    clickOnClasses:function(){
     return this.waitForElementVisible('@Classes',20000)
                .click('@Classes')
    },
    clickOnNextEvents :function(){
     return this.waitForElementVisible('@nextEvents',2000)            
                .click('@nextEvents')
    },
    clickOnCreightonServicesResources :function(){
     return this.waitForElementVisible('@CreightonServicesResources',2000)	          
                .click('@CreightonServicesResources')
    },
     clickOnCampusDirectory:function(){
     return this.waitForElementVisible('@CampusDirectory',20000)
                .click('@CampusDirectory')    ;
                        
              
                //.moveToElement('@CampusDirectory', 1, 1)
                
    },
    clickOnLibrarySearch:function(){
     return this.waitForElementVisible('@LibrarySearch',20000)
                 .click('@LibrarySearch')
    },
    clickOnDoITServicesSupport:function(){
     return this.waitForElementVisible('body',2000)
	            .waitForElementVisible('@DoITServicesSupport',2000)
                .click('@DoITServicesSupport')
    },
     clickOnHide:function(){
     return this.waitForElementVisible('body',2000)
	              .waitForElementVisible('@Hide',2000)
                 .click('@Hide')
    },
     clickOndollaricon:function(){
     return this.waitForElementVisible('body',2000)
	              .waitForElementVisible('@dollaricon',2000)
                 .click('@dollaricon')
    },
     clickOnprofileicon:function(){
     return this.waitForElementVisible('body',2000)
	              .waitForElementVisible('@profileicon',2000)
                 .click('@profileicon')
    },
     clickOnMyProfile:function(){
     return this.waitForElementVisible('@myprofile',2000)
                 .click('@myprofile')
    },
    clickOnAcademic:function(){
     return this.waitForElementVisible('@Academic',2000)
                 .click('@Academic')
    },
    clickOnChangeLanguage :function(){
     return this.waitForElementVisible('body',2000)
	              .waitForElementVisible('@changeLanguage',2000)
                 .click('@changeLanguage')
    },
    clickOnSignout :function(){
     return this.waitForElementVisible('body',2000)
	              .waitForElementVisible('@signout',2000)
                 .click('@signout')
    } 

 }]

  
};