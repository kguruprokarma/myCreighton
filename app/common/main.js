/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
//import io from 'socket.io-client';
import FooterComponent from '../footer/index';
import * as actionCreators from '../header/actions';
import * as notificationActions from '../notification/actions';
import Navigation from '../common/mainNav';
import Help from '../help/index';
import HeaderComponent from '../header/index';
import * as urlConstants from '../constants/urlConstants';
import * as CommonConstants from '../constants/commonConstants';
import * as profileDataAction from '../profile/actions';
import * as mealPlanDataAction from '../dashboard/mealPlan/actions';
import * as ROUTE_URL from '../constants/routeContants';
import Spinner from '../common/spinner';

@translate([], { wait: true })
class Main extends React.PureComponent {

  constructor() {
    super();
    this.hidePopUp = this.hidePopUp.bind(this);
    this.state = {
      isLogin: false,
      isRole: false
    };
    this.clearStorage = this.clearStorage.bind(this);
    if (sessionStorage.getItem('first')) {
      axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE);
    }
    if (!sessionStorage.getItem('first')) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status !== 200) { 
            sessionStorage.setItem('first', true);
            const currentUrl = encodeURIComponent(document.URL);
            document.location.replace(urlConstants.ADFS_LOGIN_URL + currentUrl); 
          }  
        }
      };
      xhttp.open('GET', urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE, false);
      xhttp.send(null);
    }
   /* if (!sessionStorage.getItem('time')) {
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
    }, 1000);*/

/*    const socket = io.connect(urlConstants.NOTIFICATION_URL);
    socket.on('connect', () => {
      socket.emit('join', 'Hello World from client');
    });
    socket.on('messages', (data) => {
      console.log(data);
    });
    socket.on('notifications', (msg) => {
      console.log(msg);
    });*/
  }

  componentWillMount() {
    const props = this.props;
    //props.resetNewNotifications();
    if (props.location.pathname === ROUTE_URL.LOGOUT) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
    if (!localStorage.getItem('roleInfo')) {
      this.checkRole = setInterval(() => {
        if (localStorage.getItem('roleInfo')) {
          clearInterval(this.checkRole);
          this.setState({ isRole: true });
          props.getNotifications();
        }
      }, 1000);
    } else {
      this.setState({ isRole: true });
      props.getNotifications();
    }
  }

  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (propsNext.location.pathname === ROUTE_URL.LOGOUT) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
    if (propsNext.location.pathname !== ROUTE_URL.DASHBOARD && this.worker) {
      this.worker.terminate();
      this.worker = undefined;
    } 
    if (propsNext.location.pathname === ROUTE_URL.DASHBOARD && !this.worker) {
      this.startWebWorker();
    }
  }
  
  startWebWorker() {
    const self = this;
    this.worker = new Worker(urlConstants.WEBWORKER_URL);
    this.worker.onmessage = function (event) {
      const MEALPLAN_DATA = JSON.parse(event.data);
      self.props.updateMealPlanData(MEALPLAN_DATA);
    };
    this.worker.postMessage({ url: urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS + urlConstants.MEALPLAN_DATA, interval: CommonConstants.IDLE_TIME_OUT });
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
    //localStorage.removeItem('roleInfo'); do not remove this ANSAR
    localStorage.removeItem('infos');
    localStorage.removeItem('lang');
    localStorage.removeItem('classMasterCopy');
    localStorage.removeItem('assignmentMasterCopy');
    localStorage.removeItem('temp');
    sessionStorage.removeItem('time');
    localStorage.removeItem('classDetails');
    localStorage.removeItem('eventList');
    localStorage.removeItem('eventsFilterData');
    location.reload();
  }

  render() {
    const props = this.props;
    return (
      <div className='view-container'>
        {!this.state.isRole && <Spinner />}
        {/* this is header section */}
        {this.state.isLogin && <HeaderComponent currentState={props.location.pathname} param={props.params} />}
        {/* Main Navigation */}
        {this.state.isLogin && <Navigation navDisplay={props.navData} />}
        {/* ./Main Navigation */}
        {/* /this is header section */}
        {/* this is main section */}
        <main role='main' id='content' className='container'>
          <a id='maincontent' className='announced-only'>&nbsp;</a>
          {this.state.isRole && props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        {this.state.isLogin && <FooterComponent currentState={props.location.pathname} />}
        {/* /this is footer section */}
        {(props.popUpData || props.filterPopUpData || props.signOut) && <input type='button' className='btn btn-link btnnoPadding popUpPatch' onClick={this.hidePopUp} />}
        {props.feedbackPopup && <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' onClick={this.hidePopUp} />}
        {props.helpPopUpData && <Help currentState={props.location.pathname} />}
      </div>
    );
  }
}

const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    navData: storeData.headerReducer.showNav,
    signOut: storeData.headerReducer.signOut,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    feedbackPopup: storeData.feedbackReducer.showFeedbackPopUp,
    profileData: storeData.profileReducer.profileData.data,
    helpPopUpData: storeData.helpReducer.showHelpPopUp
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileDataAction, notificationActions, mealPlanDataAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
