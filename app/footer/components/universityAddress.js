/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';

const UniversityAddress = () => (
	<div>
		<p className="footer-address">    2500 California Plaza<br className="visible-xs" />
			Omaha, NE 68178 <span className='phone-no'>402.280.2700</span>
		</p>
		<p className='text-center'>
			<Link to='' >Sitemap</Link>  <span className='text-divider'>|</span>  <Link to='' >Feedback</Link>
		</p>
	</div>
);

export default UniversityAddress;