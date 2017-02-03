import React from 'react';
import {shallow} from 'enzyme';
import Header from '../index';

describe('Header component testing ----->', () => {
	const defaultProps = {
		  showPopUp: true,
		  showPatch:() =>{},
		  showPopUp:()=>{}
        } 
		
	const HeaderC = shallow(<Header {...defaultProps}/>);
	it('Header is defined', () => {
		expect(HeaderC).toBeDefined();
	});

	it('Header should contain Title component', () => {
		expect(HeaderC.find('Title').length).toBe(1);
	});

	it('Header should contain ProfileMenu component', () => {
		HeaderC.setState({showPopUp: true});
		expect(HeaderC.find('ProfileMenu').length).toBe(1);
	});
});