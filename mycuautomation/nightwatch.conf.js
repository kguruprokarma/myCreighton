module.exports = 
{
  "src_folders" : ["tests"],
  "output_folders" : "./reports",
  "page_objects_path":"tests/pages",
  "globals_path": "./globals.js",

  "selenium" : {
    "start_process" : true,
    "server_path" : "bin/selenium-server-standalone-3.4.0.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    
    "cli_args" : {
    "webdriver.chrome.driver" : "bin/chromedriver.exe",
	   //"webdriver.ie.driver" : "bin/IEDriverServer.exe"
    "webdriver.gecko.driver" : "bin/geckodriver.exe"
    }
  },

  "test_settings" : {
    "default" : {
     "selenium_port"  : 4444,
     "selenium_host"  : "127.0.0.1",
     "silent": true,      
     "screenshots" : {
     "enabled" : false,
     "path" : "reports/screenshots"
      },
      "desiredCapabilities": {
         "browserName": "chrome",
         "javascriptEnabled": true,
         "acceptSslCerts": true
     }
    },

   "ie11" : {
     "desiredCapabilities": {
        "browserName": "internet explorer",
        "javascriptEnabled": true,
        "acceptSslCerts": true 
    }
  }, 
  "firefox":{
     "desiredCapabilities": {
        "browserName": "firefox", 
        "marionette": true,  
    }     
  },  
 }
};

