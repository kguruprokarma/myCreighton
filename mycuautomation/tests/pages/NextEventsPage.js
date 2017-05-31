var allure = require("nightwatch-allure-adapter");
module.exports = {

  elements: {
    NextEventspageheader :{
      selector: 'h1#header.bebasregular.headerLabel.mt5.mb20' 
    },
     Eventslist:{
      selector : 'h2.mb10.classesHeading',
    },
    eventfilter :{
      selector : 'button.btn.btn-link.btnnoPadding.filter-img',
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
    calendarEvent1 : {
      selector : "h2.mb10.classesHeading",
      index : 1
    },
    CreightonCalendarItem :{
      selector : 'div.eventDetailSubject'
    },

  },
  
 commands : [{
    verifyNextEventsPageTitle: function(){
        const msg ="Next Events page header";
    return this.waitForElementPresent('h1.bebasregular.headerLabel.mt5.mb20')
		 .assert.containsText('@NextEventspageheader', 'Next Events',msg + " verified");       
    },
   clickOnEventFilter :function(){
     return this.waitForElementVisible('@eventfilter',5000)
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
        return this.waitForElementVisible('@CreightonCalendarEvents',20000,'verify claendar event check box')
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

       verifyCalendarEvents : function(){
        this.api.elements('css selector', '.mb10.classesHeading', function (result) {
      this.waitForElementPresent('.mb10.classesHeading',"The total calendar events  are :   " + result.value.length)
});
     },
       clickCalendarEvent : function(){
         return this.waitForElementVisible('@calendarEvent1',5000)
                     .waitForElementPresent('@calendarEvent1','Click on Calendar Event ')
                    .click('@calendarEvent1');   
       } ,
       verifyCalendarEventItem : function(){
         return this.waitForElementVisible('@CreightonCalendarItem',5000)
                    .waitForElementPresent('@CreightonCalendarItem',"verify event description - Creighton calendar item")
                    .assert.containsText('@CreightonCalendarItem','Creighton calendar item')
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