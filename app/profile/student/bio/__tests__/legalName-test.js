/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'LegalName' component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import LegalName from '../components/legalName';

describe('LegalName Suite in Student', () => {
  it('LegalName is defined', () => {
    const defaultProps = {
      legalName: {
        first: 'first name',
        middle: 'middle name',
        last: 'last name'
      }
    };
    const legalName = shallow(<LegalName {...defaultProps} />);
    expect(legalName).toBeDefined();
  });
  it('LegalName null test cases', () => {
    const defaultProps = {
      legalName: null
    };
    const legalName = shallow(<LegalName {...defaultProps} />);
    expect(legalName).toBeDefined();
  });
});
