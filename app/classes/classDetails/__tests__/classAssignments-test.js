import React from 'react';
import {shallow} from 'enzyme';
import ClassAssignments from '../components/classAssignments';

describe('ClassAssignments component testing ', () => {
    it('ClassAssignments is defined', () => {
    const defaultProps = {
        assignmentsData: {
            assignmentsDue:[ {
                data: "01/22/2017"
            }]
        }
    }
    const classAssignments = shallow( < ClassAssignments {...defaultProps }  />);
        expect(classAssignments).toBeDefined();
    });
});