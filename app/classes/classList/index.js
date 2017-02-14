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

export class Classes extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onChangeOfTab = this.onChangeOfTab.bind(this);
    this.onChangeOfTab(this.props.params.classtab);
  }

  onChangeOfTab(catagoryName) {
    this.props.onCatagoryChange(catagoryName);
    if (catagoryName === "week") {
      this.props.getClassesDataByWeek();
    } else if (catagoryName === "list") {
      this.props.getClassesDataForAtoZ();
    } else if (catagoryName === "today") {
      this.props.getClassesDataByToday();
    }
  }

  render() {

    let USER_DATA = this.props.classesData;
    return (
      <section id="classSchedule">
        {USER_DATA && <div>
          <Row>
            <Col md={8} sm={6} xs={12} className="hidden-xs">
              <HeaderLabel headerLabel={translateText('common:CLASS_SCHEDULE')} />
            </Col>
            <Col md={4} sm={6} xs={12} className="controller-buttons">
              <ClassTabController state={this.props.params.classtab} onChangeOfTab={this.onChangeOfTab} />
            </Col>
          </Row>
          <ClassBox data={USER_DATA.classes} catagoryName={this.props.params.classtab} />
        </div>
        }
      </section>
    );
  }
}

const mapStateToProps = (classesState) => {
  return (
    {
      classesData: classesState.classesReducer.classesData.data,
      catagoryName: classesState.classesReducer.catagoryName
    })
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Classes)
