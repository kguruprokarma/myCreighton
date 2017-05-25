var excel = require('../CommonFiles/ProfileReader');
  var user=excel.returnLoginData();
module.exports = {
url: 'http://dev-dl-api.creighton.edu/loginadfs?redirect=http%3A%2F%2Fmycu-rundev1.creighton.edu%2F%23%2F',
// url: 'https://msauth.creighton.edu/adfs/ls?SAMLRequest=fVA9b4MwEJ37L5B3wJASohMgpcrQSK2KGtShC3JtEyyBTX2m6s8vMVWVLrnt9D7uvSuQjcME%2B9n1%2BlV%2BzhJd8D0OGsEDJZmtBsNQIWg2SgTH4bR%2FfoI0ojBZ4ww3AwmWuTssWqWZU0aXpHduQojjEdliHXEr1bl3RkdSzDETHcYDetnxUJK242K32XLGuzTPt2myS0S2ooizPGp0TLuSpDTJQ5qFadYk97ChQOm7p9W%2FQR6UFkqfb6f%2BWEkIj01Th%2FXLqSHBm7Tocy8EUhWX7uBv26tv3LZliNJeypNKyK9QDCGbVPtXvF2KF%2FGVcbVu%2F39f%2FQA%3D&RelayState=',
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