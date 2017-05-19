
var dash = client.page.DashboardPage();
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
'VerifyDashboardlinks' : function (client,done){  
 client.pause(5000);
 dash.clickOnprofileicon();
 dash.clickOnMyProfile();
},
'VerifyFooter' : function (client,done){  
},
'VerifyDashboardsDescription' : function (client,done){  
},
'VerifyMyCreightonLogo' : function (client,done){  
}
};
