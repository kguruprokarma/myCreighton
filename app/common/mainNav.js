/*Created Date: - 6th -02 -2017
*Usage of file: - File contains of main navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap';
import { translate } from 'react-i18next';
import i18n from '../i18n';

@translate([], { wait: true })
class MainNav extends React.Component {

    render() {
        const { t } = this.props;
        const role = this.props.userRole;
        return (
            <nav role="Navigation" id="navigation" className={this.props.navDisplay ? 'openNav' : 'closeNav'}>
                <h1 className="announced-only">{t('common:NAVIGATION')}</h1>
                <Grid>
                    <Row>
                        <ul className="main-navigation fs0pt93">
                            <li className="navigation-item"><a href="#">{t('common:CREIGHTON_SERVICES_AND_RESOURCES')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li> 
                            {
                            role == 'student' || role == undefined ? <li className="navigation-item"><a href="#">{t('common:CAMPUS_DIRECTORY')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li> : null
                            }
                            <li className="navigation-item"><a href="#">{t('common:LIBRARY_SEARCH')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>
                            <li className="navigation-item"><a href="#">{t('common:DOIT_SERVICES_AND_SUPPORT')} <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg"></span></a></li>
                            
                            
                        </ul>
                    </Row>
                </Grid>
            </nav>
        );
    }
}

export default MainNav;