
module.exports = {
     before: function(client,done) {
        //stuff to initialize page
        var loginPage = client.page.LoginPage();
        client.maximizeWindow(done);
        loginPage.navigate()
                    .LoginStudent();
    },
     after: client => client.end(),

'campusDirectorySearchTest' : function (client,done) {

var dash = client.page.DashboardPage();
client.pause(8000);
console.log("click on CampusDirectory")
 dash.clickOnCampusDirectory();
var campus = client.page.CampusDirectoryPage();
console.log("enter search query");
campus.enterSearchQuery();
console.log("click on search");
client.pause(6000);
campus.clickOnSearch();
console.log("verify results");
client.pause(6000);
campus.verifyResults();


  }
};