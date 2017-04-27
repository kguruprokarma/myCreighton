/*Created Date: - 6th -02 -2017
*Usage of file: - File contains of main navigation items for desktop and tablet views*
*/

import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { translateText } from './translate';
import * as CommonConstants from '../constants/commonConstants';
import { authUserDetails } from './utility';
import * as ROUTE_URL from '../constants/routeContants';

class MainNav extends React.Component {
  componentWillMount() {
  }
  render() {
    const props = this.props;
    const role = authUserDetails().userRole;
    return (
      <nav role='navigation' id='navigation' className={props.navDisplay ? 'openNav' : 'closeNav'}>
        <h1 className='announced-only'>{translateText('common:MAIN_MENU')}</h1>
        <Grid>
          <Row>
            <ul className='main-navigation'>
              <li className='navigation-item hidden-lg'><h2 className=' pl15 pt10 pb10 pr15 menuHeading m0'>{translateText('common:HAMBURGER_MENU')}</h2></li>
              <li className='navigation-item hidden-lg'><a href={`#${ROUTE_URL.DASHBOARD}`}>{translateText('common:DASH_BOARD')} <span className='glyphicon glyphicon-chevron-right pull-right hidden-lg' /></a></li>
              <li className='navigation-item'><a>{translateText('common:CREIGHTON_SERVICES_AND_RESOURCES')} <span className='glyphicon glyphicon-chevron-right pull-right hidden-lg' /></a></li>
              {
                role === CommonConstants.ROLE_STUDENT || role === undefined ? <li className='navigation-item'>
                  <a href={`#${ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH}`}>{translateText('common:CAMPUS_DIRECTORY')} <span className='glyphicon glyphicon-chevron-right pull-right hidden-lg' /></a>
                </li> : null
              }
              <li className='navigation-item'><a href={`#${ROUTE_URL.LIBRARY_SEARCH}`}>{translateText('common:LIBRARY_SEARCH')} <span className='glyphicon glyphicon-chevron-right pull-right hidden-lg' /></a></li>
              <li className='navigation-item'><a>{translateText('common:DOIT_SERVICES_AND_SUPPORT')} <span className='glyphicon glyphicon-chevron-right pull-right hidden-lg' /></a></li>
            </ul>
          </Row>
        </Grid>
      </nav>
    );
  }
}

export default MainNav;
