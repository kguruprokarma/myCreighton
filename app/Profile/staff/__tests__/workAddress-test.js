/*Created Date: - 9th -03 -2017
 *Usage of file: - This script is for unit test the 'MailAddress'.*
 */

import React from 'react';
import {shallow} from 'enzyme';
import WorkAddress from '../components/workAddress';

const workAddressProps = {
  workAddress: {
    work_Address_line1: 'work_Address_line1',
    work_Address_line2: 'work_Address_line1',
    work_State_code: 'work_State_code',
    work_postal_code: 'work_postal_code',
    work_town_or_city: 'work_town_or_city'
  }
};
const workAddress = shallow(<WorkAddress {...workAddressProps} />);
it('WorkAddress is defined', () => {
  expect(workAddress).toBeDefined();
});

it('WorkAddress should have BasicRow', () => {
  expect(workAddress.find('BasicRow').length).toBe(5);
});


