import React from 'react';
import { shallow } from 'enzyme';
import ClassDetails from '../components/classDetails';

describe('classDetails Next events test suit -- >', () => {
  const defaultProps = {
    'classHeader': 'English 112'
  };

  const classDetails = shallow(<ClassDetails data={defaultProps} />);

  it('ClassDetails component is defined', () => {
    expect(classDetails).toBeDefined();
  });
});
