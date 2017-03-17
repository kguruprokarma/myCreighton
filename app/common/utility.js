
import * as _ from 'lodash';
import Moment from 'moment';
import { translateText } from './translate';
import * as CommonConstants from '../constants/commonConstants';
import * as urlConstants from '../constants/urlConstants';

/*Data sort method is used to sort the array items in asending or decending order*/
export const DATASORT = (dataArray, key, order) => {
  const data = dataArray;
  const sortByKey = key;
  const sortOrder = order || CommonConstants.SORT_CLASS;
  const sortedData = (sortOrder === CommonConstants.SORT_CLASS) ? ([...data].sort((a, b) => a[sortByKey] > b[sortByKey])) : ([...data].sort((a, b) => a[sortByKey] < b[sortByKey]));
  return sortedData;
};

/* Conver 24 hrs format time to 12 hrs format time */
export const ConvertTo24Format = (time) => {
  if (time === null || time === '') {
    return '';
  }
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
export const ScheduleDays = (schedule) => {
  if (schedule === null || schedule === '') {
    return '';
  }
  const scheduleDay = schedule.replace(/-/gi, '');
  const days = {M: 'Mon', T: 'Tue', W: 'Wed', R: 'Thu', F: 'Fri', S: 'Sat', U: 'Sun'};
  if (scheduleDay.length > 1) {
    return scheduleDay;
  }
  return days[scheduleDay];
};

/* To get the next date for schedule: M-W-F */
export const GetScheduledNextDate = (schedules) => {
  if (!schedules) return 'N/A';
  let mySchedules = schedules.replace(/\-/g, '');
  const days = { 'U': 0, 'M': 1, 'T': 2, 'W': 3, 'R': 4, 'F': 5, 'S': 6 };
  const today = new Date();
  const currentDay = today.getDay();
  const hasSunday = schedules.indexOf('U') !== -1;
  mySchedules = mySchedules.replace('U', '');

  const classSchedules = mySchedules.split('').map((schedule) => {
    const returnDate = new Date();
    let daysToAdd = 0;
    if (currentDay > days[schedule]) {
      daysToAdd = 7 - currentDay + days[schedule];
    } else {
      daysToAdd = days[schedule] - currentDay;
    }
    returnDate.setDate(returnDate.getDate() + daysToAdd);
    return returnDate.toLocaleString();
  });

  if (hasSunday) {
    const returnDate = new Date();
    if (currentDay > 0) {
      const daysToAdd = 7 - currentDay;
      returnDate.setDate(returnDate.getDate() + daysToAdd);
    }
    classSchedules.push(returnDate.toLocaleString());
  }

  return Moment(classSchedules.sort()[0]).format('DD MMM');
};

// Convert DueDate from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z
export const ConvertDueDateTimeStamp = (timeStamp) => {
  if (timeStamp === null || timeStamp === '') {
    return 'N/A';
  }
  const formattedDT = Moment(timeStamp).format('HHmm');
  return ConvertTo24Format(formattedDT);
};
// Convert date from TimeStamp
// timeStamp = 2015-09-01T01:30:00.000Z
export const ConvertDateFromTimeStamp = (timeStamp) => {
  if (timeStamp === null || timeStamp === '') {
    return 'N/A';
  }
  return Moment(timeStamp).format('MMM DD, YYYY');
};

/* remove the \n \r in assignment description */
export const HtmlEncoding = (htmlText) => {
  let htmlEncodedText = htmlText;
  htmlEncodedText = htmlEncodedText.replace(/\\n/gi, '');
  htmlEncodedText = htmlEncodedText.replace(/\\r/gi, '');

  // update the url
  htmlEncodedText = htmlEncodedText.replace(/href="/gi, `href="${urlConstants.BLUE_LINE}`);
  return htmlEncodedText;
};

/* Encode the string  "sis_source_id" for url routing purpose */
export const StringEncodeURIComponent = (data) => {
  if(!data) return data;
  return encodeURIComponent(data);
};

/* Encode the array of "sis_source_id" for url routing purpose */
export const ConvertEncodeURIComponent = (data) => {
  if(!data) return data;
  let encodeArray =  data.data.map((item) => {    
    item.sis_source_id = encodeURIComponent(item.sis_source_id);
    return item;
  });
  return { 'data': encodeArray };
};

/*Data sort method is used to sort the array items in time sequence*/
export const DATETIME = (dataArray, startTime, endTime, order) => {
  const data = dataArray;
  //const sortByKey = key;
  const sortOrder = order || CommonConstants.SORT_CLASS;
  const sortedData = [...data].sort((a, b) => {
    const timePart1 = ConvertTo24Format(a[startTime]);
    const timePart2 = ConvertTo24Format(b[endTime]);
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
export const DATAFILTERADDINGDATA = (dataArray) => {
  const data = dataArray;
  const newObject = {};
  const newArray = [];
  let count;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];

  const filterlist = data.map((item) => {
    const year = new Date().getFullYear();
    const date = new Date(`${GetScheduledNextDate(item.class_schedule)},${year}`);
    const day = days[date.getDay()];
    item.day = day;
    return item;
  });

  count = filterlist.length;
  for (let i = 0; i < count; i++) {
    const item = filterlist[i];
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
    DATETIME(newObject[day], 'class_begin_time', 'class_end_time', CommonConstants.SORT_CLASS).map((data) => {
      newArray.push(data);
    });
  });

  return newArray;
};

export const todayHeader = () => {
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const months = [translateText('common:COMMON_JAN'), translateText('common:COMMON_FEB'), translateText('common:COMMON_MAR'), translateText('common:COMMON_APR'), translateText('common:COMMON_MAY'), translateText('common:COMMON_JUNE'), translateText('common:COMMON_JULY'), translateText('common:COMMON_AUG'), translateText('common:COMMON_SEPT'), translateText('common:COMMON_OCT'), translateText('common:COMMON_NOV'), translateText('common:COMMON_DEC')];
  const today = new Date();
  return `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}`;
};

export const AuthUserDetails = () => localStorage.roleInfo ? JSON.parse(localStorage.roleInfo) : {};

export const authUserDetails = () => localStorage.roleInfo ? JSON.parse(localStorage.roleInfo) : {};

export const SEGREGATEDATA = (list) => {
  const newArray = [];
  for (const key in list) {
    const arr = list[key];
    const keys = Object.keys(arr);
    for (let j = 0; j < keys.length; j++) {
      var obj;
      const dataSize = arr[keys[j]].length;
      if (dataSize > 0) {
        const data = arr[keys[j]];
        for (let i = 0; i < dataSize; i++) {
          obj = data[i];
          obj.type = keys[j];
          newArray.push(obj);
        }
      }
    }
  }
  return newArray;
};

export const DATESCOMPARE = (currectDate, nextDate) => {
  const currentDateTime = Moment(currectDate, 'DD/MM/YYYY').toDate();
  const nextDateTime = Moment(new Date(nextDate), 'DD/MM/YYYY').toDate();
  if (currentDateTime > nextDateTime) return 1;
  else if (currentDateTime < nextDateTime) return -1;
  return 0;
};

export const DATESORT = (dataArray, key, dueDate, startTime, dueTime) => {
  const date = dataArray;
  const startDateSort = key;
  const dueDateSort = dueDate;
  const sortedData = date.sort((a, b) => {
    let date1;
    let date2;
    if (a[startDateSort] === undefined ? date1 = new Date(a[dueDateSort]) : date1 = new Date(a[startDateSort]));
    if (b[startDateSort] === undefined ? date2 = new Date(b[dueDateSort]) : date2 = new Date(b[startDateSort]));
    if (date1.toDateString() === date2.toDateString()) {
      let timePart1;
      let timePart2;
      if (a[startTime] === undefined ? timePart1 = a[dueTime] : timePart1 = a[startTime]);
      if (b[startTime] === undefined ? timePart2 = b[dueTime] : timePart2 = b[startTime]);
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
      date1 = new Date(`2017/01/01 ${time1}`);
      date2 = new Date(`2017/01/01 ${time2}`);
      return date1 - date2;
    }
    return date1 - date2;
  });
  return sortedData;
};

export const CreateTimeStamp = (dataArray) => {
  const data = dataArray;
  const days = [translateText('common:COMMON_SUNDAY'), translateText('common:COMMON_MONDAY'), translateText('common:COMMON_TUESDAY'), translateText('common:COMMON_WEDNESDAY'), translateText('common:COMMON_THURSDAY'), translateText('common:COMMON_FRIDAY'), translateText('common:COMMON_SATURDAY')];
  const filterlist = data.map((classObject) => {
    for (let day = 0; day < 8; day++) {
      if (days[(Moment().add(day, 'days')._d).getDay()] === classObject.day) {
        const hours = parseInt(classObject.class_begin_time != null ? classObject.class_begin_time.slice(0, 2) : 0);
        const minutes = parseInt(classObject.class_begin_time != null ? classObject.class_begin_time.slice(-2) : 0);
        const timeStampWithoutTime = new Date(Moment().add(day, 'days')._d).toLocaleDateString();
        const timeStampWithTime = new Date(timeStampWithoutTime).setMinutes((hours * 60) + minutes);
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
  const today = Moment()._d;
  const seventhDay = Moment().add(7, 'days')._d;
  const filterlist = [];
  data.map((assignmentObject) => {
    assignmentObject.timeStamp = assignmentObject.assign_due === null ? null : new Date(assignmentObject.assign_due);
    if (assignmentObject.timeStamp !== null && assignmentObject.timeStamp >= today && assignmentObject.timeStamp <= seventhDay) {
      assignmentObject.submission_types === 'online_quiz' ? assignmentObject.type = 'testorquiz' : assignmentObject.type = 'assignments';
      filterlist.push(assignmentObject);
    }
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