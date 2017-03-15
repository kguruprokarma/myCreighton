import React from 'react';
import { shallow } from 'enzyme';
import Classes from '../components/classes';

xdescribe('Next Event Classes component testing ----->', () => {

  const defaultProps = {
    "className": "English 112",
    "meetingLocation": "Building Rm 119",
    "startTime": "1:00 p.m.",
    "endTime": "2:00 p.m.",
    "date": "February 9, 2017",
    "dateofOccurrence": "Fri"
  };

  const ClassesC = shallow(<Classes data={defaultProps} />);

  xit('Classes component is defined', () => {
    expect(ClassesC).toBeDefined();
  });

  xit('Classes component by property check', () => {
    expect(ClassesC.unrendered.props.data.meetingLocation).toBe(defaultProps.meetingLocation);
  });

  xit('Classes recived props', () => {
    expect(JSON.stringify(ClassesC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });

});