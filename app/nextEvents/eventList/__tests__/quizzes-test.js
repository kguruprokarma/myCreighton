
import React from 'react';
import { shallow } from 'enzyme';
import Quizzes from '../components/quizzes';

describe('Next Event Quizzes component testing ----->', () => {

    const defaultProps = {
        "title": "Chemistry Test",
        "class": "Chemistry 105 Lab",
        "date": "February 01, 2017",
        "dueDate": "Jan 27, 2017",
        "dueTime": "11:59 p.m."
    };

    const QuizzesC = shallow(<Quizzes data={defaultProps} />);

    it('Quizzes component is defined', () => {
        expect(QuizzesC).toBeDefined();
    });

    it('Quizzes component by property check', () => {
        expect(QuizzesC.unrendered.props.data.title).toBe(defaultProps.title);
    });

    it('Quizzes recived props', () => {
        expect(JSON.stringify(QuizzesC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
    });

});