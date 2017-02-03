import React from 'react';
import {shallow} from 'enzyme';
import UniversityAddress from '../components/universityAddress';

describe('UniversityAddress component testing ----->', () => {
	const UniversityAddressC = shallow(<UniversityAddress />);
	it('UniversityAddress is defined', () => {
		expect(UniversityAddressC).toBeDefined();
	});
});