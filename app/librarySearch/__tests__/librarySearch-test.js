/* Created Date: - 1st, May -2017
 * This file is used for unit testing simple librarySearch js file of library search page
 */
import React from 'react';
import { shallow } from 'enzyme';
import {LibrarySearch} from '../components/librarySearch';

describe('Law library search ----->', () => {
  const defaultProps = {
    clearSearchText: () => {},
    search: () => {},
    handleChange: () => {},
    onSearchText: () => {},
    tabindex: 0
  };

  const defaultState = {
    presentState: ''
  };

  const librarySearch = shallow(<LibrarySearch state={defaultState} {...defaultProps} />);
  
  it('Library search is defined', () => {
    expect(librarySearch).toBeDefined();
  });
  it('call search function', () => {
    librarySearch.instance().search();
  });
  it('call clearSearchText function', () => {
    librarySearch.instance().clearSearchText();
  });
  it('call handleChange function', () => {
    librarySearch.instance().handleChange({target: {value: 'usman'}});
  });
});