 module.exports = {
    before: function(client,done) {
        //stuff to initialize page
        pageUnderTest = client.page.LoginPage();
        client.maximizeWindow(done);
        pageUnderTest.navigate()
                    .LoginStudent();

    },
    after: client => client.end(),
'verify EventPeriod All and DisplayOptions Creighton Calendar ' : function (client) {
var dash = client.page.DashboardPage();
dash.clickOnNextEvents();
var events=client.page.NextEventsPage();
client.pause(4000);
events.clickOnEventFilter();
client.pause(2000);
events.uncheckAllDisplayOptions();
client.pause(3000);
events.checkCreightonCalendarEvents();
events.clickDone();
events.verifyCalendarEvents();
client.pause(2000);
events.clickEvent();
events.verifyCalendarEventItem();
},
'Navigate Back to Nexteventlist': function(client){
  var events=client.page.NextEventsPage();
  events.clickNextEventsTab();
},
 'verify EventPeriod All and DisplayOptions Classes ' : function (client) {
var events=client.page.NextEventsPage();
client.pause(4000);
events.clickOnEventFilter();
client.pause(2000);
events.checkCreightonCalendarEvents();
client.pause(2000);
events.checkClassesEvents();
events.clickDone();
client.pause(2000);
events.clickEvent();
client.pause(2000);
events.verifyClassesEvents();
 }

};
