/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the today's class schedule .*
 */

import React from 'react';
import { translateText } from '../../../common/translate';

const todaysClass = (todayClassProps) => (
  <article className='todaysClass mb25'>
  {console.log('todayClassProps: ', todayClassProps)}
    <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:TODAYS_CLASS')}</h4>
    {todayClassProps.data.length !== 0 ? todayClassProps.data.map((todayClass, todayClassIndex) => (
      <div className='openSansLight fs1pt2 gbl_lh' key={todayClassIndex}>
        {todayClass.assign_title}
      </div>
    )) : <p className='openSansLight fs1pt2 gbl_lh mb30 mt20 text-italic'>{translateText('common:NO_CONTENT')}</p>
    }
  </article>
);

export default todaysClass;
