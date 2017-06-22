/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the mission and ministry details
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserTitle, socket } from '../common/utility';
import { translateText } from '../common/translate';
import * as actionCreators from './actions';
import NotificationDetailView from './components/notificationDetailView';
import NotificationListView from './components/notificationListView';
import Spinner from '../common/spinner';
import HeaderLabel from '../common/headerLabel';
import './style.css';

class Notification extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showDetailNotification: false,
      detailedComponent: null
    };
    this.sendNotification = this.sendNotification.bind(this);
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
    socket.on('connect', () => {
      socket.emit('dismiss', { notificationid: notification.notificationid });
    });
    this.setState({ showDetailNotification: false });
  }

  sendNotification() {
    const notificationObj = {
      publisherKey: 'c87de60d-1e3c-438a-b606-32944749ea42',
      title: 'Test Title',
      message: document.getElementById('new-notification').value,
      netid: '6cb4db8459'
    };
    this.props.postNotifications(notificationObj);
    document.getElementById('new-notification').value = '';
  }
  showDetailNotification(data) {
    this.setState({ detailedComponent: data, showDetailNotification: true });
  }
  showAllNotifications() {
    this.setState({ showDetailNotification: false });
  }


  render() {
    const props = this.props;
    const detailData = this.state.detailedComponent;
    return (
      <section role='region' className='notification-section section-container'>
        {props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:NOTIFICATIONS')} /></div>
        {!this.state.showDetailNotification && <NotificationListView listViewData={props.notificationData} sendNotification={this.sendNotification} showDetailNotification={this.showDetailNotification} showSearchThings={this.showSearchThings} deleteNotification={this.deleteNotification} />}
        {this.state.showDetailNotification && <NotificationDetailView detailData={detailData} showAllNotifications={this.showAllNotifications} deleteNotification={this.deleteNotification} />}
      </section>
    );
  }
}

Notification.propTypes = {
  postNotifications: React.PropTypes.func,
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
