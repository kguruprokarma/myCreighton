import React from 'react';
import { shallow } from 'enzyme';
import NotificationListView from '../components/notificationListView';

describe('Notification list view component testing ----->', () => {
  const defaultProps = {
    sendNotification: () => { },
    showDetailNotification: () => { },
    listViewData: [
      {
        'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
        'publisherid': 'PK',
        'netid': '7d5872b5b9',
        'title': 'Security Alert',
        'message': 'Person(s) reported checking for unlocked cars in main student parking lot.',
        'dismissed': false,
        'created': '2017-06-06T19:54:41.489Z'
      },
      {
        'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
        'publisherid': 'PK',
        'netid': '7d5872b5b9',
        'title': 'Undergraduate Change',
        'message': 'The application to the Registrar’s Office for changing from your major has been approved.',
        'dismissed': false,
        'created': '2017-06-06T19:54:41.489Z'
      },
      {
        'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
        'publisherid': 'PK',
        'netid': '7d5872b5b9',
        'title': 'Low Balance Alert',
        'message': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
        'dismissed': false,
        'created': '2017-06-06T19:54:41.489Z'
      }
    ]
  };
  const NotificationListViewC = shallow(<NotificationListView {...defaultProps} />);
  it('Notification list  view is defined or not', () => {
    expect(NotificationListViewC).toBeDefined();
  });
  it('Notification list view checking length', () => {
    expect(NotificationListViewC.find('.oldNotification').length).toBe(3);
    //expect(NotificationListViewC.find('.newNotification').length).toBe(1);
  });
  it('Notification list detail view method clicking', () => {
    NotificationListViewC.find('.oldNotification').at(0).simulate('click');
  });
});