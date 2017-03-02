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
                        "classesdetails": [
                              {
                                    "id": "1",
                                    "className": "English 112",
                                    "meetingLocation": "Building Rm 119",
                                    "startTime": "8:00 a.m.",
                                    "endTime": "10:00 a.m.",
                                    "date": "Feb 2, 2017",
                                    "dateofOccurrence": "Fri"
                              },
                              {
                                    "id": "2",
                                    "className": "Chemistry 105",
                                    "meetingLocation": "Building Rm 119",
                                    "startTime": "3:00 p.m.",
                                    "endTime": "4:00 p.m.",
                                    "date": "Feb 2, 2017",
                                    "dateofOccurrence": "Fri"
                              }
                        ],
                        "assignments": [
                              {
                                    "id": "3",
                                    "title": "Assig.: Krebs cycle paper",
                                    "class": "Chemistry 105",
                                    "date": "Feb 2, 2017",
                                    "dueDate": "jan 23",
                                    "dueTime": "11:59 p.m.",
                                    "startTime": "1:00 p.m."
                              }
                        ],
                        "testOrQuizzes": [
                              {
                                    "id": "4",
                                    "title": "Chemistry Test",
                                    "class": "Chemistry 105 Lab",
                                    "date": "Feb 02, 2017",
                                    "dueDate": "Jan 17, 2017",
                                    "dueTime": "11:59 a.m.",
                                    "startTime": "1:00 p.m."
                              }
                        ],
                        "academicMilestones": [
                              {
                                    "id": "5",
                                    "title": "Test: Chapters 4-5",
                                    "date": "Feb 3, 2017",
                                    "startDate": "Jan 26",
                                    "endDate": "Jan 27",
                                    "startTime": "10:00 a.m.",
                                    "endTime": "12:00 noon"
                              }
                        ],
                        "outlook": [
                              {
                                    "id": "6",
                                    "title": "Test: OutLook Chapters 4-5",
                                    "date": "Feb 4, 2017",
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
      console.log("EventListC: ", EventListC);

      it('EventList is defined', () => {
            expect(EventListC).toBeDefined();
      });

      it('Check getEventsData function', () => {
            const value = EventListC.instance().componentWillMount();
            expect(value).toHaveBeenCalled
      });

      it('Checking Classes component in Event List', () => {
            expect(EventListC.find('classesdetails').length).toBe(0);
      });

      it('Checking Assignments component in Event List ', () => {
            expect(EventListC.find('Assignments').length).toBe(1);
      });

      it('Checking OutlookCalendar component in Event List', () => {
            expect(EventListC.find('OutlookCalendar').length).toBe(1);
      });
});