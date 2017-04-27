
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter, map, sortBy, uniqBy, each, find } from 'lodash';
import { Col, Row, Alert } from 'react-bootstrap';
import moment from 'moment';
import HeaderLabel from './../../common/headerLabel';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import OutlookCalendar from '../eventList/components/outlookCalendar';
import * as actionCreators from './actions';
import * as classesActionCreators from '../../classes/classList/actions';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import * as CommonConstants from '../../constants/commonConstants';
import { translateText } from '../../common/translate';
import { authUserDetails, dataFilterAddingData, createTimeStamp, caldenderItemWithTwoDates, convertEncodeURIComponent, addedTypeField, browserTitle, getClassAndAssignmentAPIData, caldenderEventsTimeStamp } from '../../common/utility';
import { getClassesData, getAssigmentsAndQuizzesData, prepareDisplayObject } from '../eventList/components/nextEventUtility';
import AlertComponent from '../../common/alertComponent';
import './style.css';
import Spinner from '../../common/spinner';
import EventDetails from '../eventDetails/index';

export class EventList extends React.PureComponent {
  constructor() {
    super();
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = authUserDetails().netid; //'6cb4db8459';
    this.masterObj = null;
  }
  componentWillMount() {
    const props = this.props;
    props.onMasterDataChange(false);
    
    props.onLoading();
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      const result = getClassAndAssignmentAPIData(this.userReqObj).catch((error) => {
        //for catching API error
        props.onReceiveError(error);
      });
      result.then((masterObj1) => {
        this.masterObj = masterObj1;
        new Promise((resolve) => {
          resolve(props.getCalendarData());
        }).then(() => {
          props.onMasterDataChange(true);
        });
      });
    } else {
      //The below code has to be changed once we receive seperate API for faculty and staff
      this.masterObj = {};
      props.onMasterDataChange(true);
    }
    browserTitle(translateText('common:NEXT_EVENTS'));
  }

  getEventsData(props) {
    const EVENT_DATA = [];
    const finalCalenderEvents = [];
    if (this.masterObj && props.calendarDetailData && props.calendarDetailData.data) {
      const assignmentsData = convertEncodeURIComponent(this.masterObj.assignmentMasterCopy);
      const classesData = convertEncodeURIComponent(this.masterObj.classMasterCopy);
      if (props.calendarDetailData && props.calendarDetailData.data) {
        let calenderData = [];
        let remainingEventsWithDates = [];
        const allDayEvents = [];
        const naEvents = [];
        calenderData = props.calendarDetailData.data;
        const calenderNaEvents = [];
        for (let i=0; i<calenderData.length; i++) {
          const item = calenderData[i];
          item.type = NextEventsConstants.CALENDER;
          if (item.starttime === null || item.endtime === null) {
            if ((item.enddate && item.startdate) && item.startdate !== item.enddate) {
              calenderNaEvents.push(...caldenderItemWithTwoDates(Object.assign({}, item)));
            } else {
              calenderNaEvents.push(item);
            }
          } else {
            if ((item.enddate && item.startdate) && item.startdate !== item.enddate) {
              remainingEventsWithDates.push(...caldenderItemWithTwoDates(Object.assign({}, item)));
            } else {
              remainingEventsWithDates.push(item);
            }
          }
        }
        const result1 = caldenderEventsTimeStamp(filter(calenderNaEvents, {allday_event: 'true'}));
        const result2 = caldenderEventsTimeStamp(filter(calenderNaEvents, {allday_event: 'false'}));
        allDayEvents.push(...result1);
        naEvents.push(...result2);
        remainingEventsWithDates = caldenderEventsTimeStamp(remainingEventsWithDates.slice());
        finalCalenderEvents.push(...remainingEventsWithDates, ...naEvents, ...allDayEvents);
      }
      if (assignmentsData && classesData) {
        const classObjs = dataFilterAddingData(classesData.data);        
        const assignmentObjs = addedTypeField(assignmentsData.data);       
        classObjs.map((classObj) => {
          const classObject = classObj;
          const assignmentObjects = filter(assignmentObjs, { 'sis_source_id': classObject.sis_source_id });
          if (assignmentObjects) {
            assignmentObjects.map((assignmentObj) => {
              EVENT_DATA.push(assignmentObj);
              return EVENT_DATA;
            });
          }
  
          classObject.assignmentData = assignmentObjects;
          classObject.type = NextEventsConstants.CLASSES_DETAILS;
          EVENT_DATA.push(classObject);
          return EVENT_DATA;
        });
      }
      if (EVENT_DATA) {
        EVENT_DATA.push(...finalCalenderEvents);
        localStorage.setItem('eventList', JSON.stringify(EVENT_DATA));
      }
      let val = props.EventChangedValue;    
      if (localStorage.getItem('setFilterValue') === null) {
        localStorage.setItem('setFilterValue', CommonConstants.EVENT_FILTER_7_DAYS);
      }      
      if (localStorage.getItem(CommonConstants.DISPLAY_OPTIONS) === null) {
        this.getEventDisplayOptions();
      }
      val = localStorage.getItem('setFilterValue');
      const val1 = localStorage.getItem('setDisplayOptionValue');
      const result = this.getSelectedFilterData(val, val1);
      return result;
    }

    return EVENT_DATA;
  }

  getSelectedFilterData(filterSelection, displayOptionFilter) {
    let day;
    let eventDetails;
    let sortedEventData;
    const today = moment()._d;
    const seventhDay = moment().add(6, 'days')._d;
    const filterlist = [];
    let eventFilterData;
    let options;


    if (displayOptionFilter && filterSelection) {
      day = filterSelection;
      options = JSON.parse(displayOptionFilter);
      if (options) {
        const keys = Object.keys(options);
        if (keys.length === 0) {
          return false;
        }
      }
    } else {
      day = filterSelection;
    }


    if (localStorage !== undefined) {
      eventDetails = JSON.parse(localStorage.getItem('eventList'));
    }
    map(eventDetails, (eventObject) => {
      const APIDate = new Date(moment(eventObject.timeStamp).format('MMM D, YYYY'));
      const todayDate = new Date(moment(today).format('MMM D, YYYY'));
      const seventhDate = new Date(moment(seventhDay).format('MMM D, YYYY'));
      const APITime = moment(eventObject.timeStamp).format('HH:mm');
      const todayTime = moment(today).format('HH:mm');
      if (day === CommonConstants.EVENT_FILTER_7_DAYS && APIDate >= todayDate && APIDate <= seventhDate) {
        if (!(APIDate.toString() === todayDate.toString() && APITime < todayTime)) {
          filterlist.push(eventObject);
        }
      } else if (day === CommonConstants.EVENT_FILTER_TODAY && (APIDate.toString() === todayDate.toString()) && (APITime > todayTime)) {
        filterlist.push(eventObject);
      } else if ((day === CommonConstants.EVENT_FILTER_ALL || day === CommonConstants.EVENT_FILTER_NEXT_EVENT) && APIDate >= todayDate) {
        if (!(APIDate.toString() === todayDate.toString() && APITime < todayTime)) {
          filterlist.push(eventObject);
        }
      }
    });
    
    if (filterlist && filterlist.length > 0) {
      sortedEventData = sortBy(filterlist, ['timeStamp']);
      if (sortedEventData && sortedEventData.length > 0 && day === CommonConstants.EVENT_FILTER_NEXT_EVENT) {
        const nextEventDetail = [];
        nextEventDetail.push(sortedEventData[0]);
        eventFilterData = nextEventDetail;
      } else {
        eventFilterData = sortedEventData;
      }
    }

    let keys;
    if (options) {
      keys = Object.keys(options);
    }
    if (eventFilterData) {
      if (options && keys && keys.length > 0) {
        eventFilterData = this.sortingDisplayOptionSelection(options, eventFilterData);
        localStorage.setItem('eventsFilterData', JSON.stringify(eventFilterData));
      } /*else {
        if (eventFilterData) {
          localStorage.setItem('eventsFilterData', JSON.stringify(eventFilterData));
          this.getEventDisplayOptions();
        }
      }*/
    }
    
    return eventFilterData;
  }


  getEventDisplayOptions() {
    let eventDetails;
    const displayOptions = [];
    const classes = [];
    const classAssignments = [];
    // const quizzes = [];
    // let classEvent = [];

    if (localStorage !== undefined) {
      eventDetails = JSON.parse(localStorage.getItem('eventList'));
    }
    classes.Classes = null;
    map(eventDetails, (eventObject) => {
      if (eventObject.type === NextEventsConstants.CLASSES_DETAILS) {
        const data = {};
        data.name = eventObject.course_title;
        data.sid = eventObject.sis_source_id;
        data.checked = true;
        classes.push(data);
        if (eventObject.assignmentData && eventObject.assignmentData.length > 0) {
          const assignmentDetails = eventObject.assignmentData;
          map(assignmentDetails, (assignmentData) => {
            //classAssignments.push(assignmentData);
            if (assignmentData.type === NextEventsConstants.ASSIGNMENTS || assignmentData.type === NextEventsConstants.TEST_OR_QUIZ) {
              classAssignments.push(data);
            }
            // else if (assignmentData.type === NextEventsConstants.TEST_OR_QUIZ) {
            //   quizzes.push(data);
            // }
          });
        }
      }
    });
    //const ASSIGNMENTS_DATA = convertEncodeURIComponent(this.masterObj.assignmentMasterCopy);
    //const classEvent = prepareAssignmentOrQuizze(ASSIGNMENTS_DATA);

    const matchedclassesObj = map(uniqBy(classes, CommonConstants.SIS_SOURCE_ID));
    const matchedAssignments = map(uniqBy(classAssignments, CommonConstants.SIS_SOURCE_ID));
    //const matchedquizzes = map(uniqBy(quizzes, CommonConstants.SIS_SOURCE_ID));
    const classesObj = prepareDisplayObject(CommonConstants.CLASSES, matchedclassesObj);
    const assignmentObj = prepareDisplayObject(CommonConstants.CLASS_EVENTS, matchedAssignments);
    //const quizzesObj = prepareDisplayObject(CommonConstants.TESTS_AND_QUIZZES, matchedquizzes);
    //const classEvents = prepareDisplayObject(CommonConstants.CLASS_EVENTS, classEvent);
    const allEventsObj = prepareDisplayObject(CommonConstants.EVENT_FILTER_ALL, '');


    displayOptions.push(allEventsObj);
    displayOptions.push(classesObj);
    displayOptions.push(assignmentObj);
    //displayOptions.push(quizzesObj);
    //displayOptions.push(classEvents);
    localStorage.setItem(CommonConstants.DISPLAY_OPTIONS, JSON.stringify(displayOptions));

    const selectedObj = {};
    selectedObj.displayOptions = {};
    const items = displayOptions.slice();
    items[0].checked = true;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.checked || item.childrenUnselect) {
          selectedObj.displayOptions[item.itemName] = [];
          const selectedChildItems = [];
          for (let j = 0; j < item.children.length; j++) {
            const childItem = item.children[j];
            if (childItem.checked) {
              selectedChildItems.push(childItem.sid);
            }
          }
          selectedObj.displayOptions[item.itemName] = selectedChildItems;
        }
      } 
      localStorage.setItem('setDisplayOptionValue', JSON.stringify(selectedObj.displayOptions));
    }   
  }

  sortingDisplayOptionSelection(options, eventFilterData) {
    let classesIds = [];
    //const assignmentsIds = [];
    //const quizzesIds = [];
    let classEventsIds = [];
    //const displayOptionData = [];
    const finalResult = [];
    const keys = Object.keys(options);
    const today = moment()._d;
    map(keys, (key) => {
      if (key === CommonConstants.CLASSES) {
        classesIds = options[key];
      }
      // else if (key === CommonConstants.CLASS_ASSIGNMENTS) {
      //   assignmentsIds = options.displayOptions[key];
      // } else if (key === CommonConstants.TESTS_AND_QUIZZES) {
      //   quizzesIds = options.displayOptions[key];
      // } else
      if (key === CommonConstants.CLASS_EVENTS) {
        classEventsIds = options[key];
      }
    });
    if (classesIds && classesIds.length > 0) {
      const result = getClassesData(classesIds, eventFilterData, today);
      finalResult.push(result);
    }
    // if (assignmentsIds && assignmentsIds.length > 0) {
    //   displayOptionData = getAssigmentsAndQuizzesData(assignmentsIds, eventFilterData, today);
    //   finalResult.push(displayOptionData);
    // }
    // if (quizzesIds && quizzesIds.length > 0) {
    //   const result = getAssigmentsAndQuizzesData(assignmentsIds, eventFilterData, today);
    //   finalResult.push(result);
    // }
    if (classEventsIds && classEventsIds.length > 0) {
      const result = getAssigmentsAndQuizzesData(classEventsIds, eventFilterData, today);
      finalResult.push(result);
    }
    finalResult.push(filter(eventFilterData, {type: NextEventsConstants.CALENDER}));
    const displayFinal = [];
    each(finalResult, (nexteventchildObj) => {
      each(nexteventchildObj, (childObj) => {
        displayFinal.push(childObj);
      });
    });
    const sortedDiplayOptionData = sortBy(displayFinal, ['timeStamp']);
    return sortedDiplayOptionData;
  }

  checkEventPeriod(EVENT_DATA) {
    const localStorageValue = localStorage.getItem('setFilterValue');

    return (localStorageValue === CommonConstants.EVENT_FILTER_NEXT_EVENT ? this.renderNextEventDetail(EVENT_DATA) : this.renderData(EVENT_DATA));
  }

  renderNoDataFound() {
    return (
      <Alert bsStyle='warning'>
        <div className='mb0'>
          <div>
            <h4 className='mb10 mt0'>{translateText('common:NO_EVENTS_TO_DISPLAY')}</h4>
            <h4 className='mb0'>{translateText('common:SETTING_DISPLAY_CONTENT')}</h4>
          </div>
        </div>
      </Alert>
    );
  }

  renderSeverError() {
    return (
      <Row>
        <Col md={8} sm={6} xs={12}>
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} />
          </div>
        </Col>
        <Col xs={12}>
          <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
        </Col>
      </Row>
    );
  }

  renderData(EVENT_DATA) {
    const props = this.props;
    props.offLoading();
    return (
      <article className='event-topsection'>
        <Row><Col md={8} sm={6} xs={12}>
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} />
          </div>
        </Col>
        </Row>
        <ul className='list-unstyled event-listSection'>
          {EVENT_DATA && authUserDetails().userRole === CommonConstants.ROLE_STUDENT && EVENT_DATA.length > 0 ? EVENT_DATA.map((eventType, index) => ( <li key={index}>
            {eventType.type === NextEventsConstants.CLASSES_DETAILS && <Classes data={eventType} currentIndex={index} />}
            {eventType.type === NextEventsConstants.ASSIGNMENTS && <Assignments data={eventType} currentIndex={index} />}
            {eventType.type === NextEventsConstants.TEST_OR_QUIZ && <Quizzes data={eventType} currentIndex={index} />}
            {eventType.type === NextEventsConstants.CALENDER && <OutlookCalendar data={eventType} currentIndex={index} />}
          </li>
          )) :
          <Alert bsStyle='warning'>
            <div>
              <h4 className='mb10 mt0'>{translateText('common:NO_EVENTS_TO_DISPLAY')}</h4>
              <h4 className='mb0'>{translateText('common:SETTING_DISPLAY_CONTENT')}</h4>
            </div>
          </Alert>
          }
        </ul>
        {/*{((!EVENT_DATA && !props.loading) || (EVENT_DATA.error)) &&
          <AlertComponent typename='danger' msg={translateText('common:NO_RESPONSE')} />
        }*/}
      </article>
    );
  }

  renderDataCheck(EVENT_DATA) {
    const props = this.props;
    return (EVENT_DATA !== undefined && EVENT_DATA.length > 0) ? this.checkEventPeriod(EVENT_DATA) : (props.isError ? this.renderSeverError() : this.renderNoDataFound());
  }

  renderNextEventDetail(EVENT_DATA) {
    const eventData = EVENT_DATA[0];
    if (eventData) {
      eventData.eventdetailstype = eventData.type;
      eventData.id = eventData.sis_source_id;
      eventData.index = CommonConstants.ZERO;
      if (eventData.assignment_id) {
        eventData.assigndue = eventData.assignment_id;
      }
    }
    return (
      <span>
        <EventDetails params={eventData} />
      </span>
    );
  }

  renderLoader() {
    const props = this.props;
    return (
      <span>
        {props.loading && <Spinner />}
      </span>
    );
  }


  render() {
    const props = this.props;
    const EVENT_DATA = this.getEventsData(this.props);
    return (
      <section role='region'>
        {props.isMasterDataChange ? this.renderDataCheck(EVENT_DATA) : this.renderLoader()}
      </section>
    );
  }
}

const mapStateToProps = (eventsState) => (
  {
    assignmentsData: eventsState.eventsReducer.eventsData.data,
    classesData: eventsState.classesReducer.classesData.data,
    loading: eventsState.eventsReducer.isLoading,
    isError: eventsState.eventsReducer.error,
    isMasterDataChange: eventsState.eventsReducer.isMasterDataChange,
    classLoading: eventsState.classesReducer.isLoading,
    EventChangedValue: eventsState.eventsFilterReducer.changedValue,
    calendarDetailData: eventsState.eventsReducer.calendarDetailData
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, classesActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
