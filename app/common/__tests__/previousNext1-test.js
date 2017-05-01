
import React from 'react';
import { shallow } from 'enzyme';
import { PreviousNext1 } from '../previousNext1';


describe('PreviousNext1 testing ----->', () => {
  const defaultProps = {
    'nextObj': { 'startdate': '2017-04-29', 'event_id': '58279', 'allday_event': 'true', 'building_name': null, 'calendars': 'Lectures, Theater, Performances and Community Events', 'contactemail': null, 'contactname': null, 'contactphone': null, 'description': 'Friday, April 28, 2017 â€“ Sunday, June 4, 2017\r\nLocation: Gallery 1516 (1516 Leavenworth Street)\r\nFor gallery hours please visit http://www.gallery1516.org/about/.\r\n \r\nThis exhibition includes 63 images printed by Michael Phillips of William Blakeâ€™s illuminated books to coincide with Opera Omahaâ€™s production of Stranger from Paradise, by Nebraska author/director Kevin Lawler. World Premier Opera performances are May 26th and 27th at Metro Community College South Campus.', 'enddate': '2017-06-04', 'endtime': null, 'event_name': 'Gallery 1516 Partner Program:  William Blake â€œPrinting in the Infernal Methodâ€� Selected and Prin', 'location': 'Gallery 1516 (1516 Leavenworth Street)', 'starttime': null, 'status': '1', 'type': 'assignments', 'timeStamp': '2017-04-30T04:59:00Z', 'next_Event_ID': '58279' },
    'prevObj': {'startdate': '2017-04-29', 'event_id': '51128', 'allday_event': 'false', 'building_name': 'Lamkin Activity Center', 'calendars': 'Academics-Faculty / Staff', 'contactemail': '', 'contactname': '', 'contactphone': '', 'description': 'The spring commencement ceremony at Northwest will take place at 10 a.m. Saturday, April 29, in Bearcat Arena. Doors open at 9 a.m.', 'enddate': null, 'endtime': null, 'event_name': 'Spring Commencement: Graduate School and Booth College of Business and Professional Studies', 'location': 'Bearcat Arena', 'starttime': '10:00:00', 'status': '1', 'type': 'assignments', 'timeStamp': '2017-04-29T15:59:00Z', 'next_Event_ID': '51128'}
  };
  const previousNext = shallow(<PreviousNext1 {...defaultProps} />);
  it('PreviousNext is defined', () => {
    expect(previousNext).toBeDefined();
  });
});
