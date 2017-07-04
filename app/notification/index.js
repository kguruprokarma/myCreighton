/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the mission and ministry details
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserTitle, dataSort, SocketSingleton } from '../common/utility';
import { translateText } from '../common/translate';
import * as actionCreators from './actions';
import NotificationDetailView from './components/notificationDetailView';
import NotificationListView from './components/notificationListView';
import Spinner from '../common/spinner';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import {CREATED_DATE, DESC_ORDER} from '../constants/commonConstants';

class Notification extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showDetailNotification: false,
      detailedComponent: null
    };
    this.showDetailNotification = this.showDetailNotification.bind(this);
    this.showAllNotifications = this.showAllNotifications.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }

  componentWillMount() {
    const titleValue = `${translateText('common:NOTIFICATIONS')}`;
    browserTitle(titleValue);
    this.props.resetNewNotifications();
  }

  deleteNotification(notification) {
    // createAndSendLogs('info', 'deleteNotification', 'Notification', JSON.stringify(notification));
    let socket = SocketSingleton.getInstance();
    let deleteFlag = true;
    socket.on('connect', () => {
      if (deleteFlag) {
        socket.emit('dismiss', { notificationid: notification.notificationid });
        deleteFlag = false;
        socket = null;
      }
    });
    this.setState({ showDetailNotification: false });
  }

  showDetailNotification(data) {
    this.setState({ detailedComponent: data, showDetailNotification: true }, () => {
      // createAndSendLogs('info', 'showDetailNotification', 'Notification', JSON.stringify(this.state));
    });
  }
  showAllNotifications() {
    this.setState({ showDetailNotification: false }, () => {
      // createAndSendLogs('info', 'showAllNotifications', 'Notification', JSON.stringify(this.state.showDetailNotification));
    });
  }


  render() {
    const props = this.props;
    const detailData = this.state.detailedComponent;
    const notificationData = dataSort(props.notificationData, CREATED_DATE, DESC_ORDER);
    return (
      <section role='region' className='notification-section section-container'>
        {props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:NOTIFICATIONS')} /></div>
        {!this.state.showDetailNotification && <NotificationListView listViewData={notificationData} showDetailNotification={this.showDetailNotification} showSearchThings={this.showSearchThings} deleteNotification={this.deleteNotification} />}
        {this.state.showDetailNotification && <NotificationDetailView detailData={detailData} showAllNotifications={this.showAllNotifications} deleteNotification={this.deleteNotification} />}
      </section>
    );
  }
}

Notification.propTypes = {
  resetNewNotifications: React.PropTypes.func
};

const mapStateToProps = (notification) => (
  {
    loading: notification.notificationReducer.isLoading,
    isError: notification.notificationReducer.error,
    notificationData: notification.notificationReducer.notificationData
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
