/*Created Date: - 22th -03 -2017
*Usage of file: - File contains of left navigation items staff search screen for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../common/translate';
import * as ROUTE_URL from '../constants/routeContants';

const LeftNav = (leftSearchNavProps) => (
  <nav id='localmenu' className='userLeftmenu'>
    <h1 className='announced-only'>{translateText('common:SIMPLE_SEARCH')}</h1>
    <div className='list-group openSansLight'>
      <Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH} className={`list-group-item ${leftSearchNavProps.url && 'active'}`} activeClassName='active'>
        {translateText('common:SIMPLE_SEARCH')}
      </Link>
      <Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.ADVANCE_SEARCH_DIRECTORY} className='list-group-item' activeClassName='active' >
        {translateText('common:ADVANCED_SEARCH')}
      </Link>
    </div>
  </nav>
);

export default LeftNav;