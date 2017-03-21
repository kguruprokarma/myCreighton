/*Created Date: - 20th -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import HeaderLabel from './../../common/headerLabel';
import ClassTabController from './components/classTabController';
import ClassBox from './components/classBox';
import * as actionCreators from './actions';
import style from '../classList/style.css';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import Spinner from '../../common/spinner';
import { authUserDetails, ConvertEncodeURIComponent } from '../../common/utility';

export class Classes extends React.PureComponent {

  constructor(props) {
    super(props);   

    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = '6cb4db8459';//authUserDetails().netid;

    this.onChangeOfTab = this.onChangeOfTab.bind(this);
    this.onChangeOfTab(this.props.params.classtab);
    this.state = { presentState: '' };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.presentState !== nextProps.params.classtab) {
      this.setState({ presentState: nextProps.params.classtab });
      this.onChangeOfTab(nextProps.params.classtab);
    }
  }

  onChangeOfTab(catagoryName) {
    this.props.onCatagoryChange(catagoryName);
    if (this.userReqObj !== undefined) {
      if (catagoryName === CommonConstants.WEEK) {
        this.props.getClassesDataByWeek(this.userReqObj);
        this.props.getAssignmentDetails(this.userReqObj);
      } else if (catagoryName === CommonConstants.LIST) {
        this.props.getClassesDataForAtoZ(this.userReqObj);
      } else if (catagoryName === CommonConstants.TODAY) {
        this.props.getClassesDataByToday(this.userReqObj);
      }
    }
  }

  render() {
    const classListData = this.props;
    const USER_DATA = ConvertEncodeURIComponent(classListData.classesData);
    const ASSIGNMENTS_DATA = ConvertEncodeURIComponent(classListData.assignmentsData);
    let newArray = [];
    let defaultArray = [];
    if(USER_DATA && ASSIGNMENTS_DATA ){
      let classObj = USER_DATA.data;
      let assignmentObj = ASSIGNMENTS_DATA.data;
      {classObj.map(function(objClass, i){
        objClass.assignmentData = {};
        defaultArray.push(objClass);
      })
        {defaultArray.map(function(objClass, i){
          let multiple = [];
          assignmentObj.map(function(objAssignment, i){
            if(objClass.sis_source_id === objAssignment.sis_source_id){
              multiple.push(objAssignment);
              objClass.assignmentData = multiple;
            }
          })
        })
          localStorage.setItem('classDetails', JSON.stringify(defaultArray));
        }
      }
    }

    return (
        <section id='classSchedule'>
          {this.props.loading && <Spinner />}
          {USER_DATA && USER_DATA.data && USER_DATA.data.length > 0 &&<div>
            <Row>
              <Col md={8} sm={6} xs={12} className='hidden-xs'>
                <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:CLASS_SCHEDULE')} /></div>
              </Col>
              <Col md={4} sm={6} xs={12} className='controller-buttons'>
                <ClassTabController state={this.state.presentState} onChangeOfTab={this.onChangeOfTab} />
              </Col>
            </Row>
            <ClassBox data={USER_DATA} catagoryName={classListData.params.classtab} />
          </div>
          }
        </section>
    );
  }
}

const mapStateToProps = (classesState) => (
{
  classesData: classesState.classesReducer.classesData.data,
  assignmentsData: classesState.classesReducer.assignmentsData.data,
  catagoryName: classesState.classesReducer.catagoryName,
  loading: classesState.classesReducer.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
