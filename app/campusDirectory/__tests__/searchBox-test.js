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
  const html = '<div class="autosearch-scroll-bar" style="position: relative; overflow: hidden; width: 100%; height: 100%;"><div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"><a class="result-list-item text-left pb10 pl15 pr15 pt10 selected"><div class="searchResultAvatar mr10" style="display: inline-block; width: 30px; height: 30px; border-radius: 500px;"><div style="width: 30px; height: 30px; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 10px; line-height: 30px; font-family: Helvetica, Arial, sans-serif; text-align: center; text-transform: uppercase; color: rgb(255, 255, 255); border-radius: 100%; background: rgb(66, 133, 244);">FF</div></div><span>f79979bf40 f089eaef57</span></a><a class="result-list-item text-left pb10 pl15 pr15 pt10"><div class="searchResultAvatar mr10" style="display: inline-block; width: 30px; height: 30px; border-radius: 500px;"><div style="width: 30px; height: 30px; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 10px; line-height: 30px; font-family: Helvetica, Arial, sans-serif; text-align: center; text-transform: uppercase; color: rgb(255, 255, 255); border-radius: 100%; background: rgb(66, 133, 244);">FF</div></div><span>f79979bf40 f3c7769dd4</span></a><a class="result-list-item text-left pb10 pl15 pr15 pt10"><div class="searchResultAvatar mr10" style="display: inline-block; width: 30px; height: 30px; border-radius: 500px;"><div style="width: 30px; height: 30px; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 10px; line-height: 30px; font-family: Helvetica, Arial, sans-serif; text-align: center; text-transform: uppercase; color: rgb(255, 255, 255); border-radius: 100%; background: rgb(66, 133, 244);">FF</div></div><span>f79979bf40 fc1a98b34b</span></a><a class="result-list-item text-left pb10 pl15 pr15 pt10"><div class="searchResultAvatar mr10" style="display: inline-block; width: 30px; height: 30px; border-radius: 500px;"><div style="width: 30px; height: 30px; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 10px; line-height: 30px; font-family: Helvetica, Arial, sans-serif; text-align: center; text-transform: uppercase; color: rgb(255, 255, 255); border-radius: 100%; background: rgb(66, 133, 244);">FF</div></div><span>f771071ca5 f36b80d347</span></a></div><div style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;"><div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div></div><div style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;"><div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 189px; transform: translateY(0px);"></div></div></div>';
  const searchBox = shallow(<SearchBox state={defaultState} {...defaultProps} />);
  //scrollIntoView = jest.fn(() => 'f79979bf40 fc1a98b34b');
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

/*  it('Campus Directory keydown functionlaity', () => {
    document.body.innerHTML = '';
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
    document.body.innerHTML = html;
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 38,
      which: 38,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 38,
      which: 38,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 38,
      which: 38,
      preventDefault() {}
    });
  });
  
  it('Campus Directory keydown functionlaity', () => {
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
    searchBox.find('FormControl').simulate('keyDown', {
      keyCode: 40,
      which: 40,
      preventDefault() {}
    });
  });*/
});