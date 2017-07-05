###Breif information about myCreighton automation project###

Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the w3c WebDriver API.
Below is the techincal stack used in this automation project.
Nightwatch as Automated Testing framework
Node.js for java script runtime
selenium 3.3.1 for browser automation.
npm xls for reading test data from excel file.
Allure reports for generating reports.

Steps to download project from git and run the tests.

1)Clone mycuautomation project from  repository using below repo URL. It creates mycreighton folder in that we have automation code.
	git clone -b AutomationCode https://github.com/kguruprokarma/myCreighton.git
2)Then change directory into mycuautomation folder using below command 
	cd  mycuautomation
3)Below command should be run in order to install the nodule modules.
   npm install
4)run below command to execute the tests 
   npm run automation-test
5)run below command for generating the reports : 
    npm run allurereports

