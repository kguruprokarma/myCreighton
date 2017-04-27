/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import CalendarEventDetails from '../components/calendarDetails';

it('CalendarDetails is defined', () => {
  const defaultProps = {
    data: {
      event_name: 'Foot Ball Match',
      location: 'Harper',
      starttime: '9:00 am',
      endtime: '3:00 pm',
      timeStamp: '2 days',
      description: 'Today the football match has been postponed',
      contactname: 'Dr. Amanda Wilto',
      contactemail: 'amandawilton@creighton.edu'
    }
  };
  const calendar = shallow(<CalendarEventDetails {...defaultProps} />);

  expect(calendar).toBeDefined();
});  