/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the list of test or quizes .*
 */

import React from 'react';
import { translateText } from '../../../common/translate';

const testsOrQuizzes = (testOrQuizzeProps) => (
  <article className='classTestOrQuizz mb25'>
    <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:TEST_QUIZZES')}</h4>
    {testOrQuizzeProps.data.length !== 0 ? testOrQuizzeProps.data.map((testInfo, testIndex) => (
      <div className='openSansLight fs1pt2 gbl_lh' key={testIndex}>
        {testInfo.assign_title}
      </div>
    )) : translateText('common:NO_CONTENT')
    }
  </article>
);

export default testsOrQuizzes;
