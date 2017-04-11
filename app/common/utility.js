import moment from 'moment';
import { sortBy } from 'lodash';
import * as CommonConstants from '../constants/commonConstants';
import * as urlConstants from '../constants/urlConstants';
import { translateText } from './translate';
import classesApi from '../middleware/classes/api';
import EventListApi from '../middleware/events/api';

/*Data sort method is used to sort the array items in asending or decending order*/
export const dataSort = (dataArray, key, order) => {
  const data = dataArray;
  const sortByKey = key;
  const sortOrder = order || CommonConstants.SORT_CLASS;
  const sortedData = (sortOrder === CommonConstants.SORT_CLASS) ? sortBy( data, [sortByKey]) : sortBy( data, [sortByKey]).reverse();
  return sortedData;
};

/* Conver 24 hrs format time to 12 hrs format time */
export const convertTo24Format = (time) => {
  if (!time) return 'N/A';

  let hours = time.substring(0, 2);
  let min = time.substring(2, 4);
  if (hours < 12) {
    hours = min <= '00' ? `${hours}` : `${hours}:${min}`;
    hours = hours < '10' ? `${hours.substring(1, 2)}` : `${hours}`;
    return `${hours} am`;
  }
  hours = hours - 12;
  hours = hours === 0 ? 12 : hours;
  min = min === '00' ? '' : `:${min}`;
  return `${hours}${min} pm`;
};

/* Get schedule day for scheduler */
export const scheduleDays = (schedule) => {
  if (!schedule) return '';

  const scheduleDay = schedule.replace(/-/gi, '');
  const days = { M: 'Mon', T: 'Tue', W: 'Wed', R: 'Thu', F: 'Fri', S: 'Sat', U: 'Sun' };
  if (scheduleDay.length > 1) {
    return scheduleDay;
  }
  return days[scheduleDay];
};

/* To get the next date for schedule: M-W-F */
export const getScheduledNextDate = (schedules) => {
  if (!schedules) return 'N/A';
  const mySchedules = schedules.replace(/\-/g, '');
  const days = { 'U': 0, 'M': 1, 'T': 2, 'W': 3, 'R': 4, 'F': 5, 'S': 6 };
  const today = new Date();
  const currentDay = today.getDay();
 
  const classSchedules = mySchedules.split('').map((schedule) => {
    const returnDate = new Date();
    let daysToAdd = 0;
    if (currentDay > days[schedule]) {
      daysToAdd = (((7 + days[schedule]) - returnDate.getDay()) % 7 );
    } else {
      daysToAdd = days[schedule] - currentDay;
    }
    returnDate.setDate(returnDate.getDate() + daysToAdd);
    return returnDate.toLocaleString();
  });
  return moment(classSchedules.sort()[0]).format('DD MMM');
};

// Filter fot today's class schedule
export const filterTodaysClassSchedule = (schedule) => {
  const days = { 0: 'U', 1: 'M', 2: 'T', 3: 'W', 4: 'R', 5: 'F', 6: 'S' };
  const today = days[new Date().getDay()];

  if (!schedule) return schedule;
  const scheduleTodayArray = [];
  schedule.map((item) => {
    if (item.class_schedule !== null && item.class_schedule !== '') {
      if (item.class_schedule.indexOf(today) !== -1) {
        return scheduleTodayArray.push(item);
      }
    }
    return false;
  });
  return scheduleTodayArray;
};

// Convert DueDate from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z

export const convertDueDateTimeStamp = (timeStamp) => {
  if (!timeStamp) return 'N/A';

  const formattedDT = moment(timeStamp).format('HHmm');
  return convertTo24Format(formattedDT);
};
// Convert date from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z
export const convertDateFromTimeStamp = (timeStamp) => {
  if (!timeStamp) return 'N/A';

  return moment(timeStamp).format('MMM DD, YYYY');
};

/* remove the \n \r in assignment description */
export const htmlEncoding = (htmlText) => {
  if (!htmlText) return '';
  let htmlEncodedText = htmlText;
  htmlEncodedText = htmlEncodedText.replace(/\\n/gi, '');
  htmlEncodedText = htmlEncodedText.replace(/\\r/gi, '');

  // update the url
  htmlEncodedText = htmlEncodedText.replace(/href="/gi, `href="${urlConstants.BLUE_LINE}`);
  return htmlEncodedText;
};

/* Encode the string  "sis_source_id" for url routing purpose */
export const stringEncodeURIComponent = (data) => {
  if (!data) return data;
  return encodeURIComponent(data);
};

/* Encode the array of "sis_source_id" for url routing purpose */
export const convertEncodeURIComponent = (data) => {
  if (!data) return data;
  const encodeArray = data.map((singleItem) => {
    const item = singleItem;
    item.sis_source_id = encodeURIComponent(item.sis_source_id);
    return item;
  });
  return { 'data': encodeArray };
};

/*Data sort method is used to sort the array items in time sequence*/
export const dateTime = (dataArray, startTime, endTime /* order*/) => {
  const data = dataArray;
  //const sortByKey = key;
  //const sortOrder = order || CommonConstants.SORT_CLASS;
  const sortedData = [...data].sort((a, b) => {
    const timePart1 = convertTo24Format(a[startTime]);
    const timePart2 = convertTo24Format(b[endTime]);
    const amOrPmOfTime1 = timePart1.toLowerCase().indexOf('a') > 0 ? 'am' : 'pm';
    const amOrPmOfTime2 = timePart2.toLowerCase().indexOf('a') > 0 ? 'am' : 'pm';
    const time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
    const time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
    const time1Hours = time1Spliting[0];
    const time2Hours = time2Spliting[0];
    const time1HasMinutes = time1Spliting[1] || '00';
    const time2HasMinutes = time2Spliting[1] || '00';
    const time1 = `${time1Hours}:${time1HasMinutes} ${amOrPmOfTime1}`;
    const time2 = `${time2Hours}:${time2HasMinutes} ${amOrPmOfTime2}`;
    return new Date(`2017/01/01 ${time1}`) - new Date(`2017/01/01 ${time2}`);
  });
  return sortedData;
};

/*This method is for segregating  the items as per the week days and retuns an object*/
export const dataFilterAddingData = (dataArray) => {
  const data = dataArray;
  const newObject = {};
  const newArray = [];
  const newScheduleItems = [];
  let count = 0;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const daysIndex = { 'U': 0, 'M': 1, 'T': 2, 'W': 3, 'R': 4, 'F': 5, 'S': 6 };
  const filterlist = data.map((singleitem) => {
    const item = singleitem;
    const year = new Date().getFullYear();
    const date = new Date(`${getScheduledNextDate(item.class_schedule)},${year}`);
    const day = days[date.getDay()];
    item.day = day;

    // adding duplicate schedule, if the schedule occur more than once in a week
    const scheduleList = item.class_schedule.split('-');
    scheduleList.map((weekDay) => {
      item.day = days[daysIndex[weekDay]];
      const schedule = JSON.stringify(item);
      newScheduleItems.push(JSON.parse(schedule));
      return item;
    });

    return item;
  });

  count = newScheduleItems.length;
  for (let i = 0; i < count; i++) {
    const item = newScheduleItems[i];
    if (!newObject[item.day]) {
      newObject[item.day] = [];
    }
    newObject[item.day].push(item);
  }

  for (let i = 0; i < 7; i++) {
    const item = days[i];
    if (!newObject[item]) {
      newObject[item] = [];
    }
  }

  days.map((day) => {
    //removed 'index' from the 'map((data, index)' because it is throwing error: 'index' is defined but never used 
    dateTime(newObject[day], 'class_begin_time', 'class_end_time', CommonConstants.SORT_CLASS).map((dateTimeSortedData) => {
      newArray.push(dateTimeSortedData);
      return newArray;
    });
    return newArray;
  });

  return newArray;
};

export const todayHeader = () => {
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const months = [translateText('common:COMMON_JAN'), translateText('common:COMMON_FEB'), translateText('common:COMMON_MAR'), translateText('common:COMMON_APR'), translateText('common:COMMON_MAY'), translateText('common:COMMON_JUNE'), translateText('common:COMMON_JULY'), translateText('common:COMMON_AUG'), translateText('common:COMMON_SEPT'), translateText('common:COMMON_OCT'), translateText('common:COMMON_NOV'), translateText('common:COMMON_DEC')];
  const today = new Date();
  return `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}`;
};

export const authUserDetails = () => localStorage.getItem('roleInfo') ? JSON.parse(localStorage.getItem('roleInfo')) : {};

// export const SEGREGATEDATA = (list) => {
//   const newArray = [];
//   for (const key in list) {
//     const arr = list[key];
//     const keys = Object.keys(arr);
//     for (let j = 0; j < keys.length; j++) {
//       var obj;
//       const dataSize = arr[keys[j]].length;
//       if (dataSize > 0) {
//         const data = arr[keys[j]];
//         for (let i = 0; i < dataSize; i++) {
//           obj = data[i];
//           obj.type = keys[j];
//           newArray.push(obj);
//         }
//       }
//     }
//   }
//   return newArray;
// };

export const datesCompare = (currectDate, nextDate) => {
  const currentdateTime = moment(currectDate, 'DD/MM/YYYY').toDate();
  const nextdateTime = moment(new Date(nextDate), 'DD/MM/YYYY').toDate();
  if (currentdateTime > nextdateTime) return 1;
  else if (currentdateTime < nextdateTime) return -1;
  return 0;
};

// export const dateSort = (dataArray, key, dueDate, startTime, dueTime) => {
//   const date = dataArray;
//   const startDateSort = key;
//   const dueDateSort = dueDate;
//   const sortedData = date.sort((a, b) => {
//     let date1;
//     let date2;
//     if (a[startDateSort] === undefined ? date1 = new Date(a[dueDateSort]) : date1 = new Date(a[startDateSort]));
//     if (b[startDateSort] === undefined ? date2 = new Date(b[dueDateSort]) : date2 = new Date(b[startDateSort]));
//     if (date1.toDateString() === date2.toDateString()) {
//       let timePart1;
//       let timePart2;
//       if (a[startTime] === undefined ? timePart1 = a[dueTime] : timePart1 = a[startTime]);
//       if (b[startTime] === undefined ? timePart2 = b[dueTime] : timePart2 = b[startTime]);
//       const amOrPmOfTime1 = timePart1.toLowerCase().indexOf('a') > 0 ? 'am' : 'pm';
//       const amOrPmOfTime2 = timePart2.toLowerCase().indexOf('a') > 0 ? 'am' : 'pm';
//       const time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
//       const time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
//       const time1Hours = time1Spliting[0];
//       const time2Hours = time2Spliting[0];
//       const time1HasMinutes = time1Spliting[1] || '00';
//       const time2HasMinutes = time2Spliting[1] || '00';
//       const time1 = `${time1Hours}:${time1HasMinutes} ${amOrPmOfTime1}`;
//       const time2 = `${time2Hours}:${time2HasMinutes} ${amOrPmOfTime2}`;
//       date1 = new Date(`2017/01/01 ${time1}`);
//       date2 = new Date(`2017/01/01 ${time2}`);
//       return date1 - date2;
//     }
//     return date1 - date2;
//   });
//   return sortedData;
// };

export const createTimeStamp = (dataArray) => {
  const data = dataArray;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const filterlist = data.map((singleclassObject) => {
    const classObject = singleclassObject;
    for (let day = 0; day < 8; day++) {
      if (days[(moment().add(day, 'days')._d).getDay()] === classObject.day) {
        const hours = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(0, 2) : 0);
        const minutes = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(-2) : 0);
        const newDateTimeStampWithoutTime = moment(moment().add(day, 'days')._d).format('LL');
        const timeStampWithTime = new Date(newDateTimeStampWithoutTime).setMinutes((hours * 60) + minutes);
        const timeStampString = new Date(timeStampWithTime).toString();
        classObject.timeStamp = new Date(timeStampString);
        break;
      }
    }
    return classObject;
  });
  return filterlist;
};

export const filterSevenDaysTimeStampsFromNow = (dataArray) => {
  const data = dataArray;
  const today = moment()._d;
  const seventhDay = moment().add(7, 'days')._d;
  const filterlist = [];
  data.map((singleAssignmentObject) => {
    const assignmentObject = singleAssignmentObject;
    assignmentObject.timeStamp = assignmentObject.assign_due === null ? null : new Date(assignmentObject.assign_due);
    if (assignmentObject.timeStamp !== null && assignmentObject.timeStamp >= today && assignmentObject.timeStamp <= seventhDay) {
      if (assignmentObject.submission_types === CommonConstants.QUIZ_SUBMISSION_TYPES) {
        assignmentObject.type = CommonConstants.EVENT_TYPE_QUIZ;
      } else {
        assignmentObject.type = CommonConstants.EVENT_TYPE_ASSIGNMENTS;
      }
      filterlist.push(assignmentObject);
    }
    return filterlist;
  });
  return filterlist;
};

export const telephoneCheck = (phoneNumber, separator) => {
  const regExpression = (/(\d{3})(\d{3})(\d{4})/);
  if (phoneNumber) {
    const concat = `$1${separator}$2${separator}$3`;
    return phoneNumber.replace(/[^\d]/g, '')
      .replace(regExpression, concat);
  }
  return '';
};

export const addedTypeField = (dataArray) => {
  const data = dataArray;
  const filterlist = [];
  data.map((singleAssignmentObject) => {
    const assignmentObject = singleAssignmentObject;
    assignmentObject.timeStamp = assignmentObject.assign_due === null ? null : new Date(assignmentObject.assign_due);
    if (assignmentObject.timeStamp !== null) {
      if (assignmentObject.submission_types === CommonConstants.QUIZ_SUBMISSION_TYPES) {
        assignmentObject.type = CommonConstants.EVENT_TYPE_QUIZ;
      } else {
        assignmentObject.type = CommonConstants.EVENT_TYPE_ASSIGNMENTS;
      }
      filterlist.push(assignmentObject);
    }
    return filterlist;
  });
  return filterlist;
};

export const browserTitle = (titleKey) => {
  document.title = `${titleKey} - ${CommonConstants.MY_CREIGHTON}`;
};

export const getClassAndAssignmentAPIData = (reqObj) => {
  const masterObj = {};
  return new Promise( /* executor */ (resolve, reject) => {
    if (localStorage.getItem('classMasterCopy') === null || localStorage.getItem('assignmentMasterCopy') === null) {
      classesApi.getClassesDataByWeek(reqObj).then((classResponse) => {
        localStorage.setItem('classMasterCopy', JSON.stringify(classResponse.data.data));
        masterObj.classMasterCopy = classResponse.data.data;

        EventListApi.getEventsData(reqObj).then((assignmentResponse) => {
          localStorage.setItem('assignmentMasterCopy', JSON.stringify(assignmentResponse.data.data));
          masterObj.assignmentMasterCopy = assignmentResponse.data.data;
          setTimeout( () => {
            resolve(masterObj); //Yay! Everything went well!
          }, 250);
        })
          .catch((error) => {
            console.log('error: ', error);
            reject(error);
          });
      })
        .catch((error) => {
          console.log('error: ', error);
          reject(error);
        });
    } else {
      masterObj.classMasterCopy = JSON.parse(localStorage.getItem('classMasterCopy'));
      masterObj.assignmentMasterCopy = JSON.parse(localStorage.getItem('assignmentMasterCopy'));
      setTimeout( () => {
        resolve(masterObj);
      }, 250);
    }
  });
};

export const getDueTimeString = (diffBetweenPresentTimeStampAndEventTimeStamp, differenceInDays) => {
  const days = (differenceInDays/86400000)+1;
  if (differenceInDays < 0 ) {
    const hours = Math.floor(diffBetweenPresentTimeStampAndEventTimeStamp/3600000);
    const minutes = Math.ceil(((diffBetweenPresentTimeStampAndEventTimeStamp/3600000)- hours)*60);
    let timeTitle = CommonConstants.STARTS;
    if (hours > 0 && hours === 1 ) {
      timeTitle = `${timeTitle} ${hours} ${CommonConstants.HOUR}`;
    } else if (hours > 0) {
      timeTitle = `${timeTitle} ${hours} ${CommonConstants.HOURS}`;
    }
    if (minutes > 0 && minutes === 1 ) {
      timeTitle = `${timeTitle} ${minutes} ${CommonConstants.MINUTE}`;
    } else if (minutes > 0) {
      timeTitle = `${timeTitle} ${minutes} ${CommonConstants.MINUTES}`;
    }
    return timeTitle;
  } else if (days === 1) {
    return CommonConstants.TOMORROW;
  }
  return `${days} ${CommonConstants.DAYS}`;
};

export const getDueTime = (timeStampData) => {
  const timeStamp = timeStampData;
  const timeStampDate = moment(timeStamp).date();
  const timeStampMonth = moment(timeStamp).month();
  const timeStampYear = moment(timeStamp).year();
  const tomorrowDate = moment().add(1, CommonConstants.DAYS).date();
  const tomorrowDateSMonth = moment().add(1, CommonConstants.DAYS).month();
  const tomorrowDateSYear = moment().add(1, CommonConstants.DAYS).year();
  const diffBetweenPresentTimeStampAndEventTimeStamp = (moment(timeStamp)._d)-(moment()._d);
  const differenceInDays = (moment([timeStampYear, timeStampMonth, timeStampDate])._d)-(moment([tomorrowDateSYear, tomorrowDateSMonth, tomorrowDate])._d);
  const daysOrTimeTitle = getDueTimeString(diffBetweenPresentTimeStampAndEventTimeStamp, differenceInDays);
  return daysOrTimeTitle;
};


export const showFeatureEvents = (apiDate, today) => {
  const APIDate = new Date(moment(apiDate).format('MMM D, YYYY'));
  const todayDate = new Date(moment(today).format('MMM D, YYYY'));
  const APITime = moment(apiDate).format('HH:mm');
  const todayTime = moment(today).format('HH:mm');
  if (APIDate >= todayDate ) {
    if (APIDate.toString() === todayDate.toString() && APITime < todayTime) {
      return 0;
    } 
    return 1;
  } 
  return 0;
};

export const getParentorGuardian = (dateOfBirth) => {
  if (dateOfBirth !== null) {
    const date = moment(dateOfBirth).date();
    const year = moment(dateOfBirth).year();
    const month = moment(dateOfBirth).month();
    const todaySDate = moment().date();
    const todaySYear = moment().year();
    const todaySMonth = moment().month();
    if (todaySYear - year > 19) {
      return CommonConstants.STUDENT_GUARDIAN;
    } else if (todaySYear - year === 19) {
      if (todaySMonth > month) {
        return CommonConstants.STUDENT_GUARDIAN;
      } else if (todaySMonth === month && todaySDate >= date) {
        return CommonConstants.STUDENT_GUARDIAN;
      }
    }
  }
  return CommonConstants.STUDENT_PARENT;
};

export const scrollToPosition = (positionId) => document.getElementById(positionId).scrollIntoView();