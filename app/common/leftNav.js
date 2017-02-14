/*Created Date: - 20th -01 -2017
*Usage of file: - File contains of left navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { translateText } from '../common/translate';
import * as ROUTE_URL from '../constants/routeContants';

const LeftNav = () => (
    <nav role="navigation" id="localmenu" className="userLeftmenu">
        <h1 className="announced-only">{translateText('common:LOCAL_MENU')}</h1>
        <div className="list-group openSansLight">
            <Link to={ROUTE_URL.PROFILE} className="list-group-item" activeClassName="active">{translateText('common:PROFILE_MY_PROFILE')}</Link>
            <Link to={ROUTE_URL.ACADEMIC}  className="list-group-item" activeClassName="active">{translateText('common:PROFILE_ACADEMIC')}</Link>
        </div>
    </nav>
);

export default LeftNav;