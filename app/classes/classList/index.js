/*Created Date: - 20th -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import Perf from 'react-addons-perf';
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
import { filterTodaysClassSchedule, dataSort, dataFilterAddingData, addNextDate, convertEncodeURIComponent, browserTitle, getClassAndAssignmentAPIData } from '../../common/utility';
import AlertComponent from '../../common/alertComponent';
import * as headerActionCreators from '../../header/actions';

export class Classes extends React.PureComponent {

  constructor(props) {
    super(props);
    const classesProps = this.props;
    this.onChangeOfTab = this.onChangeOfTab.bind(this);
    this.onChangeOfTab(classesProps.params.classtab);
    this.initailTime = true;
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
    Perf.start();
  }

  shouldComponentUpdate(nextProps) {
    // return a boolean value
    const prevProps = this.props;
    if (this.initailTime && prevProps.params.classtab === nextProps.catagoryName && nextProps.classesData !== undefined && nextProps.assignmentsData !== undefined) {
      this.initailTime = false;
      return true;
    }
    return nextProps.classesData !== undefined && nextProps.assignmentsData !== undefined && prevProps.params.classtab !== nextProps.params.classtab;
  }

  componentDidUpdate() {
    Perf.stop();
    Perf.printInclusive();
    Perf.printExclusive();
    Perf.printWasted();
  }

  onChangeOfTab(catagoryName) {
    const props = this.props;
    props.onCatagoryChange(catagoryName);
    const result = getClassAndAssignmentAPIData(this.userReqObj).catch((error) => {
      //for catching API error
      props.onReceiveError(error);
    });
    result.then((masterObj) => {
      //successMessage is whatever we passed in the resolve(...) function above.
      //It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      props.getClassesData({ data: masterObj.classMasterCopy });
      props.getAssignmentDetails({ data: masterObj.assignmentMasterCopy });
    });
  }

  render() {
    const classListData = this.props;
    const USER_DATA = convertEncodeURIComponent(classListData.classesData);
    const ASSIGNMENTS_DATA = convertEncodeURIComponent(classListData.assignmentsData);
    const defaultArray = [];
    if (USER_DATA && ASSIGNMENTS_DATA) {
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
      if (classListData.params.classtab === CommonConstants.WEEK) {
        localStorage.setItem('classDetails', JSON.stringify((dataFilterAddingData(defaultArray, CommonConstants.CLASS_BEGIN_TIME, CommonConstants.ASC))));
      } else if (classListData.params.classtab === CommonConstants.TODAY) {
        localStorage.setItem('classDetails', JSON.stringify(dataSort(filterTodaysClassSchedule(defaultArray), CommonConstants.CLASS_BEGIN_TIME, CommonConstants.ASC)));
      } else if (classListData.params.classtab === CommonConstants.LIST) {
        localStorage.setItem('classDetails', JSON.stringify(addNextDate(dataSort(defaultArray, CommonConstants.COURSE_TITLE, CommonConstants.ASC))));
      }
    }

    return (
      <section role='region' id='classSchedule' className='section-container'>
        <Row>
          <Col md={8} sm={6} xs={12} className='hidden-xs'>
            <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:CLASS_SCHEDULE')} /></div>
          </Col>
          {USER_DATA && USER_DATA.data && USER_DATA.data.length > 0 &&
            <Col md={4} sm={6} xs={12} className='controller-buttons classListButtons'>
              <ClassTabController state={this.state.presentState} onChangeOfTab={this.onChangeOfTab} />
            </Col>
          }
        </Row>
        {!(USER_DATA && USER_DATA.data && USER_DATA.data.length > 0) && <Spinner />}
        {USER_DATA && USER_DATA.data && USER_DATA.data.length > 0 &&
          <div>
            <ClassBox data={USER_DATA} catagoryName={classListData.params.classtab} />
          </div>
        }
        {(!USER_DATA && classListData.isError) &&
          <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
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
    loading: classesState.classesReducer.isLoading,
    isError: classesState.classesReducer.error
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, headerActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
