var excel = require('../CommonFiles/ProfileReader');
  var user=excel.returnLoginData();
module.exports = {
url: 'http://mycu-rundev1.creighton.edu/#/',
  // beforeEach:function (browser,done){
  //   browser.maximizeWindow(done)
  //   .navigate();
  // },

  elements: {
    usertype :{
      selector: 'span.openSansBold.user-type' 
    },
    mycuname :{
      selector : 'input#userNameInput'
    },
    mycpwd :{
      selector : 'input#passwordInput'
    },
    myclogin :{
      selector : 'span#submitButton'
    },
    usertype : {
      selector : '.openSansBold.user-type'
    }
  },

 commands : [{
   LoginStudent:function(client){
     return this.waitForElementVisible('body',20000)
	              .waitForElementVisible('@mycuname',20000)
                 .setValue('@mycuname',user[0].Username ) //user[2].Username
                 .setValue('@mycpwd', user[0].Password) //user[2].Password
                 .click('@myclogin');                           
   },
     verifyStudent : function () {
      //  console.log("logged in as a Student");
    return this.waitForElementVisible('@usertype',20000)
               .assert.containsText('@usertype', user[0].Usertype)
     }         
 }]
};