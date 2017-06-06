
//LoginTest.js
module.exports = {
  beforeEach:function (browser,done){
    browser.maximizeWindow(done);
  },
 after: client => client.end(),
  '@tags': ['LoginTest'],
  'LoginApplication' : function (client) {
      var login = client.page.LoginPage();
      login.navigate()
           .LoginStudent();
      client.pause(6000);
     login.verifyStudent();
  }
};
