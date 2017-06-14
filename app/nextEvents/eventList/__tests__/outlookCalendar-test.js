import React from 'react';
import { shallow } from 'enzyme';
import OutlookCalendar from '../components/outlookCalendar';

describe('Next Event OutlookCalendar component testing ----->', () => {
  const defaultProps = {
    'startdate': '2017-05-05',
    'event_id': '58011',
    'allday_event': 'false',
    'building_name': 'Hixson-Lied Science Building',
    'calendars': 'Student Life',
    'contactemail': 'kristinawilliams@creighton.edu',
    'contactname': 'Kristina Williams',
    'contactphone': null,
    'description': 'School of Pharmacy and Health Professions',
    'enddate': '2017-05-05',
    'endtime': '21:00:00',
    'event_name': 'Phi Delta Chi Formal Meeting',
    'location': 'HLSB G04',
    'starttime': '19:30:00',
    'status': '1'
  };
  const defaultProps1 = {
    'startdate': '2017-05-05',
    'event_id': '58011',
    'allday_event': 'false',
    'building_name': '',
    'calendars': 'Student Life',
    'contactemail': 'kristinawilliams@creighton.edu',
    'contactname': 'Kristina Williams',
    'contactphone': null,
    'description': 'School of Pharmacy and Health Professions',
    'enddate': '2017-05-05',
    'endtime': '',
    'event_name': '',
    'location': 'HLSB G04',
    'starttime': '19:30:00',
    'status': '1'
  };

  const defaultProps2 = {
    'startdate': '2017-05-05',
    'event_id': '58011',
    'allday_event': 'true',
    'building_name': '',
    'calendars': 'Student Life',
    'contactemail': 'kristinawilliams@creighton.edu',
    'contactname': 'Kristina Williams',
    'contactphone': null,
    'description': 'School of Pharmacy and Health Professions',
    'enddate': '2017-05-05',
    'endtime': '',
    'event_name': '',
    'location': 'HLSB G04',
    'starttime': '19:30:00',
    'status': '1'
  };

  const OutlookCalendarC = shallow(<OutlookCalendar data={defaultProps} />);
  const OutlookCalendarC1 = shallow(<OutlookCalendar data={defaultProps1} />);
  const OutlookCalendarC2 = shallow(<OutlookCalendar data={defaultProps2} />);

  it('OutlookCalendar component is defined', () => {
    expect(OutlookCalendarC).toBeDefined();
  });

  it('OutlookCalendar component by property check', () => {
    expect(OutlookCalendarC.unrendered.props.data.startDate).toBe(defaultProps.startDate);
  });

  it('OutlookCalendar recived props', () => {
    expect(JSON.stringify(OutlookCalendarC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });

  it('OutlookCalendar component is defined', () => {
    expect(OutlookCalendarC1).toBeDefined();
  });
  it('OutlookCalendar component is defined', () => {
    expect(OutlookCalendarC2).toBeDefined();
  });
});