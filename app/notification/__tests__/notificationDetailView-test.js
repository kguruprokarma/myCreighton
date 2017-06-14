import React from 'react';
import { shallow } from 'enzyme';
import NotificationDetailView from '../components/notificationDetailView';

describe('Notification detailView testing component testing ----->', () => {
  const defaultProps = {
    detailData: {
      'type': 'Security Alert',
      'description': 'Person(s) reported checking for unlocked cars in main student parking lot.',
      'date': new Date()
    }
  };
  const NotificationDetailViewC = shallow(<NotificationDetailView {...defaultProps} />);
  it('Notification detail view is defined or not', () => {
    expect(NotificationDetailViewC).toBeDefined();
  });
  it('Notification detail view checking heading text', () => {
    expect(NotificationDetailViewC.find('.notificationHeading').text()).toBe(defaultProps.detailData.type);
  });
  it('Notification detail view checking description text', () => {
    expect(NotificationDetailViewC.find('.notificationDescription').text()).toBe(defaultProps.detailData.description);
  });
});