var allure = require("nightwatch-allure-adapter");
module.exports = {

  elements: {
    NextEventspageheader :{
      selector: 'h1.bebasregular.headerLabel.mt5.mb20' 
    },
     Eventslist:{
      selector : 'h2.mb10.classesHeading',
    },
    eventfilter :{
      selector : "button [alt='Filter Icon']",
    },
    eventfilterDone :{
      selector : 'button.filterDoneBtn.openSansRegular.pull-right'
    },
    Nexteventdetail : {
      selector : 'li label[for="Next event detail"]',
    },
     Today : {
      selector : 'li label[for="Today"]'
 //     selector : 'li.radioLabel.list-group-item label:nth-of-type(1)'

    },
      sevenDays : {
      selector : 'li label[for="7 Days"]',
    },
      AllDay : {
      selector : 'li label[for="All"]',
    },
    AllEvents :{
      selector : 'li label[for="testAll"]'
    },
      ClassesEvents :{
      selector : 'li label[for="Classes"]'
    },
     ClassAssignmentEvents :{
      selector : 'li label[for="Class events"]'
    },
      CreightonCalendarEvents :{
      selector : 'li label[for="Creighton Calendar"]'
    },
    Done : {
      selector : 'button.filterDoneBtn.openSansRegular.pull-right'
    },
    eventlistitem : {
      selector : "h2.mb10.classesHeading",
      index : 1
    },
    CreightonCalendarItem :{
      selector : 'div.eventDetailSubject'
    },
    NextEventsTab :{
      selector : 'span.float-right.nextEventBtnTxt'
    }

  },
  
 commands : [{
    verifyNextEventsPageTitle: function(){
        const msg ="Next Events page header";
    return this.waitForElementPresent('h1.bebasregular.headerLabel.mt5.mb20')
		 .assert.containsText('@NextEventspageheader', 'Next Events',msg + " verified");       
    },
   clickOnEventFilter :function(){
     return this.waitForElementVisible('@eventfilter',20000)
                .waitForElementPresent('@eventfilter','Click on event filter')
                 .click('@eventfilter');                           
   },
     checkNexteventdetail : function () {
        return this.waitForElementVisible('@Nexteventdetail',20000)
                   .click('@Nexteventdetail');      
     },
      checkTodayEvents : function () {
        return this.waitForElementVisible('@Today',20000)
                   .click('@Today');      
     },
      checksevenDays : function () {
        return this.waitForElementVisible('@sevenDays',20000)
                   .click('@sevenDays');      
     },
      checkAllDayEvents: function () {
        return this.waitForElementVisible('@AllDay',20000)
                   .click('@AllDay');      
     },
       checkAllEvents: function () {
        return this.waitForElementVisible('@AllEvents',20000)
                   .click('@AllEvents');      
     },
      checkClassesEvents : function () {
        return this.waitForElementVisible('@ClassesEvents',20000)
                   .click('@ClassesEvents');      
     },
      checkClassAssignmentEvents : function () {
        return this.waitForElementVisible('@ClassAssignmentEvents',20000)
                   .click('@ClassAssignmentEvents');      
     },
     checkCreightonCalendarEvents : function () {
        return this.waitForElementVisible('@CreightonCalendarEvents',20000,'verify calendar event check box')
                   .waitForElementPresent('@CreightonCalendarEvents',"Check creighton calendar events from display options")
                   .click('@CreightonCalendarEvents');      
     },
       clickDone : function () {
        return this.waitForElementVisible('@Done',20000)
                   .waitForElementPresent('@Done',"Click on Done")
                   .click('@Done');      
     },
       ProfilePageheaderText : function () {
        return this.waitForElementVisible('@profilepageheader',5000)
               .getText('profilepageheader');
       },
       clickNextEventsTab : function(){
          return this.waitForElementVisible('@NextEventsTab',20000,'verify NextEvents Tab ')
                   .waitForElementPresent('@NextEventsTab',"click on NextEvents Tab for navigating back to event list")
                   .click('@NextEventsTab');
       },

       verifyCalendarEvents : function(){
        this.api.elements('css selector', '.mb10.classesHeading', function (result) {
      this.waitForElementPresent('.mb10.classesHeading',"The total calendar events  are :   " + result.value.length)
});
     },
       clickEvent : function(){
           this.api.elements('css selector','h2.mb10.classesHeading', function (result) {
             if(result.value.length!==-1)
             {
               return this.waitForElementVisible('h2.mb10.classesHeading',20000)
                     .waitForElementPresent('h2.mb10.classesHeading','Click on first Event from eventlist ')
                    .click('h2.mb10.classesHeading');  

             }
             else{
                return this.waitForElementVisible('h2.mb10.classesHeading',20000,'No events found')
             }
              
  
    });
         
       } ,

       verifyCalendarEventItem : function(){
         return this.waitForElementVisible('@CreightonCalendarItem',5000)
                    .waitForElementPresent('@CreightonCalendarItem',"verify event description - Creighton calendar item")
                    .assert.containsText('@CreightonCalendarItem','Creighton calendar item')
       },
       verifyClassesEvents:function(){
        return this.waitForElementVisible('@NextEventspageheader',5000)
                    .waitForElementPresent('@NextEventspageheader',"verify page header Next Events-Class Detail is present")
                    .assert.containsText('@NextEventspageheader','Next Events - Class Detail')
       },

       weekEvents : function(client){
    client.waitForElementVisible('@sevenDays',20000)
        .element('cssselector', 'li.radioLabel.list-group-item :nth-child(3)', function(response) {
        client.assert.ok('@sevenDays'.value.ELEMENT, 'Checkbox response is OK');
        client.elementIdSelected(response.value.ELEMENT, function(result){
          client.assert.ok(result.value, 'Checkbox is selected');
  });
});
       },
       uncheckAllDisplayOptions : function(client) {
         this.verify.visible('li label[for="testAll"]', 'The checkbox named All is visible');
            this.api.element('css selector', 'li label[for="testAll"]', function(response) {
        this.assert.ok('Checkbox response ');
        this.elementIdSelected(response.value.ELEMENT, function(result){
          this.verify.ok(!result.value, 'Checkbox is  selected');
          this.click('li label[for="testAll"]')
          this.assert.ok('Display Options-ALL is unchecked');
           });
      })
   }
 

 }]
};