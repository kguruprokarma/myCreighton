import React from 'react';
import {shallow} from 'enzyme';
import Title from '../components/title';

describe('Title component testing ----->', () => {
	const defaultProps = {
			path:'/dashboard'
		
        } 
	const TitleC = shallow(<Title {...defaultProps} />);
	it('Title is defined', () => {
		expect(TitleC).toBeDefined();
	});
});