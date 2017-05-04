/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the summary tabs of school and semester.
*/

import React from 'react';
//import Accordion from '../common/accordion';
import { Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter } from 'lodash';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import { Academics } from './components/academics';
import SemesterNav from './components/semesterNav';
import { SemesterLinks } from './components/semesterLinks';
import * as actionCreators from './actions';
import { semesterDataObj } from './constants/semesterData';

export class SchoolAndSemester extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedArray: {},
      descToggle: false,
      accordToggle: false
    };
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.showAllAccordions = this.showAllAccordions.bind(this);
  }
  componentWillMount() {
    const titleValue = `${translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')}`;
    browserTitle(titleValue);
    this.navigateOnClick('Academics');
  }

  navigateOnClick(val) {
    const temp = filter(semesterDataObj, { 'objectKey': val });
    this.setState({ selectedArray: temp[0] });
  }

  showAllDesc() {
    this.state.descToggle ? this.setState({descToggle: false}) : this.setState({descToggle: true});
  }

  showAllAccordions() {
    this.state.accordToggle ? this.setState({accordToggle: false}) : this.setState({accordToggle: true});
  }

  render() {
    console.log('index: ', this.props);
    return (
      <section role='region' className='school-and-semester section-container init-top'>
        {/*<Accordion title='Open Requests Status' description='Dart' />
        <Accordion title='Semester Start' description='Semester Start Description' />*/}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} /></div>
        <Row>
          <Col md={3} sm={4}>
            {/*<SemesterNav semesterLinks={SemesterLinks} toggleClick={this.toggleClick} />*/}
            <SemesterNav semesterLinks={SemesterLinks} navToLink={this.navigateOnClick} />
          </Col>
          <Col sm={8} md={9} xs={12} className='hidden-xs'>
            <Academics selectedArray={this.state.selectedArray} descToggle={this.state.descToggle} 
            showAllDesc={this.showAllDesc} accordToggle={this.state.accordToggle} 
            showAllAccordions={this.showAllAccordions}/>
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