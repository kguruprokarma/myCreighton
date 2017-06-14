/*Created Date: - 12nd -04 -2017
 *Usage of file: - This is used to test SearchLeftNav component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import SearchLeftNav from '../searchLeftNav';


describe('searchLeftNav testing ----->', () => {
  const searchLeftNav = shallow(<SearchLeftNav />);
  it('searchLeftNav is defined', () => {
    expect(searchLeftNav).toBeDefined();
  });
});
