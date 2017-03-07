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
import { AuthUserDetails } from '../common/utility';

const dashboardModulesList = DashboardModulesList;
const userReqObj = {};
userReqObj.primaryKey = 'netid';
export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { shouldHide: true };
    this.onClick = this.onClick.bind(this);
    this.role = this.props.userData ? this.props.userData.userRole : AuthUserDetails().userRole;
    userReqObj.primaryValue = AuthUserDetails().netid;
    if (this.role) { this.props.getUserDetailsData(userReqObj); }
  }

  componentWillMount() {
    this.role = this.props.userData ? this.props.userData.userRole : AuthUserDetails().userRole;
    if (this.role) { this.props.getUserDetailsData(userReqObj); }

    if (window.innerWidth <= CommonConstants.DEVICE_WIDTH) {
      this.setState({ shouldHide: false });
    } else {
      this.setState({ shouldHide: true });
    }
    setTimeout(() => {
      this.forceUpdate();
    }, 40);
  }


  onClick() {
    this.setState({ shouldHide: !this.state.shouldHide });
  }

  render() {
    const { userDetailsData } = this.props;
    if (userDetailsData) {
      userDetailsData.data[0].legal_name.userRole = AuthUserDetails().userRole;
    }
    const dashboardModulesList = DashboardModulesList(this.role);
    return (
      <section id='dashboard'>
        <h1 className='announced-only'>{translateText('common:DASH_BOARD')}</h1>
        <Row className='mb20'>
          <Col sm={5} xs={10} md={5}>
            {userDetailsData && <UserDetail userDetail={userDetailsData.data[0].legal_name} />}
          </Col>
          <Col xs={2} className='hidden-lg hidden-md hidden-sm'>
            <ToggleMealPlan toggle={this.onClick} />
          </Col>
          <Col xs={12} sm={7} md={7}>
            {userDetailsData && <MealPlanView showMeal={this.state.shouldHide} toggleMeal={this.onClick} role={userDetailsData.data[0].legal_name} />}
          </Col>
        </Row>
        <article id='wells'>
          <Row>
            <h1 className='announced-only'>{translateText('common:DASH_BOARD_WELL_SECTION')}</h1>
            <Col md={5} sm={6}>
              {this.role && <ModuleBlock modulelist={dashboardModulesList[0]} />}
            </Col>
            <Col md={5} sm={6} className='col-md-offset-2'>
              {this.role && <ModuleBlock modulelist={dashboardModulesList[1]} />}
            </Col>
            {
              this.role === CommonConstants.ROLE_STUDENT && <Col md={5} sm={6} >
                <ModuleBlock modulelist={dashboardModulesList[2]} />
              </Col>
            }
          </Row>
        </article>
      </section>
    );
  }
}
const mapStateToProps = (dashboardState) => (
  {
    userDetailsData: dashboardState.dashboardReducer.userDetailsData.data,
    userData: dashboardState.auth.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
