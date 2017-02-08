/*Created Date: - 8th -02 -2017
*Usage of file: - This is used to test guest component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import Guest from '../components/guest';

it('Guest is defined', () => {
	const guestTestProps = {
		"guestTitle": "GUEST",
		"guestCount": "5"
	};
  const guest = shallow(<Guest {...guestTestProps} />);
  expect(guest).toBeDefined();
});