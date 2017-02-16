/*Created Date: - 6th -02 -2017
*Usage of file: - File contains of main navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap';
import { translateText } from './translate';

class MainNav extends React.Component {
    render() {
        const role = this.props.userRole;
        return (
            <nav role="Navigation" id="navigation" className={this.props.navDisplay ? 'openNav' : 'closeNav'}>
                <h1 className="announced-only">{translateText('common:NAVIGATION_MENU')}</h1>
                <Grid>
                    <Row>
                        <ul className="main-navigation fs0pt93">
                            <li className="navigation-item"><a href="#">{translateText('common:CREIGHTON_SERVICES_AND_RESOURCES')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li> 
                            {
                            role == 'student' || role == undefined ? <li className="navigation-item"><a href="#">{translateText('common:CAMPUS_DIRECTORY')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li> : null
                            }
                            <li className="navigation-item"><a href="#">{translateText('common:LIBRARY_SEARCH')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>
                            <li className="navigation-item"><a href="#">{translateText('common:DOIT_SERVICES_AND_SUPPORT')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>
                            <li className="navigation-item"><a href="#">{translateText('common:ACADEMIC_CALENDAR')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>                            
                            <li className="navigation-item"><a href="#">{translateText('common:CAMPUS_MAP')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>
                        </ul>
                    </Row>
                </Grid>
            </nav>
        );
    }
}

export default MainNav;
