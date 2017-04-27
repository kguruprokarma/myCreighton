/*Created Date: - 12nd -04 -2017
 *Usage of file: - This is used to test alertComponent component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import AlertComponent from '../alertComponent';


describe('AlertComponent testing ----->', () => {
  const defaultProps = {
    'typename': 'typename',
    'msg': 'message'
  };
  const alertComponent = shallow(<AlertComponent {...defaultProps} />);
  it('alertComponent is defined', () => {
    expect(alertComponent).toBeDefined();
  });
});
