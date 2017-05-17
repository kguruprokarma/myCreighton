
 var pageTest;

module.exports = {
    'tags': ['experiment'],
    before: function(client,done) {
        //stuff to initialize page
        pageTest = client.page.LoginPage();
        client.maximizeWindow(done);
        pageTest.navigate()
                .LoginStudent();
    },
     after: client => client.end(),
'ClassesTest' : function (client) {
// var login=client.page.LoginPage();
// login.navigate() ;
// login.LoginStudent();
var dash = client.page.DashboardPage();
 dash.clickOnClasses();
 var classes=client.page.ClassesPage();
   client.pause(4000);
classes.verifyPageTitle();
    client.pause(4000);
 classes.clickOnToday();
  classes.verifyTodayClasses();
  //classes.listTodayClasses();
      client.pause(3000);
      classes.clickOnAtoZ();
      classes.verifyAtoZClasses();

  }
};