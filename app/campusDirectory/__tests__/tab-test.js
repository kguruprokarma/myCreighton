/* Created Date: - 22nd, Mar -2017
 * This file is used for unit testing tab js file of campus directory search page
 */

import React from 'react';
import {shallow} from 'enzyme';
import TabController from '../components/tab';

describe('Campus Directory search type tabController component testing ----->', () => {
  const SearchController = shallow(<TabController />);

  it('Campus Directory search type component is defined', () => {
    expect(SearchController).toBeDefined();
  });

  it('Campus Directory search type component buttons', () => {
    expect(SearchController.find('Link').length).toBe(2);
  });
});