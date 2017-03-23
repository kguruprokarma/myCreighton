/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Header Label component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import HeaderLabel from '../headerLabel';


describe('HeaderLabel testing ----->', () => {
  const headerLabel = shallow(<HeaderLabel />);
  it('HeaderLabel is defined', () => {
    expect(headerLabel).toBeDefined();
  });

  it('HeaderLabel should bebasregular class', () => {
    expect(headerLabel.find('.bebasregular').length).toBe(1);
  });
});
