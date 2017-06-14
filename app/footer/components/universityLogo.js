/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is for University Logo details in the footer *
 */

import React from 'react';
import { translateText } from '../../common/translate';

const universityLogo = () => (
  <div className='university-logo'>
    <img src='../../assets/images/creighton_logo.png' alt={translateText('MYCREIGHTON_LOGO')} />
  </div>
);

export default universityLogo;
