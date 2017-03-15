// /*Created Date: - 26th -01 -2017
// *Usage of file: - This file is used for unit testing index js file of class detail page*
// */

// import React from 'react';
// import { shallow } from 'enzyme';
// import { ClassDetails } from '../index';
// import * as _ from 'lodash';

// describe('index files in Class Details testing ', () => {
//     const minProps = {
//         getClassDetails: () => {
//             return 1;
//         },
//         classDetails:{
//         "data": [{
//             "id": 1,
//             "classHeader": {
//                 "name": "English 112",
//                 "time": "11am-12pm",
//                 "by": "Miller",
//                 "place": "Building Rm 119",
//                 "on": "poetry",
//                 "date": "jan 13, 2017"
//             },
//             "assignmentsDue": [
//                 "Read chapter 15",
//                 "Lab results hand in class"
//             ],
//             "todaysClass": [
//                 "Chapter 15 - photosynthesis reaction",
//                 "Prep for quiz"
//             ],
//             "upcomingAssignments": [
//                 {
//                     "date": "Jan26",
//                     "assignment": "Study guide chapters 14-15"
//                 },
//                 {
//                     "date": "Feb 7",
//                     "assignment": "Mid-term paper Krebs cycle"
//                 }
//             ],
//             "testsOrQuizzes": [
//                 {
//                     "date": "Jan 31",
//                     "assignment": "Quiz chapters 14-15"
//                 },
//                 {
//                     "date": "Feb 16",
//                     "assignment": "Lab exams"
//                 }
//             ]
//         }]},
//         params: {
//             id: 1
//         }
//     };
//     const classDetails = shallow(<ClassDetails {...minProps} />);
//     it('ClassDetails is defined', () => {
//         expect(classDetails).toBeDefined();
//     });

//     it('Check getClassDetailsData function', () => {
//         const value = classDetails.instance().componentWillMount();
//         expect(value).toHaveBeenCalled
//     });

//     it('ClassDetails component contails HeaderLabel component length', () => {
//         expect(classDetails.find('HeaderLabel').length).toBe(1);
//     });

// });


import React from 'react';
import {shallow} from 'enzyme';
import TodaysClass from '../components/todaysClass';

describe('TodaysClass1 component testing ----->', () => {
    xit('TodaysClass is defined', () => {

    const defaultProps = {        
            todaysClass:[ {
                json: "01/22/2017",
                length:() =>{}
            }]        
    }
    const todaysClass = shallow( < TodaysClass {...defaultProps }  />);
        expect(todaysClass).toBeDefined();
    });
});