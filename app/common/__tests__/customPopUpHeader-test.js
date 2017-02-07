/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp Header-test component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import CustomPopUpHeader from '../customPopUpHeader';


describe('CustomPopUpHeaderHeader testing ----->', () => {
  const defaultProps = {
    headerData: {
      name: ''
    }
  }
  const customPopUpHeader = shallow(<CustomPopUpHeader {...defaultProps} />);
  it('CustomPopUpHeader is defined', () => {
    expect(customPopUpHeader).toBeDefined();
  });

  it('CustomPopUpHeader should tileInfo class', () => {
    expect(customPopUpHeader.find('.tileInfo').length).toBe(1);
  });

});
