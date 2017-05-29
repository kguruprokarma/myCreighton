/* Created Date: - 1st, May -2017
 * This file is used for unit testing simple librarySearch js file of library search page
 */
import React from 'react';
import { shallow } from 'enzyme';
import LibrarySearch from '../components/librarySearch';

describe('Law library search ----->', () => {
  const defaultProps = {
    clearSearchText: () => {},
    search: () => {},
    handleChange: () => {},
    onSearchText: () => {},
    tabindex: 0,
    searchText: ''
  };

  it('Library search is defined', () => {
    const librarySearch = shallow(<LibrarySearch {...defaultProps} />);
    expect(librarySearch).toBeDefined();
    librarySearch.instance().search();
  });
  it('call search function when tabindex == 0', () => {
    const librarySearch = shallow(<LibrarySearch {...Object.assign({}, defaultProps, {tabindex: 0})} />);
    librarySearch.instance().state.searchText = 'Adam';
    librarySearch.instance().search();
  });
  it('call search function when tabindex == 1', () => {
    const librarySearch = shallow(<LibrarySearch {...Object.assign({}, defaultProps, {tabindex: 1})} />);
    librarySearch.instance().state.searchText = 'Adam';
    librarySearch.instance().search();
  });
  it('call search function when tabindex == 2', () => {
    const librarySearch = shallow(<LibrarySearch {...Object.assign({}, defaultProps, {tabindex: 2})} />);
    librarySearch.instance().state.searchText = 'Adam';
    librarySearch.instance().search();
  });
  it('call search function when tabindex == 3', () => {
    const librarySearch = shallow(<LibrarySearch {...Object.assign({}, defaultProps, {tabindex: 3})} />);
    librarySearch.instance().state.searchText = 'Adam';
    librarySearch.instance().search();
  });
  it('call clearSearchText function', () => {
    const librarySearch = shallow(<LibrarySearch {...defaultProps} />);
    librarySearch.instance().clearSearchText();
  });
  it('call handleChange function', () => {
    const librarySearch = shallow(<LibrarySearch {...defaultProps} />);
    librarySearch.instance().handleChange({target: {value: 'Adam'}});
  });
});