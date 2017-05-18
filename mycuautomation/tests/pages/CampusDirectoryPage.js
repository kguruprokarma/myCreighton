module.exports = {  
  elements: {
   CampusDirectoryPageHeader :{
       selector:"//h3[text()=School & Semester]",
           locateStrategy: 'xpath'
   },
   LoaclPageSimpleSearch:{
       selector:"//h3[text()=Classes]",
              locateStrategy: 'xpath'
   },
     LocalPageAdvancedSearch:{
       selector:"//h3[text()=Classes]",
              locateStrategy: 'xpath'
   },
   CampusDirectorySearchfield :{
       selector:"input[type=search]"
   },
   clearicon :{
       selector:"div.icon-addon-right.openSansLight.show"
   },
   searchbutton:{
       selector : "a[class*=cmpsDirSearchBtn]"
       //selector:"div.form-group a[class*=cmpsDirSearchBtn]"
   },
   result :{
       selector : "div.col-md-9.col-xs-6"
   }
  },
    commands : [{
     enterSearchQuery :function(){
     return this.waitForElementVisible('@CampusDirectorySearchfield',20000)
                 .setValue('@CampusDirectorySearchfield', 'John,Smith');
           
   },
    clickOnSearch:function(){
     return this .waitForElementVisible('@searchbutton',6000)   
                .click('@searchbutton') ;      
                console.log("clicked on search")              
    },

    clickOnClearIcon :function(){
     return this.waitForElementVisible('body',2000)
	            .waitForElementVisible('@clearicon',2000);
                this.click('@clearicon');
    },
    verifyResults :function(){
    this.api.elements('css selector', 'div.col-md-9.col-sm-8 p.cpmsDirProfName', function (result) {
        console.log("The Search results are  " + result.value.length) 
     });               
    }
 }]
};