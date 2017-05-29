/*Created Date: - 8th -02 -2017
*Usage of file: - This is used to test Jaybucks component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import PrintCredit from '../components/printCredit';

it('PrintCredit is defined', () => {
  const printCreditTestProps = {
    'printCount': '5'
  };
  const printCredit = shallow(<PrintCredit {...printCreditTestProps} />);
  expect(printCredit).toBeDefined();
});