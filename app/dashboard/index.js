/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../common/translate';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import DashboardModulesList from '../common/dashboardModulesDetail';
import * as CommonConstants from '../constants/commonConstants';
import * as actionCreators from './actions';
import style from './style.css';

const dashboardModulesList = DashboardModulesList;

export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { shouldHide: true };
    this.onClick = this.onClick.bind(this);
    this.props.getUserDetailsData('/student');
  }

  componentWillMount() {
    this.role = this.props.params.roletype;
    if (this.role !== undefined) {
      this.props.getUserDetailsData(`/${this.role}`);
    } else {
      this.role = 'student';
      this.props.getUserDetailsData('/student');
    }
    if (window.innerWidth <= CommonConstants.DEVICE_WIDTH) {
      this.setState({ shouldHide: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.role !== nextProps.params.roletype && nextProps.params.roletype) {
      this.role = nextProps.params.roletype;
      this.props.getUserDetailsData(`/${this.role}`);
    }
  }

  onClick() {
    this.setState({ shouldHide: !this.state.shouldHide });
  }

  render() {
    const { userDetailsData } = this.props;
    const dashboardModulesList = DashboardModulesList(this.role);
    return (
      <section id='dashboard'>
        <h1 className='announced-only'>{translateText('common:DASH_BOARD')}</h1>
        <Row className='mb20'>
          <Col sm={5} xs={10} md={5}>
            {userDetailsData && <UserDetail userDetail={userDetailsData} />}
          </Col>
          <Col xs={2} className='hidden-lg hidden-md hidden-sm'>
            <ToggleMealPlan toggle={this.onClick} />
          </Col>
          <Col xs={12} sm={7} md={7}>
            <MealPlanView showMeal={this.state.shouldHide} toggleMeal={this.onClick} role={userDetailsData} />
          </Col>
        </Row>
        <article id='wells'>
          <Row>
            <h1 className='announced-only'>{translateText('common:DASH_BOARD_WELL_SECTION')}</h1>
            <Col md={5} sm={6}>
              <ModuleBlock modulelist={dashboardModulesList[0]} />
            </Col>
            <Col md={5} sm={6} className='col-md-offset-2'>
              <ModuleBlock modulelist={dashboardModulesList[1]} />
            </Col>
            { 
                this.role === CommonConstants.ROLE_STUDENT || this.role === undefined ? 
                    <Col md={5} sm={6} >
                    <ModuleBlock modulelist={dashboardModulesList[2]} />
                    </Col> : null
            }
          </Row>
        </article>
      </section>
    );
  }
}
const mapStateToProps = (dashboardState) => (
  {
    userDetailsData: dashboardState.dashboardReducer.userDetailsData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
