/*Created Date: - 6th -02 -2017
*Usage of file: - File contains of main navigation items for desktop and tablet views*
*/

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap';

class MainNav extends React.Component {
    render() {
        return (

            <nav role="Navigation" id="navigation" className={this.props.navDisplay ? 'openNav' : 'closeNav'}>
                <h1 className="announced-only">Navigation</h1>
                <Grid>
                    <Row>
                        <ul className="main-navigation">
                            <li className="navigation-item"><a href="#">Library Search <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#">Where To Find It <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#">Campus Directory <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#">DoIT Services & Support <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#">Academic Calendar <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#">Campus Map <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                            <li className="navigation-item"><a href="#" >Notifications <span className="glyphicon glyphicon-chevron-right pull-right hidden-lg hidden-md hidden-sm"></span></a></li>
                        </ul>
                    </Row>
                </Grid>
            </nav>

        );
    }
}

export default MainNav;
