import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
import SemesterContainer from './semesterContainer';
import SemesterNav from './semesterNav';
import * as actionCreators from '../actions';
import { SemesterLinks } from './semesterLinks';
import { semesterDataObj } from '../constants/semesterData';
import { translateText } from '../../common/translate';
import HeaderLabel from '../../common/headerLabel';

export class Academics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedArray: {},
      descToggle: false,
      accordToggle: false
    };
    //this.toggleClick = this.toggleClick.bind(this);
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.showAllAccordions = this.showAllAccordions.bind(this);
  }

  componentWillMount() {
    this.navigateOnClick();
  }

  /*  toggleClick() {
      const props = this.props;
      console.log('props.isToggle: ', props.isToggle);
      if (props.isToggle) {
        props.toggleHideNavView();
      } else {
        props.toggleShowNavView();
      }
    }*/

  navigateOnClick() {
    if (this.props.params) {
      const temp = filter(semesterDataObj, { 'objectKey': this.props.params.categoryname });
      this.setState({ selectedArray: temp[0] });
    } else {
      this.setState({ selectedArray: this.props.selectedArray });
    }
  }

  showAllDesc() {
    this.state.descToggle ? this.setState({ descToggle: false }) : this.setState({ descToggle: true });
  }

  showAllAccordions() {
    this.state.accordToggle ? this.setState({accordToggle: false}) : this.setState({accordToggle: true});
  }

  render() {
    const { showAllDesc, showAllAccordions } = this.props;
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
            showAllDesc={this.props.showAllDesc ? this.props.showAllDesc : this.showAllDesc} data={(this.props.selectedArray ? this.props.selectedArray : this.state.selectedArray)} showHideDesc={this.props.descToggle? this.props.descToggle: this.state.descToggle} showHideAccord={this.props.accordToggle? this.props.accordToggle: this.state.accordToggle} showAllAccordions={this.props.showAllAccordions?this.props.showAllAccordions: this.showAllAccordions} 
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isToggle: state.schoolAndSemesterReducer.isToggle
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Academics);

