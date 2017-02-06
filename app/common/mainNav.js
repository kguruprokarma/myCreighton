/*Created Date: - 6th -02 -2017
*Usage of file: - File contains of main navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';

class MainNav extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item"> <a href="#">Library Search</a></li>
                <li className="list-group-item"><a href="#">Where To Find It</a></li>
                <li className="list-group-item"><a href="#">Campus Directory</a></li>
                <li className="list-group-item"><a href="#">DoIT Services & Support</a></li>
                <li className="list-group-item"><a href="#">Academic Calendar</a></li>
                <li className="list-group-item"><a href="#">Campus Map</a></li>
                <li className="list-group-item"><a href="#" >Notifications</a></li>
            </ul>
        );
    }
}

export default MainNav;
