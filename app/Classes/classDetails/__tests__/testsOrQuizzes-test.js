import React from 'react';
import {shallow} from 'enzyme';
import TestsOrQuizzes from '../components/testsOrQuizzes';

describe('TestsOrQuizzes component testing ----->', () => {
    it('TestsOrQuizzes is defined', () => {

    const defaultProps = {
            data:[ {
                date: "01/22/2017",
                assignment: "Home address",
                length:() =>{},
                data:[]
            }]
    }
    const testsOrQuizzes = shallow( < TestsOrQuizzes {...defaultProps }  />);
        expect(testsOrQuizzes).toBeDefined();
    });
});