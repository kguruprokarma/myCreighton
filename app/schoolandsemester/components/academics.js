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
import PreviousNext from './previousNext';

class Academics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedArray: {},
      descToggle: false,
      mobileAccordToggle: true
    };
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.mobileShowAllAccordions = this.mobileShowAllAccordions.bind(this);
    this.setStateAccordions = this.setStateAccordions.bind(this);
  }

  componentWillMount() {
    this.navigateOnClick();
  }

  setStateAccordions() {
    const tempArray = Object.assign({}, this.state.selectedArray);
    for (let i = 0; i < tempArray.accordionObj.length; i++) {
      tempArray.accordionObj[i].collapse = this.state.mobileAccordToggle;
    }
    this.setState({ selectedArray: tempArray });
  }
  navigateOnClick() {
    const props = this.props;
    if (props.params) {
      const temp = filter(semesterDataObj, { 'objectKey': props.params.categoryname });
      this.setState({ selectedArray: temp[0] });
    } else {
      this.setState({ selectedArray: props.selectedArray });
    }
    this.setState({mobileAccordToggle: true}, () => {
      this.setStateAccordions();
    });
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
      this.setState({ mobileAccordToggle: false }, () => {
        this.setStateAccordions();
      });
    } else {
      this.setState({ mobileAccordToggle: true }, () => {
        this.setStateAccordions();
      });
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
            showAllDesc={props.showAllDesc!==undefined ? props.showAllDesc : this.showAllDesc} 
            data={(props.selectedArray!==undefined ? props.selectedArray : this.state.selectedArray)} 
            showHideDesc={props.descToggle!==undefined ? props.descToggle : this.state.descToggle} 
            showHideAccord={props.accordToggle!==undefined ? props.accordToggle : this.state.mobileAccordToggle} 
            showAllAccordions={props.showAllAccordions!==undefined ? props.showAllAccordions : this.mobileShowAllAccordions}
          />
        </Col>
        <Col>
          {props.routeParams && props.routeParams.categoryname && <PreviousNext currentPath={props.routeParams} navigateOnClick={this.navigateOnClick} />}
        </Col>
      </Row>
    );
  }
}

export default Academics;