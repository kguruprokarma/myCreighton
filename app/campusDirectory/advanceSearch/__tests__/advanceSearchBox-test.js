import {shallow} from 'enzyme';
import React from 'react';
import {AdvanceSearchBox} from '../components/advanceSearchBox';

describe(' Index component testing for campus directory search ----->', () => {
  const advanceSearchBox = shallow(<AdvanceSearchBox />);

  it('Advance Search Box is defined', () => {
    expect(advanceSearchBox).toBeDefined();
  });
});