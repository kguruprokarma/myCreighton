import React from 'react';
import { shallow } from 'enzyme';
import { Academic } from '../index';
import AcademicStatus from '../components/academicStatus';


describe('index files in academic testing ', () => {
    const minProps = {
        getAcademicData: () => { },
        academicData:{
            studentProfile:{
                academicDetail:"test"
            }
         }
    }
    const academic = shallow(<Academic {...minProps} />);
    it('Academic is defined', () => {        
        expect(academic).toBeDefined();
    });

    // it('Check getAcademicData function', () => {
    //     const wrapper = shallow(<Academic {...minProps} />);
    //     const value = wrapper.instance().componentWillMount();
    //     expect(value).toHaveBeenCalled
    // });

    it('Academic component contails WeekDayData component length', () => {
       expect(academic.find('AcademicStatus').length).toBe(2);
    });

});