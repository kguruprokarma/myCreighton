module.exports = {

  elements: {
    LibrarySearchPageheader :{
      selector: "h1.bebasregular.headerLabel.mt5.mb20"  
    },
    JaySearch :{
      selector : "//nav//div//a[contains(text(),'JaySearch')]",
      locateStrategy : 'xpath'
    },
     AdvancedJaySearch :{
      selector : 'input#userNameInput'
    },
    BrowseJaySearch :{
      selector : 'input#passwordInput'
    },
    eJournals :{
      selector : "//nav//div//a[contains(text(),'e-Journals')]",
      locateStrategy : 'xpath'
    },
    LibraryGuides :{
      selector : "//nav//div//a[contains(text(),'Library Guides')]",
      locateStrategy : 'xpath'
    },
    Databases : {
      selector : "//nav//div//a[contains(text(),'Databases')]",
      locateStrategy : 'xpath'
    },
     BrowseAllDatabases :{
      selector : 'span#submitButton'
    },
    BrowseReinertAlumnidatabases : {
      selector : '.openSansBold.user-type'
    },
     BrowseHealthSciencesdatabases :{
      selector : 'span#submitButton'
    },
     Creightonlogin : {
      selector : '.openSansBold.user-type'
    },
     Searchfield : {
      selector : "input[type='search']"
    },
     Searchbutton: {
      selector : "a[class*='librarySearchBtn']"
    },
     libraryGuideSelection : {
      selector : 'select[class*=librarySelection] option[value="2"]'
    },
  },

 commands : [{
    verifyLibrarySearchPageTitle: function(){
        const msg ="Library search page header";
    return this.waitForElementPresent('@LibrarySearchPageheader')
		 .assert.containsText('@LibrarySearchPageheader', 'Library Search',msg + " verified");       
    },
   clickJaySearch:function(){
     return this.waitForElementVisible('@JaySearch',20000)
                 .click('@JaySearch');                           
   },
   clickAdvancedJaySearch:function(){
     return this.waitForElementVisible('@AdvancedJaySearch',20000)
                 .click('@myclogin');                           
   },
   clickBrowseJaySearch:function(){
     return this.waitForElementVisible('@BrowseJaySearch',20000)
                 .click('@BrowseJaySearch');                           
   },
   clickeJournals:function(){
     return this.waitForElementVisible('@eJournals',20000)
                 .click('@eJournals');                           
   },
     clickLibraryGuides:function(){
     return this.waitForElementVisible('@LibraryGuides',20000)
                 .click('@LibraryGuides');                           
   },
   clickDatabases:function(){
     return this.waitForElementVisible('@Databases',20000)
                 .click('@Databases');                           
   },
   clickBrowseAllDatabases:function(){
     return this.waitForElementVisible('@BrowseAllDatabases',20000)
                 .click('@BrowseAllDatabases');                           
   },
   clickBrowseReinertAlumnidatabases:function(){
     return this.waitForElementVisible('@BrowseReinertAlumnidatabases',20000)
                 .click('@BrowseReinertAlumnidatabases');                           
   },
     clickBrowseHealthSciencesdatabases:function(){
     return this.waitForElementVisible('@BrowseHealthSciencesdatabases',20000)
                 .click('@BrowseHealthSciencesdatabases');                           
   },
   clickCreightonlogin:function(){
     return this.waitForElementVisible('@Creightonlogin',20000)
                 .click('@Creightonlogin');                           
   },
   clickSearchbutton:function(){
     return this.waitForElementVisible('@Searchbutton',20000)
                 .click('@Searchbutton');                           
   },
   EnterSearchQuery:function(){
     return this.waitForElementVisible('@Searchfield',20000)
                 .setValue('@Searchfield','abc');                           
   },
    ClicklibraryGuideSelection:function(){
     return this.waitForElementVisible('@libraryGuideSelection',20000)
                 .click('@libraryGuideSelection',1);                           
   },

 }]

};