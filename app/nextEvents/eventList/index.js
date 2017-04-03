
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter, map, sortBy, uniqBy, each } from 'lodash';
import { Col, Row, Alert } from 'react-bootstrap';
import moment from 'moment';
import HeaderLabel from './../../common/headerLabel';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import * as actionCreators from './actions';
import * as classesActionCreators from '../../classes/classList/actions';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import * as CommonConstants from '../../constants/commonConstants';
import { translateText } from '../../common/translate';
import { authUserDetails, dataFilterAddingData, createTimeStamp, convertEncodeURIComponent, addedTypeField, browserTitle, getClassAndAssignmentAPIData } from '../../common/utility';
import { getClassesData, getAssigmentsAndQuizzesData, prepareAssignmentOrQuizze, prepareDisplayObject, getAssigmentOrQuizzes } from '../eventList/components/nextEventUtility';
//import AlertComponent from '../../common/alertComponent';
import './style.css';
import Spinner from '../../common/spinner';
import EventDetails from '../eventDetails/index';

export class EventList extends React.PureComponent {
  constructor() {
    super();
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = authUserDetails().netid; //'6cb4db8459';
    this.masterObj = {};
  }
  componentWillMount() {
    const props = this.props;
    props.onMasterDataChange(false);
    props.onLoading();
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      const result = getClassAndAssignmentAPIData(this.userReqObj);
      result.then((masterObj1) => {
        this.masterObj = masterObj1;
        props.onMasterDataChange(true);
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
    if (this.masterObj) {
      const ASSIGNMENTS_DATA = convertEncodeURIComponent(this.masterObj.assignmentMasterCopy);
      const CLASSES_DATA = convertEncodeURIComponent(this.masterObj.classMasterCopy);
      if (ASSIGNMENTS_DATA && CLASSES_DATA) {
        const classObjs = createTimeStamp(dataFilterAddingData(CLASSES_DATA.data));
        const assignmentObjs = addedTypeField(ASSIGNMENTS_DATA.data);
        assignmentObjs.map((assignmentObj) => {
          EVENT_DATA.push(assignmentObj);
          return EVENT_DATA;
        });
        classObjs.map((classObj) => {
          const classObject = classObj;
          classObject.assignmentData = filter(assignmentObjs, { 'sis_source_id': classObject.sis_source_id });
          classObject.type = NextEventsConstants.CLASSES_DETAILS;
          EVENT_DATA.push(classObject);
          return EVENT_DATA;
        });
      }
      if (EVENT_DATA) {
        localStorage.setItem('eventList', JSON.stringify(EVENT_DATA));
      }
      let val = props.EventChangedValue;
      let val1;
      if (localStorage.getItem('setFilterValue') !== null) {
        val = localStorage.getItem('setFilterValue');
      }      
      if (localStorage.getItem('setDisplayOptionValue') !== null) {
        val1 = localStorage.getItem('setDisplayOptionValue');
      }
      console.log('val1: ', val1);
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
        nextEventDetail.push(Object.values(sortedEventData)[0]);
        eventFilterData = nextEventDetail;
      } else {
        eventFilterData = sortedEventData;
      }
    }

    let keys;
    if (options) {
      keys = Object.keys(options);
    }

    console.log('options: ', options);
    console.log('keys: ', keys);
    console.log('eventFilterData: ', eventFilterData);

    if(eventFilterData)
    {
    if (options && keys && keys.length > 0) {
      eventFilterData = this.sortingDisplayOptionSelection(options, eventFilterData);
      localStorage.setItem('eventsFilterData', JSON.stringify(eventFilterData));
    } else {
      if (eventFilterData) {
        localStorage.setItem('eventsFilterData', JSON.stringify(eventFilterData));
      }
    }
    }

    this.getEventDisplayOptions();
    return eventFilterData;
  }


  getEventDisplayOptions() {
    let eventDetails;
    const displayOptions = [];
    const classes = [];
    const classAssignments = [];
    const quizzes = [];
    let classEvent = [];

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
    const ASSIGNMENTS_DATA = convertEncodeURIComponent(this.masterObj.assignmentMasterCopy);
    classEvent = prepareAssignmentOrQuizze(ASSIGNMENTS_DATA);

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
  }

  sortingDisplayOptionSelection(options, eventFilterData) {
    let classesIds = [];
    let assignmentsIds = [];
    let quizzesIds = [];
    let classEventsIds = [];
    let displayOptionData = [];
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

    return (localStorageValue === CommonConstants.EVENT_FILTER_NEXT_EVENT? this.renderNextEventDetail(EVENT_DATA) : this.renderData(EVENT_DATA));
  }

  renderNoDataFound() {
    return (
      <Alert bsStyle='warning'>
        <h4 className='mb0'>{translateText('common:NO_EVENTS_TO_DISPLAY')}</h4>
      </Alert>
    );
  }

  renderData(EVENT_DATA) {
    const props = this.props;
    props.offLoading();
    return (
      <article className='event-listSection'>
        <Row><Col md={8} sm={6} xs={12}>
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} />
          </div>
        </Col>
        </Row>
        <div>
          {EVENT_DATA && authUserDetails().userRole === CommonConstants.ROLE_STUDENT && EVENT_DATA.length > 0 ? EVENT_DATA.map((eventType, index) => (
            <div key={index}>
              {eventType.type === NextEventsConstants.CLASSES_DETAILS && <Classes data={eventType} />}
              {eventType.type === NextEventsConstants.ASSIGNMENTS && <Assignments data={eventType} />}
              {eventType.type === NextEventsConstants.TEST_OR_QUIZ && <Quizzes data={eventType} />}
            </div>
          )) :
          <Alert bsStyle='warning'>
            <h4 className='mb0'>{translateText('common:NO_CONTENT')}</h4>
          </Alert>

          }
        </div>
        {/*{((!EVENT_DATA && !props.loading) || (EVENT_DATA.error)) &&
          <AlertComponent typename='danger' msg={translateText('common:NO_RESPONSE')} />
        }*/}
      </article>
    );
  }

  renderDataCheck(EVENT_DATA) {
    return (EVENT_DATA !== undefined && EVENT_DATA.length > 0) ? this.checkEventPeriod(EVENT_DATA) : this.renderNoDataFound();
  }

  renderNextEventDetail(EVENT_DATA) {
    const eventData = EVENT_DATA[0];
    if (eventData) {
      eventData.eventdetailstype = eventData.type;
      eventData.id = eventData.sis_source_id;
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
    isMasterDataChange: eventsState.eventsReducer.isMasterDataChange,
    classLoading: eventsState.classesReducer.isLoading,
    EventChangedValue: eventsState.eventsFilterReducer.changedValue
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, classesActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
