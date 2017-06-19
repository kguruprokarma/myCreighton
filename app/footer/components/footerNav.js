/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';

const footerNav = () => (
  <nav role='navigation' id='navigation02' className='foot-nav'>
    <span className='footer-space'>
      <Link to={ROUTE_URL.SITEMAP} >{translateText('common:FOOTER_SITE_MAP')}</Link><span className='text-divider'>|</span> <Link to={ROUTE_URL.FEEDBACK} >{translateText('common:FOOTER_FEEDBACK')}</Link>
    </span>
  </nav>
);
export default footerNav;