import moment from 'moment';
import 'moment-timezone';
import io from 'socket.io-client';
import { sortBy } from 'lodash';
import * as CommonConstants from '../constants/commonConstants';
import * as urlConstants from '../constants/urlConstants';
import { translateText } from './translate';
import classesApi from '../middleware/classes/api';
import EventListApi from '../middleware/events/api';
import SpaLogApi from '../middleware/uilog/api';

export const SocketSingleton = (function () {
  let instance;
 
  function createInstance() {
    const socket = io.connect(urlConstants.NOTIFICATION_URL, { autoConnect: false, reconnection: true, multiplex: true });
    return socket;
  }
 
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
/*Data sort method is used to sort the array items in asending or decending order*/
export const dataSort = (dataArray, key, order) => {
  const data = dataArray;
  const sortByKey = key;
  const sortOrder = order || CommonConstants.SORT_CLASS;
  const sortedData = (sortOrder === CommonConstants.SORT_CLASS) ? sortBy(data, [sortByKey]) : sortBy(data, [sortByKey]).reverse();
  return sortedData;
};

/* Conver 24 hrs format time to 12 hrs format time */
export const convertTo24Format = (time) => {
  if (!time) return translateText('common:COMMON_NA');

  let hours = time.substring(0, 2);
  let min = time.substring(2, 4);
  if (hours < 12) {
    hours = min <= '00' ? `${hours}` : `${hours}`;
    hours = hours < '10' ? `${hours.substring(1, 2)}:${min}` : `${hours}:${min}`;
    return `${hours} am`;
  }
  hours = hours - 12;
  hours = hours === 0 ? 12 : hours;
  min = `:${min}`;
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
  if (!schedules) return translateText('common:COMMON_NA');
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const daysIndex = { 'U': 0, 'M': 1, 'T': 2, 'W': 3, 'R': 4, 'F': 5, 'S': 6 };
  const tempSchedules = schedules.split('-');
  const currentWeekStartDate = moment().startOf('week').toDate();
  const classSchedules = [];
  for (let i = 0; i < tempSchedules.length; i++) {
    const tempPushDate = {};
    if (i === 0) {
      tempPushDate.date = moment(currentWeekStartDate).add(daysIndex[tempSchedules[i].trim()] + 7, CommonConstants.MOMENT_DAYS).toDate();
    } else {
      tempPushDate.date = moment(currentWeekStartDate).add(daysIndex[tempSchedules[i].trim()], CommonConstants.MOMENT_DAYS).toDate();
    }
    classSchedules.push(tempPushDate);
  }

  classSchedules.sort((a, b) => {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c - d;
  });
  for (let i = 0; i < tempSchedules.length; i++) {
    classSchedules[i].day = days[daysIndex[tempSchedules[i].trim()]];
  }
  return (classSchedules && classSchedules.length > 0) ? classSchedules : '';
};

export const todayHeader = () => {
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const months = [translateText('common:COMMON_JAN'), translateText('common:COMMON_FEB'), translateText('common:COMMON_MAR'), translateText('common:COMMON_APR'), translateText('common:COMMON_MAY'), translateText('common:COMMON_JUNE'), translateText('common:COMMON_JULY'), translateText('common:COMMON_AUG'), translateText('common:COMMON_SEPT'), translateText('common:COMMON_OCT'), translateText('common:COMMON_NOV'), translateText('common:COMMON_DEC')];
  const today = new Date();
  return `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}`;
};

// Filter fot today's class schedule
export const filterTodaysClassSchedule = (schedule) => {
  const days = { 0: 'U', 1: 'M', 2: 'T', 3: 'W', 4: 'R', 5: 'F', 6: 'S' };
  const daysArray = [CommonConstants.DAY_SUNDAY, CommonConstants.DAY_MONDAY, CommonConstants.DAY_TUESDAY, CommonConstants.DAY_WEDNESDAY, CommonConstants.DAY_THURSDAY, CommonConstants.DAY_FRIDAY, CommonConstants.DAY_SATURDAY];
  const currentDate = moment().toDate();
  const today = days[moment(currentDate).get('day')];
  const onlineClassesArray = [];

  if (!schedule) return schedule;
  const scheduleTodayArray = [];
  schedule.map((item) => {
    const onlineItems = item;
    if (onlineItems.class_building_code === CommonConstants.ONLINE_CLASSES) {
      onlineItems.day = CommonConstants.ONLINE_CLASSES_HEADER;
      onlineItems.class_begin_time = '';
      onlineItems.class_end_time = null;
      onlineItems.class_schedule = null;
      onlineClassesArray.push(onlineItems);
    }
    const tempItem = JSON.parse(JSON.stringify(item));
    if (item.class_schedule !== null && item.class_schedule !== '') {
      if (item.class_schedule.indexOf(today) !== -1) {
        const nextDateArray = getScheduledNextDate(tempItem.class_schedule);
        for (let i = 0; i < nextDateArray.length; i++) {
          const requiredDay = daysArray.indexOf(nextDateArray[i].day);
          const currentDay = moment(currentDate).get('day');
          if (requiredDay === currentDay) {
            tempItem.nextDate = moment(nextDateArray[i].date).format('MMM DD');
          }
        }
        if (item.class_begin_time !== null && item.class_end_time !== null && item.class_schedule !== null) {
          tempItem.day = todayHeader();
          scheduleTodayArray.push(tempItem);
          return true;
        }
      }
    }
    return false;
  });
  scheduleTodayArray.unshift(...onlineClassesArray);
  return scheduleTodayArray;
};

// Convert DueDate from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z

export const convertDueDateTimeStamp = (timeStamp) => {
  if (!timeStamp) return translateText('common:COMMON_NA');

  const formattedDT = moment(timeStamp).format('HHmm');
  return convertTo24Format(formattedDT);
};
// Convert date from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z
export const convertDateFromTimeStamp = (timeStamp) => {
  if (!timeStamp) return translateText('common:COMMON_NA');

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

export const createTimeStampForDueTime = (classObj) => {
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const classObject = classObj;
  for (let day = 0; day < 8; day++) {
    const getCurrentDay = moment().tz(CommonConstants.MOMENT_AMERICA_CHICAGO_TIMEZONE).add(day, CommonConstants.MOMENT_DAYS)._d;
    if (days[getCurrentDay.getDay()] === classObject.day) {
      let hours = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(0, 2) : 0);
      const minutes = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(-2) : 0);
      if (moment(moment()._d).tz(CommonConstants.MOMENT_AMERICA_CHICAGO_TIMEZONE).isDST()) {
        hours = hours + 5;
      } else {
        hours = hours + 6;
      }
      const UTCtimeStampWithZeroTime = moment.utc([getCurrentDay.getFullYear(), getCurrentDay.getMonth(), getCurrentDay.getDate()]);
      const timeStampWithTime = moment.utc(moment(UTCtimeStampWithZeroTime).add(hours, 'hours').add(minutes, 'minutes')).format();
      classObject.timeStamp = moment(timeStampWithTime).utc().format();
      break;
    }
  }
  return classObject;
};

export const createTimeStamp1 = (data1) => {
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const classObject = data1;
  for (let day = 0; day < 8; day++) {
    const getCurrentDay = moment().tz(CommonConstants.MOMENT_AMERICA_CHICAGO_TIMEZONE).add(day, CommonConstants.MOMENT_DAYS)._d;
    if (days[getCurrentDay.getDay()] === classObject.day) {
      classObject.startDate = getCurrentDay;
      break;
    }
  }
  return classObject;
};

/*This method is for segregating  the items as per the week days and retuns an object*/
export const dataFilterAddingData = (dataArray) => {
  const data = dataArray;
  const newObject = {};
  const newArray = [];
  const newarrayProduced = [];
  const newScheduleItems = [];
  const onlineClassesArray = [];
  let count = 0;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const daysIndex = { 'U': 0, 'M': 1, 'T': 2, 'W': 3, 'R': 4, 'F': 5, 'S': 6 };
  data.map((singleitem) => {
    const item = singleitem;
    if (item.class_building_code === CommonConstants.ONLINE_CLASSES) {
      item.day = CommonConstants.ONLINE_CLASSES_HEADER;
      item.class_begin_time = null;
      item.class_end_time = null;
      item.class_schedule = null;
      onlineClassesArray.push(item);
    }
    if (!item.class_schedule) {
      return translateText('common:COMMON_NA');
    }
    const tempArray = getScheduledNextDate(item.class_schedule);
    for (let i = 0; i < tempArray.length; i++) {
      const selectedDate = moment(tempArray[i].date);
      let tempItem = JSON.parse(JSON.stringify(singleitem));
      tempItem.day = tempArray[i].day;
      tempItem.nextDate = selectedDate.format('MMM DD');
      tempItem = createTimeStampForDueTime(tempItem);
      tempItem = createTimeStamp1(tempItem);
      if (tempItem.class_begin_time !== null && tempItem.class_end_time !== null && item.class_schedule !== null) {
        newarrayProduced.push(tempItem);
      }
    }

    const scheduleList1 = item.class_schedule.split('-');
    scheduleList1.map((weekDay) => {
      item.day = days[daysIndex[weekDay.trim()]];
      const schedule = JSON.stringify(item);
      newScheduleItems.push(JSON.parse(schedule));
      return item;
    });

    //createTimeStamp1
    // adding duplicate schedule, if the schedule occur more than once in a week
    const scheduleList = item.class_schedule.split('-');
    scheduleList.map((weekDay) => {
      item.day = days[daysIndex[weekDay.trim()]];
      const schedule = JSON.stringify(item);
      newScheduleItems.push(JSON.parse(schedule));
      return item;
    });

    return item;
  });

  //Below for loop is for filtering the classes day wise
  count = newarrayProduced.length;
  for (let i = 0; i < count; i++) {
    const item = newarrayProduced[i];
    if (!newObject[item.day]) {
      newObject[item.day] = [];
    }
    newObject[item.day].push(item);
  }
  //Below for loop is for showing empty clases under a day which does not have classes,
  //Ex: If Sunday has no classes, it should have empty data in newObject array.
  for (let i = 0; i < 7; i++) {
    const item = days[i];
    if (!newObject[item]) {
      newObject[item] = [];
    }
  }

  days.map((day) => {
    dataSort(newObject[day], CommonConstants.CLASS_BEGIN_TIME, CommonConstants.SORT_CLASS).map((dateTimeSortedData) => {
      newArray.push(dateTimeSortedData);
      return newArray;
    });
    return newArray;
  });

  newArray.unshift(...onlineClassesArray);

  return newArray;
};

export const addNextDate = (dataArray) => {
  const data = dataArray;
  const tempItem = JSON.parse(JSON.stringify(data));
  const today = new Date();
  tempItem.map((singleItem) => {
    const nextDateArray = getScheduledNextDate(singleItem.class_schedule);
    const item = singleItem;
    const mySchedules = item.class_schedule;
    if (!mySchedules) {
      item.nextDate = translateText('common:COMMON_NA');
      item.day = translateText('common:COMMON_NA');
      return item;
    }
    for (let i = 0; i < nextDateArray.length; i++) {
      if (nextDateArray[i].date > today) {
        item.nextDate = moment(nextDateArray[i].date).format('MMM DD');
        item.day = nextDateArray[i].day;
        break;
      }
    }
    return item;
  });
  return tempItem;
};


export const authUserDetails = () => {
  const userRole = localStorage.getItem('roleInfo');
  return userRole ? JSON.parse(localStorage.getItem('roleInfo')) : {};
};

export const datesCompare = (nextDate) => {
  const todayDate = moment().toDate();
  const APIDate = moment(nextDate).toDate();
  const todayTime = moment(todayDate).format('HH:mm');
  const APITime = moment(nextDate).format('HH:mm');
  if (APIDate === todayDate && (APITime > todayTime)) {
    return 1;
  } else if (todayDate < APIDate) return -1;
  return 0;
};

export const createTimeStamp = (dataArray) => {
  const data = dataArray;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const filterlist = data.map((singleclassObject) => {
    const classObject = singleclassObject;
    for (let day = 0; day < 8; day++) {
      if (days[(moment().add(day, CommonConstants.MOMENT_DAYS)._d).getDay()] === classObject.day) {
        const hours = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(0, 2) : 0);
        const minutes = parseInt(classObject.class_begin_time !== null ? classObject.class_begin_time.slice(-2) : 0);
        const newDateTimeStampWithoutTime = moment(moment().add(day, CommonConstants.MOMENT_DAYS)._d).format('LL');
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
  const seventhDay = moment().add(7, CommonConstants.MOMENT_DAYS)._d;
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
  return new Promise( /* executor */(resolve, reject) => {
    if (localStorage.getItem('classMasterCopy') === null || localStorage.getItem('assignmentMasterCopy') === null) {
      classesApi.getClassesDataByWeek(reqObj).then((classResponse) => {
        localStorage.setItem('classMasterCopy', JSON.stringify(classResponse.data.data));
        masterObj.classMasterCopy = classResponse.data.data;

        EventListApi.getEventsData(reqObj).then((assignmentResponse) => {
          localStorage.setItem('assignmentMasterCopy', JSON.stringify(assignmentResponse.data.data));
          masterObj.assignmentMasterCopy = assignmentResponse.data.data;
          setTimeout(() => {
            resolve(masterObj);
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
      setTimeout(() => {
        resolve(masterObj);
      }, 250);
    }
  });
};


export const sendSPALogs = (reqObj) => new Promise( /* executor */(resolve, reject) => {
  SpaLogApi.sendLog(reqObj).then(() => {
  })
    .catch((error) => {
      console.log('log error: ', error);
      reject(error);
    });
});

export const createAndSendLogs = (type, methodName, componentName) => {
  const logObj = {};
  const netId = localStorage.getItem('infos') ? JSON.parse(localStorage.getItem('infos')).data[0].netid : '';
  logObj.netId = netId;
  logObj.type = type;
  logObj.methodName = methodName;
  logObj.componentName = componentName;
  sendSPALogs(logObj);
};

export const getDueTimeString = (diffBetweenPresentTimeStampAndEventTimeStamp, differenceInDays) => {
  const days = (differenceInDays / 86400000) + 1;
  if (differenceInDays < 0) {
    const hours = Math.floor(diffBetweenPresentTimeStampAndEventTimeStamp / 3600000);
    const minutes = Math.ceil(((diffBetweenPresentTimeStampAndEventTimeStamp / 3600000) - hours) * 60);
    let timeTitle = CommonConstants.STARTS;
    if (hours > 0 && hours === 1) {
      timeTitle = `${timeTitle} ${hours} ${CommonConstants.HOUR}`;
    } else if (hours > 0) {
      timeTitle = `${timeTitle} ${hours} ${CommonConstants.HOURS}`;
    }
    if (minutes > 0 && minutes === 1) {
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
  const diffBetweenPresentTimeStampAndEventTimeStamp = (moment(timeStamp)._d) - (moment()._d);
  const differenceInDays = (moment([timeStampYear, timeStampMonth, timeStampDate])._d) - (moment([tomorrowDateSYear, tomorrowDateSMonth, tomorrowDate])._d);
  const daysOrTimeTitle = getDueTimeString(diffBetweenPresentTimeStampAndEventTimeStamp, differenceInDays);
  return daysOrTimeTitle;
};


export const showFeatureEvents = (apiDate, today) => {
  const APIDate = new Date(moment(apiDate).format('MMM D, YYYY'));
  const todayDate = new Date(moment(today).format('MMM D, YYYY'));
  const APITime = moment(apiDate).format('HH:mm');
  const todayTime = moment(today).format('HH:mm');
  if (APIDate >= todayDate) {
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

export const caldenderItemWithTwoDates = (calenderItem) => {
  const item = Object.assign({}, calenderItem);
  const date1 = moment(calenderItem.startdate)._d;
  const date2 = moment(calenderItem.enddate)._d;
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diff = diffDays;
  const calenderArray = [];

  for (let i = 1; i < diff; i++) {
    item.startdate = moment(moment(moment.utc(calenderItem.startdate).format()).add(i, CommonConstants.MOMENT_DAYS)).utc().format('YYYY-MM-DD');
    calenderArray.push(Object.assign({}, item));
  }
  item.startdate = moment(moment(moment.utc(calenderItem.startdate).format())).utc().format('YYYY-MM-DD');
  calenderArray.push(Object.assign({}, item));
  item.startdate = moment(moment(moment.utc(calenderItem.enddate).format())).utc().format('YYYY-MM-DD');
  calenderArray.push(Object.assign({}, item));
  return calenderArray;
};

export const caldenderEventsTimeStamp = (calenderItems) => {
  let items = calenderItems;
  items = items.map((calenderItem) => {
    const item = calenderItem;
    let counter = 1;
    const timerArray = [[0, 0], [23, 60]];
    if (!(calenderItem.starttime && calenderItem.endtime)) {
      counter = 2;
    }
    for (let i = 0; i < counter; i++) {
      const time = (calenderItem.starttime && calenderItem.endtime) ? calenderItem.starttime.split(':') : timerArray[i];
      let hours = parseInt(time[0]);
      const minutes = parseInt(time[1]);
      if (moment(moment()._d).tz(CommonConstants.MOMENT_AMERICA_CHICAGO_TIMEZONE).isDST()) {
        hours = hours + 5;
      } else {
        hours = hours + 6;
      }
      const timeStampWithZeroTime = moment(calenderItem.startdate)._d;
      const UTCtimeStampWithZeroTime = moment.utc([timeStampWithZeroTime.getFullYear(), timeStampWithZeroTime.getMonth(), timeStampWithZeroTime.getDate()]); const UTCtimeStampWithGivenTime = moment.utc(moment(UTCtimeStampWithZeroTime).add(hours, 'hours').add(minutes, 'minutes')).format();
      if (i === 0) {
        item.timeStamp = moment(UTCtimeStampWithGivenTime).utc().format();
      } else if (!(calenderItem.starttime && calenderItem.endtime) && i === 1) {
        item.timeStamp1 = moment(UTCtimeStampWithGivenTime).utc().format();
      }
    }
    return item;
  });
  return items;
};

export const dynamicUrlGeneration = (url, queryParamsArray) => {
  if (url || (queryParamsArray && queryParamsArray.length > 0)) {
    let queryParamsStr = '';
    let href = '';
    if (queryParamsArray && queryParamsArray.length > 0) {
      queryParamsStr = queryParamsArray.join('&');
      queryParamsStr = encodeURI(queryParamsStr);
      href = url + queryParamsStr;
    } else if (url) {
      href = url;
    }
    window.open(href, '_blank');
  }
};
