
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import {filter, map, sortBy } from 'lodash';
import { Col, Row, Alert } from 'react-bootstrap';
import HeaderLabel from './../../common/headerLabel';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import * as actionCreators from './actions';
import * as classesActionCreators from '../../classes/classList/actions';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import * as CommonConstants from '../../constants/commonConstants';
import { translateText } from '../../common/translate';
import { authUserDetails, dataFilterAddingData, createTimeStamp, convertEncodeURIComponent, addedTypeField, browserTitle } from '../../common/utility';
import './style.css';
import Spinner from '../../common/spinner';

export class EventList extends React.PureComponent {
  constructor() {
    super();
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = '6cb4db8459';//authUserDetails().netid;
  }
  componentWillMount() {
    const props = this.props;
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      props.getEventsData(this.userReqObj);
      props.getClassesDataByWeek(this.userReqObj);
    }
    browserTitle(translateText('common:NEXT_EVENTS'));
  }
  getEventsData(props) {
    const EVENT_DATA = [];
    const ASSIGNMENTS_DATA = convertEncodeURIComponent(props.assignmentsData);
    const CLASSES_DATA = convertEncodeURIComponent(props.classesData);
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
    const result = this.getSelectedFilterData(props.EventChangedValue);
    return result;
  }

  getSelectedFilterData(selectedDay) {
    let eventDetails;
    let sortedEventData;
    const day = selectedDay;
    const today = moment()._d;
    const seventhDay = moment().add(6, 'days')._d;
    const filterlist = [];
    let eventFilterData;

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

    if (filterlist && filterlist.length>0) {
      sortedEventData = sortBy(filterlist, ['timeStamp']);
      if (sortedEventData && sortedEventData.length >0 && day === CommonConstants.EVENT_FILTER_NEXT_EVENT) {
        const nextEventDetail = [];
        nextEventDetail.push(Object.values(sortedEventData)[0]);
        eventFilterData = nextEventDetail;
      } else {
        eventFilterData = sortedEventData;   
      }          
    }
    if (eventFilterData) {
      localStorage.setItem('eventsFilterData', JSON.stringify(eventFilterData));
    }
    return eventFilterData;
  }

  render() {
    const props = this.props;
    const EVENT_DATA = this.getEventsData(this.props);
    return (
      <section>
        {props.loading && <Spinner />}
        {EVENT_DATA && <div>
          <Row><Col md={8} sm={6} xs={12}>
            <div><HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} /></div>
          </Col>
          </Row>
            {authUserDetails().userRole === CommonConstants.ROLE_STUDENT ? EVENT_DATA.map((eventType, index) => (
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
          }
      </section>
    );
  }
}

const mapStateToProps = (eventsState) => (
  {
    assignmentsData: eventsState.eventsReducer.eventsData.data,
    classesData: eventsState.classesReducer.classesData.data,
    loading: eventsState.eventsReducer.isLoading,
    classLoading: eventsState.classesReducer.isLoading,
    EventChangedValue: eventsState.eventsFilterReducer.changedValue
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, classesActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);