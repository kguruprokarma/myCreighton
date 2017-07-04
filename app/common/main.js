/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Perf from 'react-addons-perf';
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
import { translateText } from '../common/translate';
import { SocketSingleton } from '../common/utility';
import * as ROUTE_URL from '../constants/routeContants';
import Spinner from '../common/spinner';

window.Perf = Perf;
@translate([], { wait: true })

class Main extends React.PureComponent {

  constructor(props) {
    super(props);
    this.hidePopUp = this.hidePopUp.bind(this);
    this.state = {
      isRole: false
    };
    if (sessionStorage.getItem('first')) {
      axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE);
    }
    if (!sessionStorage.getItem('first')) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status !== 200) {
            sessionStorage.setItem('first', true);
            const currentUrl = encodeURIComponent(document.URL);
            document.location.replace(urlConstants.ADFS_LOGIN_URL + currentUrl);
          }
        }
      };
      xhttp.open('GET', `${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE}?t=${new Date().getTime()}`, false);
      xhttp.send();
    }
    const socket = SocketSingleton.getInstance().open();
    socket.on('notifications', (msg) => {
      props.updateNotifications(msg);
    });
  }

  componentWillMount() {
    if (!localStorage.getItem('roleInfo')) {
      this.checkRole = setInterval(() => {
        if (localStorage.getItem('roleInfo')) {
          clearInterval(this.checkRole);
          this.setState({ isRole: true });
        }
      }, 1000);
    } else {
      this.setState({ isRole: true });
    }
  }

  componentWillReceiveProps(nextProps) {
   // const props = this.props;
    const propsNext = nextProps;
    const newUrl = propsNext.location.pathname.split('/')[1];
    if (propsNext.location.pathname !== this.props.location.pathname) {
      if (['eventdetails', 'eventlist', 'classes', 'classesdetails'].indexOf(newUrl) === -1) {
        localStorage.removeItem('assignmentMasterCopy');
        localStorage.removeItem('eventList');
        localStorage.removeItem('classDetails');
        localStorage.removeItem('classMasterCopy');
        localStorage.removeItem('eventsFilterData');
      }
    }
    if (newUrl.indexOf('notifications')>=0) {
      this.props.resetNewNotifications();
    } else {
      this.props.setNewNotifications();
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

  render() {
    const props = this.props;
    return (
      <div className='view-container'>
        {!this.state.isRole && <Spinner />}
        {/* this is header section */}
        <HeaderComponent currentState={props.location.pathname} param={props.params} />
        {/* Main Navigation */}
        <Navigation navDisplay={props.navData} />
        {/* ./Main Navigation */}
        {/* /this is header section */}
        {/* this is main section */}
        <main role='main' id='content' className='container'>
          <h1 id='maincontent' className='announced-only'>{translateText('common:PAGE_CONTENT')}</h1>
          {this.state.isRole && props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        <FooterComponent currentState={props.location.pathname} />
        {/* /this is footer section */}
        {(props.popUpData || props.filterPopUpData || props.signOut) && <input type='button' className='btn btn-link btnnoPadding popUpPatch' onClick={this.hidePopUp} />}
        {props.feedbackPopup && <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' onClick={this.hidePopUp} />}
        {props.helpPopUpData && <Help currentState={props.location.pathname} />}
      </div>
    );
  }
}

Main.propTypes = {
  updateNotifications: React.PropTypes.func,
  setNewNotifications: React.PropTypes.func,
  resetNewNotifications: React.PropTypes.func,
  location: React.PropTypes.Object
};

const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    navData: storeData.headerReducer.showNav,
    signOut: storeData.signOutReducer.signOut,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    feedbackPopup: storeData.feedbackReducer.showFeedbackPopUp,
    profileData: storeData.profileReducer.profileData.data,
    helpPopUpData: storeData.helpReducer.showHelpPopUp
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileDataAction, notificationActions, mealPlanDataAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
