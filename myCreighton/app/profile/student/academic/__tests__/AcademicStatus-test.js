import React from 'react';
import {shallow} from 'enzyme';
import AcademicStatus from '../components/academicStatus';

it('AcademicStatus is defined', () => {  
	const defaultProps = {
    json: {
      status: {
        major: "major",
        minor: "minor",
        class: "class",
        ranking: "ranking",
        enrollment: "enrollment",
        disciplinary: "disciplinary"
      }
    }
  }
  const academicStatus = shallow(<AcademicStatus {...defaultProps} />);

  expect(academicStatus).toBeDefined();
});