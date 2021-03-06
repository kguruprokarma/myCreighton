/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';

const footerNav = () => (
  <nav role='navigation' id='navigation02' className='foot-nav'>
    <span className='footer-space'>
      <Link to='' >{translateText('common:FOOTER_SITE')}</Link><span className='text-divider'>|</span> <Link to='/feedback' >{translateText('common:FOOTER_FEEDBACK')}</Link>
    </span>
  </nav>
);
export default footerNav;