/* Created Date: - 26th -01 -2017
 * This file is used for unit testing index js file of campus directory search page
 */

import {shallow} from 'enzyme';
import React from 'react';
import {CampusDirectory} from '../index';

describe(' Index component testing for campus directory search ----->', () => {
  const Campus = shallow(<CampusDirectory />);

  it('Campus Directory is defined', () => {
    expect(Campus).toBeDefined();
  });
});