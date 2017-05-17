 module.exports = {
    before: function(client,done) {
        //stuff to initialize page
        pageUnderTest = client.page.LoginPage();
        client.maximizeWindow(done);
        pageUnderTest.navigate()
                    .LoginStudent();

    },
     after: client => client.end(),
'NextEventsTest' : function (client) {
// var login=client.page.LoginPage();
// login.navigate() ;
// login.LoginStudent();
var dash = client.page.DashboardPage();
 dash.clickOnNextEvents();
 var events=client.page.NextEventsPage();
  client.pause(4000);
events.clickOnEventFilter();
client.pause(2000);
events.checkAllEvents();



  }
};