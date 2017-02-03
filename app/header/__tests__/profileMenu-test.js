import React from 'react';
import {shallow} from 'enzyme';
import ProfileMenu from '../components/profileMenu';

describe('ProfileMenu component testing ----->', () => {
	const ProfileMenuC = shallow(<ProfileMenu />);
	it('ProfileMenu is defined', () => {
		expect(ProfileMenuC).toBeDefined();
	});
});