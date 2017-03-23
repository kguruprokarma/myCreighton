/* Created Date: - 22nd, Mar-2017
 * This file is used for unit testing index js file of campus directory search page
 */

import {shallow, mount } from 'enzyme';
import React from 'react';
import {SearchBox} from '../components/searchBox';
import * as CommonConstants from '../../constants/commonConstants';

describe(' SearchBox component testing for campus directory search ----->', () => {
  const defaultState = {
    searchText: ''
  };

  const defaultProps = {
    currentPath: CommonConstants.SEARCH_RESULTS,
    onSearchText: () => {}
  };

  const searchBox = shallow(<SearchBox state={defaultState} {...defaultProps} />);

  it('Campus Directory Search Box is defined', () => {
    expect(searchBox).toBeDefined();
  });

  it('Campus Directory search Box component buttons', () => {
    expect(searchBox.find('Link').length).toBe(1);
  });

  it('Campus Directory search Box component FormControl', () => {
    expect(searchBox.find('FormControl').length).toBe(1);
  });

  it('Campus Directory search Box component HelpBlock', () => {
    expect(searchBox.find('HelpBlock').length).toBe(1);
  });
});