import React from 'react';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import moment from 'moment';
import { DOWN_ARROW } from '../../constants/imageConstants';

const NotificationListView = (notificationListViewProps) => (
  <div>
    <Row>
      <Col xs={12} className='mb20'>
        <input type='text' id='new-notification' placeholder='new notification' />
        <button onClick={notificationListViewProps.sendNotification}>Notify</button>
        {/*  <input type='text' id='top_level_search' placeholder='search' />
        <button onClick={notificationListViewProps.showSearchThings}>search</button>*/}
      </Col>
    </Row>
    <ListGroup className='main-list-group notification-list'>
      {notificationListViewProps.listViewData && notificationListViewProps.listViewData.length > 0 && notificationListViewProps.listViewData.map((notification, notificationIndex) => (<ListGroupItem key={notificationIndex} className={(notification.newNotification) ? 'newNotification' : 'oldNotification'} onClick={() => notificationListViewProps.showDetailNotification(notification)}>
        <Row>
          <Col md={11} sm={10} xs={9}>
            <p className='notification-title fs1pt06 openSansRegular'>{notification.type}</p>
          </Col>
          <Col md={1} sm={2} xs={3} className='text-center'>
            <p className='notification-date fs0pt86'><span>{moment(notification.date).format('h:mm a')}</span><br />{moment(notification.date).format('MMM DD')}</p>
            <p><img src={DOWN_ARROW} alt='' className='right-rotated mb10' /></p>
          </Col>
        </Row>
      </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default NotificationListView;