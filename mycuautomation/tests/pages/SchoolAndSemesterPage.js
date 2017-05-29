var label=require("../CommonFiles/LabelConstants")
module.exports = {  
  elements: {
   semesterStart:{
        selector:"//a[contains(text(),'Semester Start')]",
        locateStrategy: 'xpath'
   }
  },
  commands : [{
   verifySchoolAndSemesterPageTitle: function(){
        const msg ="School & Semester page header";
 return this.waitForElementPresent('h1.bebasregular.headerLabel.mt5.mb20')
		 .assert.containsText('h1.bebasregular.headerLabel.mt5.mb20', 'School & Semester',msg+ "verified");       
    },

  }]
};