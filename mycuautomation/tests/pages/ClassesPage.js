var classes = require('../CommonFiles/ProfileReader');
  var classesdata=classes.returnClassesData();

module.exports = {
  elements: {
    ClassScheduleTitle :{
      selector: 'h1.bebasregular.headerLabel.mt5.mb20'
    },
    today :{
      selector : 'a[href="#/classes/today"]'
    },
    week :{
      selector : 'a[href="#/classes/week"]'
    },
    AtoZ :{
      selector : 'a[href="#/classes/list"]'
    },
    TodayClasses : {
      selector : 'h2.mb10.classesHeading'
    },
    class1 :{
      selector : "//div[@class='col-md-5 col-sm-5']//h2[contains(text(),'Intro to Financial Accounting'')]",
      locateStrategy  : 'xpath'
    }
  },
  
 commands : [{
   clickOnToday:function(){
     return this .waitForElementVisible('@today',20000)
                 .click('@today');                           
   },
   clickOnWeek:function(){
     return this .waitForElementVisible('@week',20000)
                 .click('@week');                           
   },
      clickOnAtoZ:function(){
     return this .waitForElementVisible('@AtoZ',20000)
                 .click('@AtoZ');                           
   },
   verifyTodayClasses :function(client){
    this.api.elements('css selector','h2.mb10.classesHeading', function (result) {
    console.log("Todays no. of classes are "+ result.value.length) ;
    this.assert.containsText('h2.mb10.classesHeading',classesdata[0].TodayClasses);

       //   .assert.containsText('@TodayClasses',classesdata[1].TodayClasses);
    //  for(var i=0;i<result.value.length;i++){
    //     var elementCss = 'div h2.mb10.classesHeading:nth-child(' + (i+1) + ')';
    //      return this.waitForElementPresent(elementCss)
    //             .getText(elementCss, function(result){
    //               console.log(result.value);
    //                 return result.value;
    //   });
    //  }
      });

   },
   
      verifyWeekClasses :function(){
    this.api.elements('css selector', 'div h2.mb10.classesHeading', function (result) {
    console.log(result.value.length) 
    // callback.call(self, result);
});
      },
        verifyAtoZClasses :function(){
    this.api.elements('css selector', 'div h2.mb10.classesHeading', function (result) {
    console.log("Total A-Z classes are" + result.value.length) 
    // callback.call(self, result);
});
      },
        verifyPageTitle: function() {
            return this.waitForElementPresent('@ClassScheduleTitle')
		 this.assert.containsText('@ClassScheduleTitle', 'Class Schedule');
                
        },
           listTodayClasses: function() {
            return this.waitForElementPresent('div h2.mb10.classesHeading');
            this.api.elements('css selector', 'div h2.mb10.classesHeading', function (result) {
              for(var i=0;i<result.value.length;i++){
                 var elementCss = this.assert.containsText('div h2.mb10.classesHeading:nth-of-type(' + (i+1) + ')',classesdata[i].TodayClasses);
                  
                    
                     
                  console.log(elementCss);
                  }
                });
                
        }
 }]
};