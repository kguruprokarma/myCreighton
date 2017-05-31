var label=require("../CommonFiles/LabelConstants")
module.exports = {  
  elements: {
 quicklaunchPageHeader:{
        selector:".bebasregular.headerLabel.mt5.mb20",
   }
  },
  commands : [{
   verifyQuickLaunchPageTitle: function(){
        const msg ="Quick Launch page header";
 return this.waitForElementPresent('@quicklaunchPageHeader')
		 .assert.containsText('@quicklaunchPageHeader', 'Quick Launch',msg + " verified");       
    },

  }]
};