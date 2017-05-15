/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
/*import IdleTimer from 'react-idle-timer';*/
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as actionCreators from '../header/actions';
import Footer from '../footer/index';
import Navigation from '../common/mainNav';
import HeaderComponent from '../header/index';
import * as urlConstants from '../constants/urlConstants';
import * as CommonConstants from '../constants/commonConstants';
import * as profileDataAction from '../profile/actions';
//import ConfirmationPopUp from './confirmationPopUp';
import * as ROUTE_URL from '../constants/routeContants';
import { authUserDetails } from '../common/utility';

@translate([], { wait: true })
class Main extends React.PureComponent {

  constructor() {
    super();
    this.hidePopUp = this.hidePopUp.bind(this);
    this.state = {
      isLogin: false
    };
    this.reference='idleTimer';
    this.signOutBind = this.signOut.bind(this);
    this.clearStorage = this.clearStorage.bind(this);
    this._onIdle = this._onIdle.bind(this);
    axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE);
    if (!sessionStorage.getItem('time')) {
      sessionStorage.setItem('time', CommonConstants.SESSION_STORAGE_INTERVAL_TIME);
    }
    this.timer = setInterval(() => {
      let time = parseInt(sessionStorage.getItem('time'));
      time = time - 1000;
      if (time > 0) {
        sessionStorage.setItem('time', time);
      } else {
        clearInterval(this.timer);
        this.clearStorage();
      }
    }, 1000);
    if (!localStorage.getItem('roleInfo')) {
      this.checkRole = setInterval(() => {
        if (localStorage.getItem('roleInfo')) {
          clearInterval(this.checkRole);
          this.role = authUserDetails().userRole;
          const props = this.props;
          if (this.role) {
            if (this.role === CommonConstants.ROLE_FACULTY) {
              props.getFacultyProfileData();
            } else if (this.role === CommonConstants.ROLE_STAFF) {
              props.getStaffProfileData();
            } else if (this.role === CommonConstants.ROLE_STUDENT) {
              props.getStudentProfileData();
            }
          }
        }
      }, 1000);
    }
  }

  componentWillMount() {
    const props = this.props;
    if (props.location.pathname === ROUTE_URL.LOGOUT) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (propsNext.location.pathname === ROUTE_URL.LOGOUT) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }
  hidePopUp() {
    const props = this.props;
    if (props.popUpData) {
      props.popUpClose();
    }
    if (props.filterPopUpData) {
      props.filterPopUpClose();
    }
    if (props.signOut) {
      props.closeSignOutPopUp();
    }
  }

  clearStorage() {
    localStorage.removeItem('roleInfo');
    localStorage.removeItem('infos');
    localStorage.removeItem('lang');
    localStorage.removeItem('classMasterCopy');
    localStorage.removeItem('assignmentMasterCopy');
    localStorage.removeItem('temp');
    sessionStorage.removeItem('time');
    localStorage.removeItem('classDetails');
    //localStorage.removeItem('setFilterValue');
    //localStorage.removeItem('setDisplayOptionValue');
    //localStorage.removeItem('displayOptions');
    localStorage.removeItem('eventList');
    localStorage.removeItem('eventsFilterData');
    location.reload();
  }
  signOut() {
    // const currentUrl = encodeURIComponent(urlConstants.LOCAL_URL);
    //window.location = urlConstants.ADFS_LOGOUT_URL + currentUrl;
    axios.get(urlConstants.ADFS_LOGOUT_URL).then((response) => {
      if (response.status === urlConstants.STATUS_CODE) {
        localStorage.removeItem('roleInfo');
        localStorage.removeItem('infos');
        localStorage.removeItem('lang');
        localStorage.removeItem('classMasterCopy');
        localStorage.removeItem('assignmentMasterCopy');
        localStorage.removeItem('temp');
        sessionStorage.removeItem('time');
        localStorage.removeItem('classDetails');
        //localStorage.removeItem('setFilterValue');
        localStorage.removeItem('setDisplayOptionValue');
        localStorage.removeItem('displayOptions');
        localStorage.removeItem('eventList');
        localStorage.removeItem('eventsFilterData');
        hashHistory.replace(ROUTE_URL.LOGOUT);
        //location.reload();
      }
    }, (error) => {
      console.log(error);
    });
  }
  _onIdle() {
    const props = this.props;
    props.popUpClose();
    props.openSignOutPopUp();
  }
  render() {
    const props = this.props;
    return (
      <div className='view-container'>
        {/* this is header section */}
        {this.state.isLogin && <HeaderComponent currentState={props.location.pathname} param={props.params} />}
        {/* Main Navigation */}
        {this.state.isLogin && <Navigation navDisplay={props.navData} />}
        {/* ./Main Navigation */}
        {/* /this is header section */}
        {/* this is main section */}
        <main role='main' id='content' className='container'>
          <a id='maincontent' className='announced-only'>&nbsp;</a>
          {localStorage.getItem('roleInfo') && props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        {this.state.isLogin && <Footer />}
        {/* /this is footer section */}
        {(props.popUpData || props.filterPopUpData || props.signOut) && <input type='button' className='btn btn-link btnnoPadding popUpPatch' onClick={this.hidePopUp} />}
        {props.feedbackPopup && <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' onClick={this.hidePopUp} />}
        {/*props.signOut && <ConfirmationPopUp onConfirm={this.signOutBind} onCancel={props.closeSignOutPopUp} />*/}
        {/*<IdleTimer
          ref={() => this.reference}
          element={document}
          activeAction={this._onActive}
          idleAction={this._onIdle}
          timeout={commonConstants.IDLE_TIME_OUT}
          format='MM-DD-YYYY HH:MM:ss.SSS'
        />*/}
      </div>
    );
  }
}
Main.propTypes = {
  getFacultyProfileData: React.PropTypes.func,
  getStaffProfileData: React.PropTypes.func,
  getStudentProfileData: React.PropTypes.func
};
const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    navData: storeData.headerReducer.showNav,
    signOut: storeData.headerReducer.signOut,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    feedbackPopup: storeData.feedbackReducer.showFeedbackPopUp,
    profileData: storeData.profileReducer.profileData.data
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileDataAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
