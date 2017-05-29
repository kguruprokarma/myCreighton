/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the mission and ministry details
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import * as actionCreators from './actions';
import NotificationDetailView from './components/notificationDetailView';
import NotificationListView from './components/notificationListView';
import Spinner from '../common/spinner';
import '../notification/style.css';

//const json = require('../locales/en/common.json');

class Notification extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showDetailNotification: false,
      detailedComponent: null
    };
   // this.state={linksArrray: []};
  //  this.linksConstants = {'PROFILE': '/profile', 'MISSION': '/missionandministry'};
    this.sendNotification = this.sendNotification.bind(this);
    /*this.showSearchThings = this.showSearchThings.bind(this);*/
   /* this.showDetailNotification = this.showDetailNotification.bind(this);*/
    this.showAllNotifications = this.showAllNotifications.bind(this);
  }

  componentWillMount() {
    const titleValue = `${translateText('common:MISSION_AND_MINISTRY')}`;
    browserTitle(titleValue);
    //this.newNotificationCount = this.props.newNotificationData;
   // this.props.getNotifications();
    this.props.resetNewNotifications();
  }
  sendNotification() {
   /* setInterval(() => {
      this.props.postNotifications(`Hi team${Math.floor(Math.random() * 100)}`);
    }, 10000);*/
    this.props.postNotifications(document.getElementById('new-notification').value);
    document.getElementById('new-notification').value = '';
  }
/*  showSearchThings() {
    const value2 = (document.getElementById('top_level_search').value).toLowerCase();
    const linksArrray = [];
    for (const key in json) {
      if (json[key].toLowerCase().includes(value2)) {
        const url = key.split('__')[1];
        const object = {
          label: json[key],
          url: this.linksConstants[url]
        };
        linksArrray.push(object);
        console.log(json[key]);
      }
     // console.log(value2);
    }
    this.setState({linksArrray: linksArrray });
  }*/
  showDetailNotification(/*data*/) {
   // this.setState({ detailedComponent: data, showDetailNotification: true });
  }
  showAllNotifications() {
    this.setState({ showDetailNotification: false });
  }
  render() {
    const props = this.props;
    const detailData = this.state.detailedComponent;
    return (
      <section role='region' className='notification-section section-container'>
        {/*        { this.state.linksArrray && this.state.linksArrray.length>0 && this.state.linksArrray.map((search, index) => <div key={index}><Link to={search.url}>
          <div>{search.label}</div>
        </Link></div>)}*/}
        {props.loading && <Spinner />}
        {!this.state.showDetailNotification && <NotificationListView listViewData={props.notificationData} sendNotification={this.sendNotification} showDetailNotification={this.showDetailNotification} showSearchThings={this.showSearchThings} />}
        {this.state.showDetailNotification && <NotificationDetailView detailData={detailData} showAllNotifications={this.showAllNotifications} />}
      </section>
    );
  }
}

Notification.propTypes = {
 /* getNotifications: React.PropTypes.func,*/
  postNotifications: React.PropTypes.func,
  resetNewNotifications: React.PropTypes.func/*,
  newNotificationData: React.PropTypes.Array*/
};

const mapStateToProps = (notification) => (
  {
    loading: notification.notificationReducer.isLoading,
    isError: notification.notificationReducer.error,
    notificationData: notification.notificationReducer.notificationData/*,
    newNotificationData: notification.notificationReducer.newNotificationData*/
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
