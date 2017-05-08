import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
//import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
import SemesterContainer from './semesterContainer';
import SemesterNav from './semesterNav';
//import * as actionCreators from '../actions';
import { SemesterLinks } from './semesterLinks';
import { semesterDataObj } from '../constants/semesterData';
import { translateText } from '../../common/translate';
import HeaderLabel from '../../common/headerLabel';

class Academics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedArray: {},
      descToggle: false,
      mobileAccordToggle: false
    };
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.mobileShowAllAccordions = this.mobileShowAllAccordions.bind(this);
  }

  componentWillMount() {
    this.navigateOnClick();
  }

  navigateOnClick() {
    const props = this.props;
    if (props.params) {
      const temp = filter(semesterDataObj, { 'objectKey': props.params.categoryname });
      this.setState({ selectedArray: temp[0] });
    } else {
      this.setState({ selectedArray: props.selectedArray });
    }
  }

  showAllDesc() {
    if (this.state.descToggle) {
      this.setState({ descToggle: false });
    } else {
      this.setState({ descToggle: true });
    }
  }

  mobileShowAllAccordions() {
    if (this.state.mobileAccordToggle) {
      this.setState({ mobileAccordToggle: false });
    } else {
      this.setState({ mobileAccordToggle: true });
    }
  }

  render() {
    const props = this.props;
    return (
      <Row>
        <Grid className='hidden-xs semester-internal-nav'>
          <HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} />
        </Grid>
        <Col md={3} sm={4} className='hidden-xs semester-internal-nav'>
          <SemesterNav semesterLinks={SemesterLinks} />
        </Col>
        <Col sm={8} md={9} xs={12} className='semester-internal-data'>
          <SemesterContainer
            showAllDesc={props.showAllDesc ? props.showAllDesc : this.showAllDesc} 
            data={(props.selectedArray ? props.selectedArray : this.state.selectedArray)} 
            showHideDesc={props.descToggle ? props.descToggle : this.state.descToggle} 
            showHideAccord={props.accordToggle ? props.accordToggle : this.state.mobileAccordToggle} 
            showAllAccordions={props.showAllAccordions ? props.showAllAccordions : this.mobileShowAllAccordions}
          />
        </Col>
      </Row>
    );
  }
}

export default Academics;

