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
    searchString: 'sd',
    loading: true,
    onSearchText: () => {},
    resetCampusDirectoryData: () => {},
    resetSearchItemClicked: () => {},
    searchItemClicked: () => {},
    getCampusDirectoryData: () => {},
    campusSimpleSearchData: {'timing': '34.275', 'data': [{'netid': '69ac5c7fd2', 'banner_pidm': '3397100', 'emp_number': null, 'fac_first_name': 'ff7a4da45c', 'fac_last_name': '1046c4355e', 'fac_middle_name': 'W', 'full_name': 'de6c7a1f5f', 'job_title': null, 'organization': null, 'phone': '', 'work_address': {'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null}, 'work_email': null}]}
  };

  const searchBox = shallow(<SearchBox state={defaultState} {...defaultProps} />);

  it('Campus Directory Search Box is defined', () => {
    expect(searchBox).toBeDefined();
  });

  it('Campus Directory search Box component buttons', () => {
    expect(searchBox.find('Link').length).toBe(2);
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
    expect(searchBox.instance().state.searchText).toBe('f, f');
  });

  it('Campus Directory search button functionlaity', () => {
    searchBox.find('FormControl').simulate('change', {target: {value: 'f f'}});
    searchBox.find('.searchButton').simulate('click', { preventDefault() {} });
    searchBox.find('FormControl').simulate('change', {target: {value: 'f,f'}});
    searchBox.find('.searchButton').simulate('click', { preventDefault() {} });
    expect(searchBox.find('.searchButton').prop('disabled')).toBe(false);
  });

  /*it('Campus Directory testing no data case', () => {
    const defaultProps1 = {
      currentPath: CommonConstants.SEARCH_RESULTS,
      searchString: 'ffd',
      loading: true,
      onSearchText: () => { },
      resetCampusDirectoryData: () => { },
      resetSearchItemClicked: () => { },
      searchItemClicked: () => { },
      getCampusDirectoryData: () => { },
      campusSimpleSearchData: { 'timing': '34.275', 'data': [] }
    };
    const searchBox1 = shallow(<SearchBox state={defaultState} {...defaultProps1} />);
    expect(searchBox1.find('.cmpNoResult').text()).toBe('ffd');
  });*/

});