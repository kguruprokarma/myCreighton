
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
'FooterValidationTest' : function (client,done){  
    var dash = client.page.DashboardPage();
 client.pause(5000);
 dash.verifyFooter();
// dash.clickOnMyProfile();
},
/*'FooterValidationTest' : function (client,done){ 
 
},
'DashboardsDescriptionTest' : function (client,done){  
},
'MyCreightonLogoTest' : function (client,done){  
}*/
};
