var label=require("../CommonFiles/LabelConstants")
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
   missionAndMinistry :{
       selector:"//h3[contains(text(),'Mission and Ministry')]",
       locateStrategy: 'xpath'   
    },
      quickLaunch:{
       selector:"//a[contains(text(),'Quick Launch')]",
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
   },
   mycLogo : {
       selector : "a.myCreighton-logo span"
   },
   footer :{
       selector : "span.space-mb"
   },
   site :{
       selector : "//a[contains(text(),'Site')]",
       locateStrategy : 'xpath'
   },
     feedback :{
       selector : "//a[contains(text(),'Feedback')]",
       locateStrategy : 'xpath'
   },
   
  },

    commands : [{
   clickOnSchoolAndSemester :function(){
           
     return this.waitForElementVisible('@schoolAndSemester',2000)
                .waitForElementPresent('@schoolAndSemester',"Click on school & Semester")
                .click('@schoolAndSemester')
               
               
   },
    clickOnClasses:function(){
     return this.waitForElementVisible('@Classes',20000)
                 .waitForElementPresent('@Classes',"Click on Classes")
                .click('@Classes')
    },
    clickOnNextEvents :function(){
     return this.waitForElementVisible('@nextEvents',20000)
                .waitForElementPresent('@nextEvents',"Click on Next Events")            
                .click('@nextEvents')
    },
      clickOnMissionAndMinistry :function(){
     return this.waitForElementVisible('@missionAndMinistry',2000)
                .waitForElementPresent('@missionAndMinistry',"Click on Mission And Ministry")            
                .click('@missionAndMinistry')
    },
    clickOnQuickLaunch :function(){
     return this.waitForElementVisible('@quickLaunch',2000)
                .waitForElementPresent('@missionAndMinistry',"Click on Quick Launch")	          
                .click('@quickLaunch')
    },
     clickOnCampusDirectory:function(){
     return this.waitForElementVisible('@CampusDirectory',20000)
                .waitForElementPresent('@missionAndMinistry',"Click on Campus Directory")
                .click('@CampusDirectory')    
    },
    clickOnLibrarySearch:function(){
     return this.waitForElementVisible('@LibrarySearch',20000)
                 .waitForElementPresent('@missionAndMinistry',"Click on Library Search")
                 .click('@LibrarySearch')
    },
    clickOnDoITServicesSupport:function(){
     return this.waitForElementVisible('body',2000)
	            .waitForElementVisible('@DoITServicesSupport',2000)
                .waitForElementPresent('@DoITServicesSupport',"Click on DoIT Services & Support")
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
    },
   verifyDashboardLinks:function(){
       this.api.elements('css selector','h3.well-title.openSansLight', function (result) {
    console.log("No. of Dashboard links are "+ result.value.length) ;
    this.assert.equal(result.value.length, 4,"No. of Dashboard links are 4");
// for (var i = 0; i < result.value.length; i++) {
//     this.pause(20000);
//    /* this.getText('h3.well-title.openSansLight',function(links){
//             console.log(links.value[i])
//             }
//     );*/
    
//         //if(links.value===))
//     this.elementIdClick(result.value[i].ELEMENT);
//   //  console.log(result.value[i].ELEMENT)
//    this.pause(8000);
//      this.back();
       });
 
      //this.assert.equal(result.value.length, 4);
    //this.expect.element('h3.well-title.openSansLight').text.to.contain('School & Semester');

    //this.expect.element('h3.well-title.openSansLight').to.be.present;
        
       },
    verifySchoolAndSemester: function(){
        const msg ="School & Semester page header";
          return this.waitForElementPresent('h1.bebasregular.headerLabel.mt5.mb20')
		 .assert.containsText('h1.bebasregular.headerLabel.mt5.mb20', 'School & Semester',msg + " verified");       
    },

    verifyFooter :function(){
     return this.waitForElementVisible('@footer',20000)
	              .assert.containsText('@footer',label.footerAddress)        
    },
    verifyNavigationLinks:function(){
    this.api.elements('css selector','ul.main-navigation li', function (result) {
    console.log("No. of Navigation links are "+ result.value.length) ;
    this.verify.equal(result.value.length, 4,"No. of Navigation links are 4");
    });
    },
    navigationlinks : function(){
             this.api.elements('css selector', 'ul.main-navigation li', function(result) {
        for(var i in result.value) {
          this.elementIdClick(result.value[i].ELEMENT)
            // console.log(links.value);
            this.pause(8000) 
        }
             });
    },

    verifyDoItServices : function (){
        this.api.window_handles(function(result) {
        this.verify.equal(result.value.length, 2, 'verify the navigation to creighton easy vista ')
        var handle = result.value[1]
        this.switchWindow(handle)
      })
      
           .waitForElementVisible('body',5000)
            .verify.urlContains(label.easyvistaurl,'DoIT Services & Support is verified')
            .assert.title("CU SS Portal Shortcut (PROD)")

    }
 }]

};

