/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the summary tabs of school and semester.
*/

import React from 'react';
//import Accordion from '../common/accordion';
import { Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import Academics from './components/academics';
import SemesterNav from './components/semesterNav';
import { SemesterLinks } from './components/semesterLinks';
import * as actionCreators from './actions';

export class SchoolAndSemester extends React.PureComponent {
  constructor() {
    super();

    this.toggleClick = this.toggleClick.bind(this);
  }
  componentWillMount() {
    const titleValue = `${translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')}`;
    browserTitle(titleValue);
  }
  toggleClick() {
    const props=this.props;
    if (props.isToggle) {
      props.toggleHideNavView(); 
    } else {
      props.toggleShowNavView();
    } 
  }

  render() {
    return (
      <section role='region' className='school-and-semester'>
        {/*<Accordion title='Open Requests Status' description='Dart' />
        <Accordion title='Semester Start' description='Semester Start Description' />*/}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} /></div>
        <Row>
          <Col md={3} sm={4}>
            <SemesterNav semesterLinks={SemesterLinks} toggleClick={this.toggleClick} />
          </Col>
          <Col sm={8} md={9} xs={12} className='hidden-xs'>
            <Academics />
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isToggle: state.schoolAndSemesterReducer.isToggle
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SchoolAndSemester);