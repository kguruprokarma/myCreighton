import React from 'react';
import { shallow } from 'enzyme';
import { TopLevelSearch } from '../index';

describe('TopLevelSearch files in Top Level Search ----->', () => {
  const minProps = {
    params: {
      searchquery: 'dash'
    },
    searchData: [
      {
        'name': 'Dashboard',
        'description': 'myCreighton dasboard',
        'url': '/dashboard'
      },
      {
        'name': 'Campus directory',
        'description': 'Campus directory search',
        'url': '/dashboard'
      },
      {
        'name': 'Quick Launch',
        'description': 'Quick Launch ',
        'url': '/dashboard'
      },
      {
        'name': 'Campus directory',
        'description': 'Campus directory search',
        'url': '/dashboard/simple'
      }
    ],
    getSearchData: () => { },
    loading: true
  };
  const topLevelSearch = shallow(<TopLevelSearch {...minProps} />);
  it('TopLevelSearch is defined', () => {
    topLevelSearch.instance().state.onFinalCall = true;
    topLevelSearch.instance().state.filteredArray = minProps.searchData;
    expect(topLevelSearch).toBeDefined();
  });  
  it('Simulates updateFilterState', () => {
    topLevelSearch.instance().updateFilterState();
  });
  it('Simulates applyFilterOnData', () => {
    topLevelSearch.instance().applyFilterOnData('dashboard');
    topLevelSearch.instance().applyFilterOnData('wrongtext');
  });
  it('Simulates handleChange', () => {
    topLevelSearch.instance().state.searchText = 'dashboard';
    topLevelSearch.find('FormControl').simulate('change', { target: { value: 'dash' } });
  });
  it('Simulates clearSearchText', () => {
    topLevelSearch.instance().clearSearchText();
  });
  it('Simulates showAllDesc', () => {
    topLevelSearch.find('.semisterShow').simulate('click', { preventDefault() { } });
  });
});