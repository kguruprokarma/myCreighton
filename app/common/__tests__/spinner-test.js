/*Created Date: - 12nd -04 -2017
 *Usage of file: - This is used to test Custom SPinner component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../spinner';


describe('Spinner testing ----->', () => {
  const spinner = shallow(<Spinner />);
  it('Spinner is defined', () => {
    expect(spinner).toBeDefined();
  });
});
