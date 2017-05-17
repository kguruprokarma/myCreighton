var datareader = require('./CommonDataReader.js');

function returnProfileData(){
  return  datareader.ExcelDataReader('./TestData/profileData.xls');
}
function returnLoginData(){
    return  datareader.ExcelDataReader('./TestData/test.xls');
}
function returnClassesData(){
    return  datareader.ExcelDataReader('./TestData/ClassesData.xls');
}
module.exports = {
    returnProfileData: returnProfileData,
    returnLoginData : returnLoginData,
    returnClassesData : returnClassesData
}

