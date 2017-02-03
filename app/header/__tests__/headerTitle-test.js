import React from 'react';
import {shallow} from 'enzyme';
import HeaderTitle from '../components/headerTitle';

describe('HeaderTitle component testing ----->', () => {
	const defaultProps = {
			path:'/dashboard'

	}
	const HeaderTitleC = HeaderTitle(defaultProps);
	it('HeaderTitle is defined', () => {
		expect(HeaderTitleC).toBe("My Creighton");
	});
});