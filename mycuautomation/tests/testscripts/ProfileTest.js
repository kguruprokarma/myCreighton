module.exports = {
   before: function(client,done) {
        //stuff to initialize page
        var loginPage = client.page.LoginPage();
        client.maximizeWindow(done);
        loginPage.navigate()
                 .LoginStudent()
                 .verifyStudent();
    },
     after: client => client.end(),
'VerifyProfile' : function (client,done){
var dash = client.page.DashboardPage();
 client.pause(5000);
 dash.clickOnprofileicon();
 dash.clickOnMyProfile();
 var profile=client.page.ProfilePage();
  client.pause(5000);
 profile.assert.containsText('@profilepageheader', 'My Profile');
 profile.verifyProfile();
},

'NavigateToAcademic' : function (client,done){
 var dash = client.page.DashboardPage();
  client.pause(8000);
 dash.clickOnprofileicon();
   client.pause(5000);
 dash.clickOnAcademic();
 var profile=client.page.ProfilePage();
 profile.assert.containsText('@Academicpageheader', 'Academic');
},

};