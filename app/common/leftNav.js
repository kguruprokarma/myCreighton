/*Created Date: - 20th -01 -2017
*Usage of file: - File contains of left navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';

const LeftNav = (props) => (
    <nav role="Left Navigation" role="leftNavigation" className="userLeftmenu">
    <h3 className="announced-only">Left Navigation</h3>
        <div className="list-group openSansLight">
            <Link to="/Profile" className="list-group-item active">My Profile</Link>
            <Link to="/Academic" className="list-group-item">Academic</Link>
        </div>
    </nav>
)

export default LeftNav;