import React from 'react';
import { shallow } from 'enzyme';
import NotificationDetailView from '../components/notificationDetailView';

describe('Notification detailView testing component testing ----->', () => {
  const defaultProps = {
    detailData: {
      'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
      'publisherid': 'PK',
      'netid': '7d5872b5b9',
      'title': 'Low Balance Alert',
      'message': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
      'dismissed': false,
      'created': '2017-06-06T19:54:41.489Z'
    }
  };
  const NotificationDetailViewC = shallow(<NotificationDetailView {...defaultProps} />);
  it('Notification detail view is defined or not', () => {
    expect(NotificationDetailViewC).toBeDefined();
  });
  it('Notification detail view checking heading text', () => {
    expect(NotificationDetailViewC.find('.notificationHeading').text()).toBe(defaultProps.detailData.title);
  });
  it('Notification detail view checking description text', () => {
    expect(NotificationDetailViewC.find('.notificationDescription').text()).toBe(defaultProps.detailData.message);
  });
});