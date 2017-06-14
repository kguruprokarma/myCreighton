import React from 'react';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { DOWN_ARROW } from '../../constants/imageConstants';

const NotificationDetailView = (notificationDetailViewProps) => (<section>
  <Row className='pb20'>
    <Col md={11} sm={10} xs={9}>
      <p className='notification-title fs1pt06 openSansRegular notificationHeading'>{notificationDetailViewProps.detailData.type}</p>
    </Col>
    <Col md={1} sm={2} xs={3} className='text-center'>
      <p className='notification-time fs0pt86 notificationTimeAndDate'>{moment(notificationDetailViewProps.detailData.date).format('h:mm a')}<br />{moment(notificationDetailViewProps.detailData.date).format('MMM DD')}</p>
      <button className='btn btn-link back-btn btnnoPadding' onClick={notificationDetailViewProps.showAllNotifications}><img src={DOWN_ARROW} alt='' className='right-rotated mb10' /></button>
    </Col>
  </Row>
  <Row>
    <Col md={11} sm={10} xs={9}>
      <p className='notification-data openSansRegular fs1em notificationDescription'>{notificationDetailViewProps.detailData.description}</p>
    </Col>
  </Row>
</section>
);

export default NotificationDetailView;