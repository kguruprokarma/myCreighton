import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../index';

describe('Header component testing ----->', () => {
	const defaultProps = {
		  showPopUp: ()=>{},
		  showPatch:() =>{},
		  navClick:()=>{},
		  popUpData:true,
		  popUpOpen:()=>{},
		  showNav:false,
		  popUpClose:()=>{}
        } 
		
	const HeaderC = shallow(<Header {...defaultProps}/>);
	it('Header is defined', () => {
		expect(HeaderC).toBeDefined();
	});

	it('Header should contain Title component', () => {
		expect(HeaderC.find('Title').length).toBe(1);
	});

	/*
	*/

});
