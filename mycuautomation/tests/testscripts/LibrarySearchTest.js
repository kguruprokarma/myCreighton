
 module.exports = {
    before: function(client,done) {
        //stuff to initialize page
        var loginPage = client.page.LoginPage();
        client.maximizeWindow(done);
        loginPage.navigate()
                    .LoginStudent();

    },
     after: client => client.end(),
'LibrarySearchTest' : function (client) {

var dash = client.page.DashboardPage();
  client.pause(4000);
 dash.clickOnLibrarySearch();
var lib = client.page.LibrarySearchPage();
 /*client.pause(4000);
lib.EnterSearchQuery();
lib.clickSearchbutton(); */

//   client.pause(4000);
// lib.clickeJournals();
// lib.EnterSearchQuery();
// lib.clickSearchbutton();

client.pause(4000);
lib.clickLibraryGuides();
lib.ClicklibraryGuideSelection();

/* client.pause(4000);
lib.clickDatabases();
lib.EnterSearchQuery();
lib.clickSearchbutton(); */
}
 };