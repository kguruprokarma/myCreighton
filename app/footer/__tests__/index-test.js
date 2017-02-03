import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../index';

describe('Footer component testing ----->', () => {
	const FooterC = shallow(<Footer />);
	it('Footer is defined', () => {
		expect(FooterC).toBeDefined();
	});

	it('Footer should contain UniversityLogo component', () => {
		expect(FooterC.find('UniversityLogo').length).toBe(1);
	});

	it('Footer should contain UniversityAddress component', () => {
		expect(FooterC.find('UniversityAddress').length).toBe(1);
	});

	it('Footer should contain CopyRightText component', () => {
		expect(FooterC.find('CopyRightText').length).toBe(1);
	});
});