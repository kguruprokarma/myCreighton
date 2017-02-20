import React from 'react';
import {shallow} from 'enzyme';
import HeaderTitle from '../components/headerTitle';
import i18n from '../../__mock_i18n__/i18n_mockKeys';

describe('HeaderTitle component testing ----->', () => {
	const defaultProps = {
			path:'/dashboard'
	}
	let HeaderTitleC = HeaderTitle(defaultProps);
	it('HeaderTitle is defined', () => {
		expect(HeaderTitleC).toBe(i18n.properties['MY_CREIGHTON']);
	});

	const classesPath = { path:'/classes' }
	
	let ClassTitleC = HeaderTitle(classesPath);
	it('Classes path is defined', () => {
		expect(ClassTitleC).toBe(i18n.properties['CLASS_SCHEDULE']);
	});

	const classDetailPath = { path:'/classdetails' }
	let ClassDetailsTitleC = HeaderTitle(classDetailPath);
	it('Class details path is defined', () => {
		expect(ClassDetailsTitleC).toBe(i18n.properties['CLASS_DETAIL']);
	});

	const profilePath = { path:'/profile' }
	let ProfileTitleC = HeaderTitle(profilePath);
	it('Profile path is defined', () => {
		expect(ProfileTitleC).toBe(i18n.properties['PROFILE_MY_PROFILE']);
	});

	const academicPath = { path:'/academic' }
	let AcademicTitleC = HeaderTitle(academicPath);
	it('Academic is defined', () => {
		expect(AcademicTitleC).toBe(i18n.properties['PROFILE_ACADEMIC']);
	});
});