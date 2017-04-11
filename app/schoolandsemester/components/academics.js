import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import SemesterContainer from './semesterContainer';
import SemesterNav from './semesterNav';
import * as actionCreators from '../actions';
import { SemesterLinks } from './semesterLinks';
import { translateText } from '../../common/translate';
import HeaderLabel from '../../common/headerLabel';

const semesterDataObj = [
  {
    title: 'Academics',
    headlines: 'School Tasks and Activities',
    description: 'Frequent functions and information needed during the semester.',
    accordionObj: [{
      accordionTitle: 'Changes',
      links: [
        'Change Undergraduate College'
      ]
    }]
  }
];
class Academics extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleClick() {
    const props = this.props;
    if (props.isToggle) {
      props.toggleHideNavView();
    } else {
      props.toggleShowNavView();
    }
  }

  render() {
    return (
      <Row>
        <Grid className='hidden-xs semester-internal-nav'>
          <HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} />
        </Grid>
        <Col md={3} sm={4} className='hidden-xs semester-internal-nav'><SemesterNav semesterLinks={SemesterLinks} toggleClick={this.toggleClick} /></Col>
        <Col sm={8} md={9} xs={12} className='semester-internal-data'><SemesterContainer data={semesterDataObj[0]} /></Col>
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

