/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import More from '../components/more';

describe('More component testing ----->', () => {
  const more = shallow(<More />);
  it('More component is defined', () => {
    expect(more).toBeDefined();
  });
});