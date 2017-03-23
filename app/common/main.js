/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { translateText } from '../common/translate';
import * as actionCreators from '../header/actions';
import Footer from '../footer/index';
import Navigation from '../common/mainNav';
import Header from '../header/index';

@translate([], { wait: true })

class Main extends React.PureComponent {

  constructor() {
    super();
    this.hidePopUp = this.hidePopUp.bind(this);
    this.state = {
      isLogin: false
    };
  }

  componentWillMount() {
    if (localStorage.roleInfo === undefined) {
      hashHistory.replace('/');
      this.setState({ isLogin: false });
    } else if (localStorage.roleInfo === undefined || this.props.location.pathname === '/') {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (localStorage.roleInfo === undefined && nextProps.location.pathname !== '/') {
      hashHistory.replace('/');
      this.setState({ isLogin: false });
    } else if (localStorage.roleInfo && nextProps.location.pathname !== '/') {
      this.setState({ isLogin: true });
    } else if (localStorage.roleInfo === undefined || nextProps.location.pathname === '/') {
      this.setState({ isLogin: false });
    }
  }
  hidePopUp() {
    if (this.props.popUpData) {
      this.props.popUpClose();
    }
    if (this.props.filterPopUpData) {
      this.props.filterPopUpClose();
    } 
  }
  render() {
    const props = this.props;
    document.title = props.children.props.route.title + translateText('common:MY_CREIGHTON');
    return (
      <div className='view-container'>
        {/* this is header section */}
        {this.state.isLogin && <Header currentState={props.location.pathname} param={props.params} />}
        {/* Main Navigation */}
        {this.state.isLogin && <Navigation navDisplay={props.navData} />}
        {/* ./Main Navigation */}
        {/* /this is header section */}
        {/* this is main section */}
        <main role='main' id='content' className='container'><a id='maincontent' />
          {props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        {this.state.isLogin && <Footer />}
        {/* /this is footer section */}
        {(this.props.popUpData || this.props.filterPopUpData) && <div className='popUpPatch' onClick={this.hidePopUp} />}
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
