var excel = require('../CommonFiles/ProfileReader');
  var user=excel.returnLoginData();
module.exports = {
 // url: 'http://mycu-rundev2.creighton.edu/#',
url: 'http://dev-dl-api.creighton.edu/loginadfs?redirect=http%3A%2F%2Fmycu-rundev2.creighton.edu%2F%23%2F',
  // beforeEach:function (browser,done){
  //   browser.maximizeWindow(done)
  //   .navigate();
  // },

  elements: {
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
      selector : 'span.openSansBold.user-type'
    }
  },

 commands : [{
   LoginStudent:function(client){
     return this.waitForElementVisible('body',20000)
	              .waitForElementVisible('@mycuname',20000)
                 .setValue('@mycuname',user[0].Username )
                 .setValue('@mycpwd', user[0].Password) 
                 .click('@myclogin');                           
   },
     verifyStudent : function () {
      //  console.log("logged in as a Student");
    return this.waitForElementVisible('@usertype',20000)
               .assert.containsText('@usertype', user[0].Usertype)
     }         
 }]
};