/* Created Date: - 1st, May -2017
 * This file is used for unit testing Library search links navigation
 */
import React from 'react';
import { shallow } from 'enzyme';
import LeftNavComponent from '../leftNavComponent';

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

  const leftNavComponent = shallow(<LeftNavComponent {...defaultProps} />);
  
  it('Library search Navigation is defined', () => {
    expect(leftNavComponent).toBeDefined();
  });
});