
import React from 'react';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { connect } from 'react-redux';
import * as _ from 'lodash';
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
import { authUserDetails, dataFilterAddingData, CreateTimeStamp, convertEncodeURIComponent, addedTypeField } from '../../common/utility';
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
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      this.props.getEventsData(this.userReqObj);
      this.props.getClassesDataByWeek(this.userReqObj);
    }
  }
  // componentDidUpdate(){
  //     if(this.props.assignmentsData && this.props.classesData)
  //     {
  //       this.getEventsData(this.props);
  //     }
  // }
  getEventsData(props) {
    let EVENT_DATA = [];
    const ASSIGNMENTS_DATA = convertEncodeURIComponent(props.assignmentsData);
    const CLASSES_DATA = convertEncodeURIComponent(props.classesData);
    if (ASSIGNMENTS_DATA && CLASSES_DATA) {
      const classObjs = CreateTimeStamp(dataFilterAddingData(CLASSES_DATA.data));
      const assignmentObjs = addedTypeField(ASSIGNMENTS_DATA.data);
      assignmentObjs.map((assignmentObj) => {
        EVENT_DATA.push(assignmentObj);
      });
      classObjs.map((classObject) => {
        classObject.assignmentData = _.filter(assignmentObjs, { 'sis_source_id': classObject.sis_source_id});
        classObject.type = NextEventsConstants.CLASSES_DETAILS;
        EVENT_DATA.push(classObject);
      });
    }
    if (EVENT_DATA) {
      EVENT_DATA = _.sortBy(EVENT_DATA, ['timeStamp']);
      localStorage.setItem('eventList', JSON.stringify(EVENT_DATA));
    }
      let result = this.getSelectedFilterData(this.props.EventChangedValue);
      return result;
    }
  
  getSelectedFilterData(dayy){
    let eventDetails;
    let sortedEventData;
    const day = dayy;
    const today = moment()._d;
    const seventhDay = moment().add(6, 'days')._d;
    const filterlist = [];
    if (localStorage !== undefined) {
      eventDetails = JSON.parse(localStorage.getItem('eventList'));
    }    
     eventDetails.map((eventObject,index) => {
       let APIDate = moment(eventObject.timeStamp).format('MMM D, YYYY');
       let todayDate = moment(today).format('MMM D, YYYY');
       let seventhDate = moment(seventhDay).format('MMM D, YYYY');
       let APITime = moment(eventObject.timeStamp).format('hh:mm');
       let todayTime = moment(today).format('hh:mm');
       if(day === CommonConstants.EVENT_FILTER_7_DAYS && APIDate >= todayDate && APIDate <= seventhDate){
         if(!(APIDate === todayDate && APITime < todayTime)) {    
           filterlist.push(eventObject);
         }
       }else if(day === CommonConstants.EVENT_FILTER_TODAY && (APIDate === todayDate) && (APITime > todayTime)) {
          filterlist.push(eventObject);
        }
        else if(day === CommonConstants.EVENT_FILTER_ALL && !(APIDate === todayDate && APITime < todayTime)) {         
          filterlist.push(eventObject);
        }      
    });
     sortedEventData = _.sortBy(filterlist, ['timeStamp']);
     
    return sortedEventData;

  }

  render() {
    const EVENT_DATA = this.getEventsData(this.props);

    return (
      <section>
        {this.props.loading && <Spinner />}
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