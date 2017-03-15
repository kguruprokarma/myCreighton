/*Created Date: - 9th -03 -2017
 *Usage of file: - This script is for unit test the 'MailAddress'.*
 */

import React from 'react';
import {shallow} from 'enzyme';
import MailAddress from '../components/mailAddress';

const mailAddressProps = {
  mailAddress: {
    mail_Address_line1: 'mail_Address_line1',
    mail_Address_line2: 'mail_Address_line2',
    mail_town_or_city: 'CIty name',
    mail_State_code: 'mail_State_code',
    mail_postal_code: 'mail_postal_code'
  }
};
const mailAddress = shallow(<MailAddress {...mailAddressProps} />);
it('MailAddress is defined', () => {
  expect(mailAddress).toBeDefined();
});

it('MailAddress should have BasicRow', () => {
  expect(mailAddress.find('BasicRow').length).toBe(5);
});


