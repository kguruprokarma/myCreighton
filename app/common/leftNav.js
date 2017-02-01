/*Created Date: - 20th -01 -2017
*Usage of file: - File contains of left navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';

const LeftNav = () => (
    <nav role="navigation" id="localmenu" className="userLeftmenu">
        <h1 className="announced-only">Local menu</h1>
        <div className="list-group openSansLight">
            <Link to="/Profile" className="list-group-item" activeClassName="active">My Profile</Link>
            <Link to="/Academic" className="list-group-item" activeClassName="active">Academic</Link>
        </div>
    </nav>
)
export default LeftNav;