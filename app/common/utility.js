import * as CommonConstants from '../constants/commonConstants';
import * as _ from 'lodash';
/*Data sort method is used to sort the array items in asending or decending order*/
export const DataSort = (dataArray, key, order) => {
  let data = dataArray;
  let sortByKey = key;
  let sortOrder = order || CommonConstants.SORT_CLASS;
  let sortedData = (sortOrder === CommonConstants.SORT_CLASS) ? (_.sortBy(data, ['type', 'name'], [sortOrder, sortByKey]))
   : (_.sortBy(data, ['type', 'name'], [sortOrder, sortByKey]));
  return sortedData;
};

/*Data sort method is used to sort the array items in time sequence*/
export const DataTime = (dataArray, key, order) => {
  let data = dataArray;
  let sortByKey = key;
  let sortOrder = order || CommonConstants.SORT_CLASS;
  let sortedData = [...data].sort((a, b) => {
    let timePart1 = a[key].split('-')[0];
    let timePart2 = b[key].split('-')[0];
    let amOrPmOfTime1 = timePart1.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
    let amOrPmOfTime2 = timePart2.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
    let time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
    let time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
    let time1Hours = time1Spliting[0];
    let time2Hours = time2Spliting[0];
    let time1HasMinutes = time1Spliting[1] || '00';
    let time2HasMinutes = time2Spliting[1] || '00';
    let time1 = time1Hours + ":" + time1HasMinutes + " " + amOrPmOfTime1;
    let time2 = time2Hours + ":" + time2HasMinutes + " " + amOrPmOfTime2;
    return new Date('2017/01/01 ' + time1) - new Date('2017/01/01 ' + time2);
  });
  return sortedData;
};

/*This method is for segregating  the items as per the week days and retuns an object*/ 
export const DataFilterAddingData = (dataArray) => {
  let data = dataArray;
  let newObject = {};
  let newArray = [];
  let count;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let filterlist = data.map(function(item) {
    let year = new Date().getFullYear();
    let date = new Date(item.date + "," + year);
    let day = days[date.getDay()];
    item.day = day;
    return item;
  });

  count = filterlist.length;
  for(let i = 0; i < count; i++ ) {
    let item = filterlist[i];
    if(!newObject[item.day]) {
      newObject[item.day] = [];
    }
    newObject[item.day].push(item);
  }

  for(let i = 0; i < 7; i++ ) {
    let item = days[i];
    if(!newObject[item]) {
      newObject[item] = [];
    }
  }
  
  days.map((day) => {
    //removed 'index' from the 'map((data, index)' because it is throwing error: 'index' is defined but never used 
    DataTime(newObject[day], 'time', CommonConstants.SORT_CLASS).map((data) => {
      newArray.push(data);
    });
  });
  
  return newArray;
};

export const todayHeader = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let today = new Date();
  return days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate();
};

export const AuthUserDetails = () => {
  return localStorage.roleInfo?JSON.parse(localStorage.roleInfo):{};
};

export const authUserDetails = () => {
  return localStorage.roleInfo?JSON.parse(localStorage.roleInfo):{};
};

export const SEGREGATEDATA = (list) => {
  let newArray = [];
  for (var key in list) {
    var arr = list[key];
    let keys = Object.keys(arr);
    for (var j = 0; j < keys.length; j++) {
      var obj;
      let dataSize = arr[keys[j]].length;
      if (dataSize > 0) {
        var data = arr[keys[j]];
        for (var i = 0; i < dataSize; i++) {
          obj = data[i];
          obj.type = keys[j];
          newArray.push(obj)
        }
      }
    }
  }
  return newArray;
};

export const DATESORT = (dataArray, key, dueDate, startTime, dueTime) => {
  let date = dataArray;
  let startDateSort = key;
  let dueDateSort = dueDate;
  let sortedData = date.sort(function (a, b) {
    var date1;
    var date2;
    if (a[startDateSort] === undefined ? date1 = new Date(a[dueDateSort]) : date1 = new Date(a[startDateSort]));
    if (b[startDateSort] === undefined ? date2 = new Date(b[dueDateSort]) : date2 = new Date(b[startDateSort]));
    if (date1.toDateString() === date2.toDateString()) {
      let timePart1;
      let timePart2;
      if (a[startTime] === undefined ? timePart1 = a[dueTime] : timePart1 = a[startTime]);
      if (b[startTime] === undefined ? timePart2 = b[dueTime] : timePart2 = b[startTime]);
      let amOrPmOfTime1 = timePart1.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
      let amOrPmOfTime2 = timePart2.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
      let time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
      let time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
      let time1Hours = time1Spliting[0];
      let time2Hours = time2Spliting[0];
      let time1HasMinutes = time1Spliting[1] || '00';
      let time2HasMinutes = time2Spliting[1] || '00';
      let time1 = time1Hours + ":" + time1HasMinutes + " " + amOrPmOfTime1;
      let time2 = time2Hours + ":" + time2HasMinutes + " " + amOrPmOfTime2;
      date1 = new Date('2017/01/01 ' + time1);
      date2 = new Date('2017/01/01 ' + time2);
      return date1 - date2
    } else {
      return date1 - date2
    }
  })
  return sortedData;
};
