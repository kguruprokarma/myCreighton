/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Title for Header details *
 */

import React from 'react';
import headerTitle from './headerTitle';

const Title = (currentPath) => (
  <h1 className='bebasregular logo mt10 mb10 fs1pt4'>{headerTitle(currentPath)}</h1>
  );

export default Title;
