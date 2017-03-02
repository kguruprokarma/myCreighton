/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { DataSort, DataFilterAddingData, DataTime } from './utility';
import * as ROUTE_URL from '../constants/routeContants';
import * as CommonConstants from '../constants/commonConstants';
import * as actionCreators from '../classes/classList/actions';


let classIds = [];

export class PreviousNext extends React.Component {

  constructor() {
    super();
    this.getLinkIndexAndId = this.getLinkIndexAndId.bind(this);
    this.pushClassesToClassIdsArray = this.pushClassesToClassIdsArray.bind(this);
  }

  componentWillMount() {
    const previousNextData = this.props;
    const catagory = previousNextData.presentCategory;
    if (catagory === CommonConstants.WEEK) {
      previousNextData.getClassesDataByWeek();
    } else if (catagory === CommonConstants.LIST) {
      previousNextData.getClassesDataForAtoZ();
    } else if (catagory === CommonConstants.TODAY) {
      previousNextData.getClassesDataByToday();
    }
  }

  getLinkIndexAndId(previousNextData) {
    if (previousNextData.classList.data && previousNextData.classList.data.classes.length > 0) {
      const catagory = previousNextData.presentCategory;
      if (catagory === CommonConstants.WEEK) {
        classIds = [];
        const classes = new DataFilterAddingData(previousNextData.classList.data.classes);
        this.pushClassesToClassIdsArray(classes);
      } else if (catagory === CommonConstants.LIST) {
        classIds = [];
        const classes = new DataSort(previousNextData.classList.data.classes, 'name', 'ASC');
        this.pushClassesToClassIdsArray(classes);
      } else if (catagory === CommonConstants.TODAY) {
        classIds = [];
        const classes = new DataTime(previousNextData.classList.data.classes, 'time', 'ASC');
        this.pushClassesToClassIdsArray(classes);
      }

      const linkIndex = parseInt(previousNextData.presentIndex);
      if (classIds.length > 1) {
        if (linkIndex === 0) {
          this.previousId = classIds[linkIndex].id;
          this.previousIndex = classIds[linkIndex].index;
          this.nextIndex = classIds[linkIndex + 1].index;
          this.nextId = classIds[linkIndex + 1].id;
        } else if (classIds.length - 1 === linkIndex) {
          this.previousId = classIds[linkIndex - 1].id;
          this.previousIndex = classIds[linkIndex - 1].index;
          this.nextIndex = classIds[linkIndex].index;
          this.nextId = classIds[linkIndex].id;
        } else if (linkIndex > 0 && linkIndex < classIds.length - 1) {
          this.previousId = classIds[linkIndex - 1].id;
          this.previousIndex = classIds[linkIndex - 1].index;
          this.nextIndex = classIds[linkIndex + 1].index;
          this.nextId = classIds[linkIndex + 1].id;
        }
      } else {
        this.previousId = classIds[linkIndex].id;
        this.previousIndex = classIds[linkIndex].index;
        this.nextIndex = classIds[linkIndex].index;
        this.nextId = classIds[linkIndex].id;
      }
    }
  }

  pushClassesToClassIdsArray(classes) {
    classes.map((classData, index) => {
      classIds.push({ index, id: classData.id });
    });
  }

  render() {
    const previousNextData = this.props;
    this.getLinkIndexAndId(previousNextData);
    return (
      <div className='row' >
        <div className='form-group col-xs-6'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${previousNextData.presentCategory}/${this.previousId}/${this.previousIndex}`} activeStyle={{ pointerEvents: 'none', color: 'gray', background: '#ddd', border: '#ddd' }} className='btn btn-primary'>
            <span className='glyphicon glyphicon-chevron-left' /> Previous
          </Link>
        </div>
        <div className='form-group col-xs-6 text-right'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${previousNextData.presentCategory}/${this.nextId}/${this.nextIndex}`} className='btn btn-primary' activeStyle={{ pointerEvents: 'none', color: 'gray', background: '#ddd', border: '#ddd' }}> Next
                    <span className='glyphicon glyphicon-chevron-right' />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    classList: state.classesReducer.classesData
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PreviousNext);