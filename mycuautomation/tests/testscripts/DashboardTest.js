
module.exports = {
   before: function(client,done) {
        //stuff to initialize page
        var loginPage = client.page.LoginPage();
        client.maximizeWindow(done);
        loginPage.navigate()
                 .LoginStudent();
    },
     after: client => client.end(),
'FooterValidationTest' : function (client,done){
 var dash = client.page.DashboardPage();  
  dash.verifyFooter();
  client.pause(5000);
},
'DashboardLinksTest' : function (client,done) {
var dash = client.page.DashboardPage();
dash.verifyDashboardLinks();

dash.clickOnSchoolAndSemester();
client.pause(5000);
var school  = client.page.SchoolAndSemesterPage();
school.verifySchoolAndSemesterPageTitle();
client.back();

dash.clickOnClasses();
client.pause(5000);
 var classes=client.page.ClassesPage();
classes.verifyPageTitle();
client.back();

client.pause(5000);
dash.clickOnNextEvents();
client.pause(5000);
 var events=client.page.NextEventsPage();
 events.verifyNextEventsPageTitle();
client.back();

client.pause(5000);
dash.clickOnMissionAndMinistry();
client.pause(5000);
 var mission=client.page.MissionAndMinistryPage();
mission.verifyMissionAndMinistryPageTitle();
client.back();

},
 

'NavigationLinksTest' : function (client,done){
    var dash = client.page.DashboardPage();  
    dash.verifyNavigationLinks();

dash.clickOnQuickLaunch();
client.pause(5000);
var quicklaunch  = client.page.QuickLaunchPage();
quicklaunch.verifyQuickLaunchPageTitle();
client.back();

dash.clickOnCampusDirectory();
client.pause(5000);
var campus = client.page.CampusDirectoryPage();
campus.verifyCampusDirectoryPageTitle();
client.back();

dash.clickOnLibrarySearch();
client.pause(5000);
var library  = client.page.LibrarySearchPage();
library.verifyLibrarySearchPageTitle();
client.back();

client.pause(4000);
dash.clickOnDoITServicesSupport();
client.pause(20000);
dash.verifyDoItServices();

}
};
