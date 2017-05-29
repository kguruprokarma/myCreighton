/* Created Date: - 19th, May -2017
 * This file is used for unit testing Future Functionality Popup
 */
import React from 'react';
import { shallow } from 'enzyme';
import FutureFunctionalityPopUp from '../futureFunctionalityPopUp';

describe('futureFunctionalityPopUp component ----->', () => {
  const futureFunctionalityPopUp = shallow(<FutureFunctionalityPopUp />);
  
  it('futureFunctionalityPopUp is defined', () => {
    expect(futureFunctionalityPopUp).toBeDefined();
  });
});