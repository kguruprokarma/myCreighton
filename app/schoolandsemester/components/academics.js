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
      mobileAccordToggle: true,
      activeNavLink: translateText('common:OPEN_REQUESSTS_STATUS')
    };
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.mobileShowAllAccordions = this.mobileShowAllAccordions.bind(this);
    this.accordToggleFunc = this.accordToggleFunc.bind(this);
    this.setStateAccordions = this.setStateAccordions.bind(this);
  }

  componentWillMount() {
    const props = this.props;
    if (props.params) {
      this.navigateOnClick(props.params.categoryname);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const currentPath = window.location.hash.split('/');
      if (currentPath.length > 2) {
        this.navigateOnClick(currentPath[2]);
      }
    }
  }

  setStateAccordions() {
    const tempArray = Object.assign({}, this.state.selectedArray);
    for (let i = 0; i < tempArray.accordionObj.length; i++) {
      tempArray.accordionObj[i].collapse = this.state.mobileAccordToggle;
    }
    this.setState({ selectedArray: tempArray });
  }
  navigateOnClick(pathName) {
    const props = this.props;
    const temp = filter(semesterDataObj, { 'objectKey': pathName });
    if (props.params || (props && props.routeParams)) {
      this.setState({ selectedArray: temp[0] });
    } else {
      this.setState({ selectedArray: props.selectedArray });
    }
    this.setState({ descToggle: false });
    this.setState({ mobileAccordToggle: true }, () => {
      this.setStateAccordions();
    });
    this.setState({ activeNavLink: translateText(temp[0].title) });
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

  accordToggleFunc(accordObj) {
    const accordObjOption = accordObj;
    accordObjOption.collapse = !accordObjOption.collapse;
    let tempCount = 0;
    this.forceUpdate();
    for (let i = 0; i < this.state.selectedArray.accordionObj.length; i++) {
      if (this.state.selectedArray.accordionObj[i].collapse === true) {
        tempCount++;
        if (tempCount === this.state.selectedArray.accordionObj.length - 1) {
          this.setState({ mobileAccordToggle: true });
        }
      }
    }
    for (let i = 0; i < this.state.selectedArray.accordionObj.length; i++) {
      if (this.state.selectedArray.accordionObj[i].collapse === false) {
        tempCount = 0;
        this.setState({ mobileAccordToggle: false });
      }
    }
  }

  render() {
    const props = this.props;
    return (
      <section role='region'>
        <Row>
          <Grid className='hidden-xs semester-internal-nav'>
            <HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} />
          </Grid>
          <Col md={3} sm={4} className='hidden-xs semester-internal-nav'>
            <SemesterNav semesterLinks={SemesterLinks} activeNavLink={props.activeNavLink !== undefined ? props.activeNavLink : this.state.activeNavLink} />
          </Col>
          <Col sm={8} md={9} xs={12} className='semester-internal-data'>
            <SemesterContainer
              showAllDesc={props.showAllDesc !== undefined ? props.showAllDesc : this.showAllDesc}
              data={(props.selectedArray !== undefined ? props.selectedArray : this.state.selectedArray)}
              showHideDesc={props.descToggle !== undefined ? props.descToggle : this.state.descToggle}
              showHideAccord={props.accordToggle !== undefined ? props.accordToggle : this.state.mobileAccordToggle}
              showAllAccordions={props.showAllAccordions !== undefined ? props.showAllAccordions : this.mobileShowAllAccordions}
              accordToggleFunc={props.accordToggleFunc !== undefined ? props.accordToggleFunc : this.accordToggleFunc}
            />
          </Col>
        </Row>
        <Col xs={12} className='mt20'>
          {props.routeParams && props.routeParams.categoryname && <PreviousNext currentPath={props.routeParams} navigateOnClick={this.navigateOnClick} />}
        </Col>
      </section>
    );
  }
}

export default Academics;