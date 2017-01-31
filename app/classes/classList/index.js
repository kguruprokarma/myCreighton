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

export class Classes extends React.PureComponent {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getClassesDataByWeek()
  }

  render() {
    let USER_DATA = this.props.classesData
    return (
      <section id="classSchedule">
        {USER_DATA && <div>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <HeaderLabel headerLabel="Class Schedule" />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <ClassTabController />
            </Col>
          </Row>
          <ClassBox data={USER_DATA.classes} />
        </div>
        }
      </section>
    );
  }
}

const mapStateToProps = (classesState) => (
  {
    classesData: classesState.classesReducer.classesData.data
  })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Classes)
