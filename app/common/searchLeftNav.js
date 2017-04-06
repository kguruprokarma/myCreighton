/*Created Date: - 22th -03 -2017
*Usage of file: - File contains of left navigation items staff search screen for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../common/translate';

const LeftNav = () => (
  <nav role='navigation' id='localmenu' className='userLeftmenu'>
    <h1 className='announced-only'>{translateText('common:SIMPLE_SEARCH')}</h1>
    <div className='list-group openSansLight'>
      <Link className='list-group-item active' activeClassName='active'>
        {translateText('common:SIMPLE_SEARCH')}
      </Link>
      <Link className='list-group-item' activeClassName='active'>
        {translateText('common:ADVANCED_SEARCH')}
      </Link>
    </div>
  </nav>
);

export default LeftNav;