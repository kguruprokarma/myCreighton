import React from 'react';
import { shallow } from 'enzyme';
import ClassDetails from '../components/classDetails';

describe('classDetails Next events test suit -- >', () => {

    const defaultProps = {
      "classHeader": "English 112"
    };

    const classDetails = shallow(<ClassDetails data={defaultProps} />);

    it('ClassDetails component is defined', () => {
        expect(classDetails).toBeDefined();
    });

    it('ClassInfo component is there or not', () => {
        expect(classDetails.find('ClassInfo').length).toBe(1);       
    });

    it('ClassAssignments component is there or not', () => {
        expect(classDetails.find('ClassAssignments').length).toBe(1);       
    });

    it('TodaysClass component is there or not', () => {
        expect(classDetails.find('TodaysClass').length).toBe(1);       
    });

    it('UpcomingAssignments component is there or not', () => {
        expect(classDetails.find('UpcomingAssignments').length).toBe(1);       
    });

});
