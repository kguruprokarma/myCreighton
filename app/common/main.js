/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as actionCreators from '../header/actions';
import Footer from '../footer/index';
import Navigation from '../common/mainNav';
import HeaderComponent from '../header/index';
import * as urlConstants from '../constants/urlConstants';

@translate([], { wait: true })

class Main extends React.PureComponent {

  constructor() {
    super();
    this.hidePopUp = this.hidePopUp.bind(this);
    this.state = {
      isLogin: false
    };

    if (navigator.cookieEnabled) {
    // Cookies are enabled
      if (document && document.cookie) {
        const cookies = document.cookie.replace(/ /g, '');
        if (cookies.indexOf(';s=') === -1) {
          const currentUrl = encodeURIComponent(document.URL);
          window.location = urlConstants.ADFS_LOGIN_URL + currentUrl;
        }
      }
    } else {
        // Cookies are disabled
      console.log('Your browser cookies were disabled.');
    }
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
        {(props.popUpData || props.filterPopUpData) && <input type='button' className='btn btn-link btnnoPadding popUpPatch' onClick={this.hidePopUp} />}
      </div>
    );
  }
}
const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    navData: storeData.headerReducer.showNav,
    filterPopUpData: storeData.headerReducer.showFilterPopUp
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
