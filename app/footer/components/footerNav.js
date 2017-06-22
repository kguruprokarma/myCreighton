/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';

const footerNav = (footerNavProps) => (
  <nav role='navigation' id='navigation02' className='foot-nav'>
    <h1 className='announced-only'>{translateText('common:SITEMAP_FOOTER_MENU')}</h1>
    <span className='footer-space'>
      {(footerNavProps.currentPath !== ROUTE_URL.SITEMAP) &&
        <span>
          <Link to={ROUTE_URL.SITEMAP} >{translateText('common:FOOTER_SITE_MAP')}</Link>
          <span className='text-divider'>|</span>
        </span>
      }
      <Link to={ROUTE_URL.FEEDBACK} >{translateText('common:FOOTER_FEEDBACK')}</Link>
    </span>
  </nav>
);
export default footerNav;