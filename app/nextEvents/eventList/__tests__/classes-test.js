import React from 'react';
import { shallow } from 'enzyme';
import Classes from '../components/classes';

describe('Next Event Classes component testing ----->', () => {

  const defaultProps = {
    "className": "English 112",
    "meetingLocation": "Building Rm 119",
    "startTime": "1:00 p.m.",
    "endTime": "2:00 p.m.",
    "date": "February 9, 2017",
    "dateofOccurrence": "Fri"
  };

  const ClassesC = shallow(<Classes data={defaultProps} />);

  it('Classes component is defined', () => {
    expect(ClassesC).toBeDefined();
  });

  it('Classes component by property check', () => {
    expect(ClassesC.unrendered.props.data.meetingLocation).toBe(defaultProps.meetingLocation);
  });

  it('Classes recived props', () => {
    expect(JSON.stringify(ClassesC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });

});