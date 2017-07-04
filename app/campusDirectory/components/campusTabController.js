/* Created Date: - 20th, Mar-2017
 * This component is used to display top navigatin bar for simple search and advanced search List
 */

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';

const CampusDirectoryTabController = (campusTabProps) => (
  <div className='btn-group btn-group-justified form-group openSansRegular fs0pt86'>
    <Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH} className={`btn ${campusTabProps.url && 'active'}`} activeClassName='active'>{translateText('common:SIMPLE_SEARCH')}</Link>
    <Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.ADVANCE_SEARCH_DIRECTORY} className='btn' activeClassName='active'>{translateText('common:ADVANCED_SEARCH')}</Link>
  </div>
);


export default CampusDirectoryTabController;
