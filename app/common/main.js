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
import * as commonConstants from '../constants/commonConstants';
import ConfirmationPopUp from './confirmationPopUp';

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
    this._onIdle = this._onIdle.bind(this);
    axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ROLE);
  }

  componentWillMount() {
    const props = this.props;
    if (localStorage.roleInfo === undefined) {
      hashHistory.replace('/');
      this.setState({ isLogin: false });
    } else if (localStorage.roleInfo === undefined || props.location.pathname === '/') {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (localStorage.roleInfo === undefined && propsNext.location.pathname !== '/') {
      hashHistory.replace('/');
      this.setState({ isLogin: false });
    } else if (localStorage.roleInfo && propsNext.location.pathname !== '/') {
      this.setState({ isLogin: true });
    } else if (localStorage.roleInfo === undefined || propsNext.location.pathname === '/') {
      this.setState({ isLogin: false });
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
        localStorage.removeItem('classDetails');
        //localStorage.removeItem('setFilterValue');
        //localStorage.removeItem('setDisplayOptionValue');
        //localStorage.removeItem('displayOptions');
        localStorage.removeItem('eventList');
        localStorage.removeItem('eventsFilterData');
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
          {props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        {this.state.isLogin && <Footer />}
        {/* /this is footer section */}
        {(props.popUpData || props.filterPopUpData || props.signOut) && <input type='button' className='btn btn-link btnnoPadding popUpPatch' onClick={this.hidePopUp} />}
        {props.signOut && <ConfirmationPopUp onConfirm={this.signOutBind} onCancel={props.closeSignOutPopUp} />}
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
const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    navData: storeData.headerReducer.showNav,
    signOut: storeData.headerReducer.signOut,
    filterPopUpData: storeData.headerReducer.showFilterPopUp
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
