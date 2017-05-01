/* Created Date: - 28th, Apr -2017
 * This file is used for unit testing index js file of campus directory advance search page
 */

import {shallow} from 'enzyme';
import React from 'react';
import AdvanceSearch from '../index';

describe(' Index component testing for campus directory search ----->', () => {
  const advanceSearch = shallow(<AdvanceSearch />);

  it('Advance Search Campus Directory is defined', () => {
    expect(advanceSearch).toBeDefined();
  });
});