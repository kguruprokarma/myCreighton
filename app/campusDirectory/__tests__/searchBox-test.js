/* Created Date: - 22nd, Mar-2017
 * This file is used for unit testing index js file of campus directory search page
 */

import {shallow} from 'enzyme';
import React from 'react';
import {SearchBox} from '../components/searchBox';
import * as CommonConstants from '../../constants/commonConstants';

describe(' SearchBox component testing for campus directory search ----->', () => {
  const defaultState = {
    searchText: ''
  };

  const defaultProps = {
    currentPath: CommonConstants.SEARCH_RESULTS,
    searchString: '',
    onSearchText: () => {},
    resetCampusDirectoryData: () => {},
    resetSearchItemClicked: () => {},
    searchItemClicked: () => {},
    getCampusDirectoryData: () => {}
  };

  const searchBox = shallow(<SearchBox state={defaultState} {...defaultProps} />);

  it('Campus Directory Search Box is defined', () => {
    expect(searchBox).toBeDefined();
  });

  it('Campus Directory search Box component buttons', () => {
    expect(searchBox.find('Link').length).toBe(1);
  });

  it('Campus Directory input box values', () => {
    searchBox.find('FormControl').simulate('change', {target: {value: 'f f'}});
    expect(searchBox.instance().state.searchText).toBe('f f');
    searchBox.find('FormControl').simulate('change', {target: {value: 'f,f'}});
    expect(searchBox.instance().state.searchText).toBe('f,f');
    searchBox.find('FormControl').simulate('change', {target: {value: ''}});
    expect(searchBox.instance().state.searchText).toBe('');
  });

  it('Campus Directory search Box component HelpBlock', () => {
    expect(searchBox.find('HelpBlock').length).toBe(1);
  });

  it('Campus Directory search Box clearing', () => {
    searchBox.find('.icon-addon-right').simulate('click');
    expect(searchBox.instance().state.searchText).toBe('');
  });

  it('Campus Directory search selected user name', () => {
    searchBox.instance().selectedUser('f', 'f');
    expect(searchBox.instance().state.searchText).toBe('f f');
  });

  it('Campus Directory search button functionlaity', () => {
    searchBox.find('FormControl').simulate('change', {target: {value: 'f f'}});
    searchBox.find('Link').simulate('click', { preventDefault() {} });
    searchBox.find('FormControl').simulate('change', {target: {value: 'f,f'}});
    searchBox.find('Link').simulate('click', { preventDefault() {} });
    expect(searchBox.find('Link').prop('disabled')).toBe(false);
  });

});