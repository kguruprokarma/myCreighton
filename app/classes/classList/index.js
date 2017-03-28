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
import '../classList/style.css';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import Spinner from '../../common/spinner';
import { convertEncodeURIComponent, browserTitle, getClassAndAssignmentAPIData } from '../../common/utility';

export class Classes extends React.PureComponent {

  constructor(props) {
    super(props);   
    const classesProps = this.props;
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = '6cb4db8459';

    this.onChangeOfTab = this.onChangeOfTab.bind(this);
    this.onChangeOfTab(classesProps.params.classtab);
    this.state = { presentState: '' };
  }
  
  componentDidMount() {
    browserTitle(translateText('common:CLASS_SCHEDULE'));
  }  

  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (this.state.presentState !== propsNext.params.classtab) {
      this.setState({ presentState: propsNext.params.classtab });
      this.onChangeOfTab(propsNext.params.classtab);
    }
  }

  onChangeOfTab(catagoryName) {
    const props = this.props;
    props.onCatagoryChange(catagoryName);
    const result = getClassAndAssignmentAPIData(this.userReqObj);
    result.then((masterObj) => {
    //successMessage is whatever we passed in the resolve(...) function above.
    //It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      props.getClassesData({data: masterObj.classMasterCopy});
      props.getAssignmentDetails({data: masterObj.assignmentMasterCopy});
    });

/*    if (this.userReqObj !== undefined) {
      if (catagoryName === CommonConstants.WEEK) {
        getClassAndAssignmentAPIData(this.userReqObj);
        props.getClassesDataByWeek(this.userReqObj);
        props.getAssignmentDetails(this.userReqObj);
      } else if (catagoryName === CommonConstants.LIST) {
        props.getClassesDataForAtoZ(this.userReqObj);
      } else if (catagoryName === CommonConstants.TODAY) {
        props.getClassesDataByToday(this.userReqObj);
      }
    }*/
  }

  render() {
    const classListData = this.props;
    const USER_DATA = convertEncodeURIComponent(classListData.classesData);
    const ASSIGNMENTS_DATA = convertEncodeURIComponent(classListData.assignmentsData);
    const defaultArray = [];
    if (USER_DATA && ASSIGNMENTS_DATA ) {
      const classObj = USER_DATA.data;
      const assignmentObj = ASSIGNMENTS_DATA.data;
      classObj.map((singleClassObject) => {
        const objClass = singleClassObject;
        objClass.assignmentData = {};
        defaultArray.push(objClass);
        return defaultArray;
      });
      defaultArray.map((singleClassObject) => {
        const objClass = singleClassObject;
        const multiple = [];
        assignmentObj.map((objAssignment) => {
          if (objClass.sis_source_id === objAssignment.sis_source_id) {
            multiple.push(objAssignment);
            objClass.assignmentData = multiple;
          }
          return objClass;
        });
        return objClass;
      });
      localStorage.setItem('classDetails', JSON.stringify(defaultArray));
    }

    return (
      <section id='classSchedule'>
        {classListData.loading && <Spinner />}
        {USER_DATA && USER_DATA.data && USER_DATA.data.length > 0 &&<div>
          <Row>
            <Col md={8} sm={6} xs={12} className='hidden-xs'>
              <div className='visible-lg'><HeaderLabel headerLabel={translateText('common:CLASS_SCHEDULE')} /></div>
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
