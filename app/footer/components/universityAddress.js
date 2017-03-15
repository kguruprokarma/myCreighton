/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import FooterNav from './footerNav';
import CopyRightText from './copyRightText';
import { translateText } from '../../common/translate';

const UniversityAddress = () => (
  <p className='footer-address mt15'><span className='space-mb'>{translateText('common:FOOTER_UNIVERSITY_ADDRESS')}<a href='tel:402.280.2700' className='footer-space'>402.280.2700</a></span>
    <CopyRightText />
    <FooterNav />
  </p>
);
export default UniversityAddress;