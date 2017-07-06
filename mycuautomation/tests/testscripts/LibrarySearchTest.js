
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
 client.pause(4000);
lib.EnterSearchQuery();
lib.clickOnSearch();
lib.verifyJaySearchLibrary();

  client.pause(8000);
lib.clickeJournals();
lib.clickOnSearch();
lib.verifyEjournalsLibrary();

 client.pause(6000);
lib.clickLibraryGuides();
client.pause(6000);
lib.ClicklibraryGuideSelection();
lib.clickGoButton();
client.pause(4000);
lib.verifyNavigatedLibraryGuides();

client.pause(6000);
lib.clickDatabases();
lib.EnterSearchQuery();
lib.clickOnSearch(); 
lib.verifyNavigatedLibraryDatabase();
}
 };