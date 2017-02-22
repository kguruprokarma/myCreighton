/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import { shallow } from 'enzyme';
import React from 'react';
import { EventList } from '../index';

describe('index component testing for Next Events ----->', () => {
      const defaultProps = {
            "eventsData": {
                  "type": {
                        "classes": [
                              {
                                    "className": "English 112",
                                    "meetingLocation": "Building Rm 119",
                                    "startTime": "1:00 p.m.",
                                    "endTime": "2:00 p.m.",
                                    "date": "February 9, 2017",
                                    "dateofOccurrence": "Fri"
                              },
                              {
                                    "className": "Chemistry 105",
                                    "meetingLocation": "Building Rm 119",
                                    "startTime": "1:00 p.m.",
                                    "endTime": "2:00 p.m.",
                                    "date": "February 18, 2017",
                                    "dateofOccurrence": "Fri"
                              }
                        ],
                        "assignments": [
                              {
                                    "title": "Assig.: Krebs cycle paper",
                                    "class": "Chemistry 105",
                                    "date": "February 02, 2017",
                                    "dueDate": "jan 23",
                                    "dueTime": "11:59 p.m."
                              }
                        ],
                        "testOrQuizzes": [
                              {
                                    "title": "Chemistry Test",
                                    "class": "Chemistry 105 Lab",
                                    "date": "February 01, 2017",
                                    "dueDate": "Jan 27, 2017",
                                    "dueTime": "11:59 p.m."
                              }
                        ],
                        "academicMilestones": [
                              {
                                    "title": "Test: Chapters 4-5",
                                    "date": "February 28, 2017",
                                    "startDate": "Jan 26",
                                    "endDate": "Jan 27",
                                    "startTime": "10:00 a.m.",
                                    "endTime": "12:00 noon"
                              }
                        ],
                        "outlook": [
                              {
                                    "title": "Test: Chapters 4-5",
                                    "date": "February 27, 2017",
                                    "startDate": "Jan 26",
                                    "endDate": "Jan 27",
                                    "startTime": "10:00 a.m.",
                                    "endTime": "12:00 noon",
                                    "location": "US"
                              }
                        ]
                  }
            },
            getEventsData: () => { }

      }


      const EventListC = shallow(<EventList {...defaultProps} />);

      it('EventList is defined', () => {
            expect(EventListC).toBeDefined();
      });

      it('Check getEventsData function', () => {
            const value = EventListC.instance().componentWillMount();
            expect(value).toHaveBeenCalled
      });

      it('Checking Classes component in Event List', () => {
            expect(EventListC.find('Classes').length).toBe(2);
      });

      it('Checking Assignments component in Event List ', () => {
            expect(EventListC.find('Assignments').length).toBe(1);
      });

      it('Checking OutlookCalendar component in Event List', () => {
            expect(EventListC.find('OutlookCalendar').length).toBe(1);
      });
});