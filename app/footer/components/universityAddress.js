/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import FooterNav from './footerNav';
import CopyRightText from './copyRightText';
import { translateText } from '../../common/translate';

const universityAddress = () => (
  <span className='footer-address mt15'><span className='space-mb'>{translateText('common:FOOTER_UNIVERSITY_ADDRESS')}<span className='footer-space'>402.280.2700</span></span>
    <CopyRightText />
    <FooterNav />
  </span>
);
export default universityAddress;