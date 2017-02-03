import React from 'react';
import {shallow} from 'enzyme';
import CopyRightText from '../components/copyRightText';

describe('CopyRightText component testing ----->', () => {
	const CopyRightTextC = shallow(<CopyRightText />);
	it('CopyRightText is defined', () => {
		expect(CopyRightTextC).toBeDefined();
	});
});