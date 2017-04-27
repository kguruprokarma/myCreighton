/* Created Date: - 22nd, Mar -2017
 * This file is used for unit testing simple search js file of campus directory search page
 */
import React from 'react';
import { shallow } from 'enzyme';
import {SimpleSearchDirectory} from '../components/simpleSearch';

describe('Campus Directory simple search ----->', () => {
  const defaultProps = {
    getCampusDirectoryData: () => {},
    onSearchTypeChange: () => {},
    searchItemClicked: () => {},
    onSearchText: () => {},
    params: {
      searchtype: ''
    },
    route: {
      path: ''
    }
  };

  const defaultState = {
    presentState: ''
  };

  const SearchController = shallow(<SimpleSearchDirectory state={defaultState} {...defaultProps} />);
  
  it('Campus Directory simple search is defined', () => {
    expect(SearchController).toBeDefined();
  });
  it('Campus Directory SearchTabController is defined', () => {
    SearchController.instance().onSearchText('');
    SearchController.instance().onSearchText('ff,ff');
  });
});