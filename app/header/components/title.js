/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Title for Header details *
 */

import React from 'react';
import headerTitle from './headerTitle';

const Title = (currentPath) => (
  <div className='bebasregular logo mt10 mb10 fs1pt4'>{headerTitle(currentPath)}</div>
  );

export default Title;
