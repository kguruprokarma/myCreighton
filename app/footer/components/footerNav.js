/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Link } from 'react-router';

const FooterNav = () => (
  <span className='foot-nav footer-space'>
    <Link to='' >Site</Link><span className='text-divider'>|</span> <Link to='' >Feedback</Link>
  </span>
);
export default FooterNav;