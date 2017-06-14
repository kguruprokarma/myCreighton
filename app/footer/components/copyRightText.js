/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { translateText } from '../../common/translate';

const copyRightText = () => (
  <span className='copy-right'>&copy; {translateText('common:FOOTER_CREIGHTON_UNIVERSITY')}</span>
);

export default copyRightText;
