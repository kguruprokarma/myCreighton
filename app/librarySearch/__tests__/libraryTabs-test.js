/* Created Date: - 1st, May -2017
 * This file is used for unit testing Library search tab component js file of library search page
 */
import React from 'react';
import { shallow } from 'enzyme';
import LibraryTabs from '../components/libraryTabs';

describe('Library search tab component ----->', () => {
  const defaultProps = {
    navLibLinks: [{
      key: 'LIB_JAYSEARCH'
    },
    {
      key: 'E_JOURNAL'
    },
    {
      key: 'DATA_BASES'
    },
    {
      key: 'LIBRARY_GUIDES'
    }
    ],
    changeTab: () => {}
  };

  const libraryTabs = shallow(<LibraryTabs {...defaultProps} />);
  
  it('Library search Tabs is defined', () => {
    expect(libraryTabs).toBeDefined();
  });
});