/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';

const FooterNav = () => (
  <span className='foot-nav footer-space'>
    <Link to='' >{translateText('common:FOOTER_SITE')}</Link><span className='text-divider'>|</span> <Link to='' >{translateText('common:FOOTER_FEEDBACK')}</Link>
  </span>
);
export default FooterNav;