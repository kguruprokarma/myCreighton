/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';
import FooterNav from './footerNav';
import CopyRightText from './copyRightText';

const UniversityAddress = () => (
	<p className='footer-address mt15'><span className='space-mb'>2500 California Plaza, Omaha, NE 68178 <a href='tel:402.280.2700' className='footer-space'>402.280.2700</a></span>
		<CopyRightText />
		<FooterNav />
	</p>
);
export default UniversityAddress;