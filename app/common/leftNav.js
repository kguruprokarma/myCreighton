/*Created Date: - 20th -01 -2017
*Usage of file: - File contains of left navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';

const LeftNav = (leftNavProps) => (
    <nav role="navigation" id="localmenu" className="userLeftmenu">
        <h1 className="announced-only">{leftNavProps.i18nTranslate('common:LOCAL_MENU')}</h1>
        <div className="list-group openSansLight">
            <Link to="/Profile" className="list-group-item" activeClassName="active">{leftNavProps.i18nTranslate('common:MY_PROFILE')}</Link>
            <Link to="/Academic" className="list-group-item" activeClassName="active">{leftNavProps.i18nTranslate('common:ACADEMIC')}</Link>
        </div>
    </nav>
)
export default LeftNav;