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
      selector : "button[class*='librarySearchBtn']"
    },
     libraryGuideSelection : {
      selector : "select option[value='2']"
    },
    GoButton :{
      selector :"a[class*=librarySearchBtn]"
    }
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
   clickOnSearch:function(){
     return this.waitForElementVisible('@Searchbutton',20000)
                 .click('@Searchbutton');                           
   },
   EnterSearchQuery:function(){
     return this.waitForElementVisible('@Searchfield',20000)
                 .setValue('@Searchfield','abc');                           
   },
    ClicklibraryGuideSelection:function(){
     return this.waitForElementVisible('@libraryGuideSelection',20000)
                 .click('@libraryGuideSelection');                           
   },  
    clickGoButton:function(){
     return this.waitForElementVisible('@GoButton',20000)
                 .click('@GoButton');                           
   },

   verifyJaySearchLibrary:function(){
     this.api.windowHandles(function(result) {
    var newWindow;
    //this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
    mainwindow=result.value[0];
    newWindow = result.value[1];
    this.switchWindow(newWindow);
      this.verify.urlContains("http://creighton-primo.hosted.exlibrisgroup.com");
    this.switchWindow(mainwindow);
     });
   },
    verifyEjournalsLibrary:function(){
     this.api.windowHandles(function(result) {
    var newWindow;
    //this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
    mainwindow=result.value[0];
    newWindow = result.value[2];
    this.switchWindow(newWindow);
      this.verify.urlContains("http://creighton-primo.hosted.exlibrisgroup.com");
    this.switchWindow(mainwindow);
     });
   },
    verifyNavigatedLibraryGuides:function(){
     this.api.windowHandles(function(result) {
    var newWindow;
    //this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
    mainwindow=result.value[0];
    newWindow = result.value[3];
    this.switchWindow(newWindow);
      this.verify.urlContains("http://culibraries.creighton.edu");
    this.switchWindow(mainwindow);
      });
   },
   
      verifyNavigatedLibraryDatabase:function(){
     this.api.windowHandles(function(result) {
    var newWindow;
    //this.verify.equal(result.value.length, 2, 'There should be 2 windows open');
    mainwindow=result.value[0];
    newWindow = result.value[4];
    this.switchWindow(newWindow);
      this.verify.urlContains("http://culibraries.creighton.edu/az.php");
    this.switchWindow(mainwindow);
      });
   },
  }]
};