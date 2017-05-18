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
   clickOnEventFilter :function(){
     return this.waitForElementVisible('@eventfilter',5000)
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
        return this.waitForElementVisible('@CreightonCalendarEvents',20000)
                   .click('@CreightonCalendarEvents');      
     },
       clickDone : function () {
        return this.waitForElementVisible('@Done',20000)
                   .click('@Done');      
     },
       ProfilePageheaderText : function () {
        return this.waitForElementVisible('@profilepageheader',5000)
               .getText('profilepageheader');
       },

       verifyCalendarEvents : function(){
        this.api.elements('css selector', '.mb10.classesHeading', function (result) {
        console.log("The total calendar events for the week are :   " + result.value.length)      
});
     },
       clickCalendarEvent : function(){
         return this.waitForElementVisible('@calendarEvent1',5000)
                    .click('@calendarEvent1');   
       } ,
       verifyCalendarEventItem : function(){
         return this.waitForElementVisible('@CreightonCalendarItem',5000)
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
       }
 }]
};