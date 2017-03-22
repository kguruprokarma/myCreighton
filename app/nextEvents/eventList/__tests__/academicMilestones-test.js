import React from 'react';
import { shallow } from 'enzyme';
import AcademicMilestones from '../components/academicMilestones';

describe('Next Event AcademicMilestones component testing ----->', () => {
  const defaultProps = {
    'title': 'Test: Chapters 4-5',
    'date': 'February 28, 2017',
    'startDate': 'Jan 26',
    'endDate': 'Jan 27',
    'startTime': '10:00 a.m.',
    'endTime': '12:00 noon'
  };

  const AcademicMilestonesC = shallow(<AcademicMilestones data={defaultProps} />);

  it('AcademicMilestones component is defined', () => {
    expect(AcademicMilestonesC).toBeDefined();
  });

  it('AcademicMilestones component by property check', () => {
    expect(AcademicMilestonesC.unrendered.props.data.startTime).toBe(defaultProps.startTime);
  });

  it('AcademicMilestones recived props', () => {
    expect(JSON.stringify(AcademicMilestonesC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });
});