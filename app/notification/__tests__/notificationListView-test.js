import React from 'react';
import { shallow } from 'enzyme';
import NotificationListView from '../components/notificationListView';

describe('Notification list view component testing ----->', () => {
  const defaultProps = {
    sendNotification: () => {},
    showDetailNotification: () => {},
    listViewData: [
      {
        'type': 'Security Alert',
        'description': 'Person(s) reported checking for unlocked cars in main student parking lot.',
        'date': new Date()
      },
      {
        'type': 'Undergraduate Change',
        'description': 'The application to the Registrar’s Office for changing from your major has been approved.',
        'date': new Date()
      },
      {
        'type': 'Low Balance Alert',
        'description': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
        'newNotification': true,
        'date': new Date()
      }
    ]
  };
  const NotificationListViewC = shallow(<NotificationListView {...defaultProps} />);
  it('Notification list  view is defined or not', () => {
    expect(NotificationListViewC).toBeDefined();
  });
  it('Notification list view checking length', () => {
    expect(NotificationListViewC.find('.oldNotification').length).toBe(2);
    expect(NotificationListViewC.find('.newNotification').length).toBe(1);
  });
  it('Notification list detail view method clicking', () => {
    NotificationListViewC.find('.newNotification').simulate('click');
  });
});