var label=require("../CommonFiles/LabelConstants")
module.exports = {  
  elements: {
   missionDesc:{
        selector:'.openSansLight.fs1pt4.p0.mb10.hidden-xs'
   }
  },
  commands : [{
   verifyMissionAndMinistryPageTitle: function(){
        const msg ="Mission And Ministry page header";
 return this.waitForElementPresent('h1.bebasregular.headerLabel.mt5.mb20')
		 .assert.containsText('h1.bebasregular.headerLabel.mt5.mb20', 'Mission And Ministry',msg + " verified");       
    },

  }]
}