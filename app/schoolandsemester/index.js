/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the summary tabs of school and semester.
*/

import React from 'react';
//import Accordion from '../common/accordion';
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router';
import * as ROUTE_URL from '../constants/routeContants';
import {browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import './style.css';

class SchoolAndSemester extends React.PureComponent {
  
  componentWillMount() {
    const titleValue = `${translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')}`;
    browserTitle(titleValue);
  }

  render() {
    const semesterLinks = [
      {
        'title': 'Open Requests Status',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Semester Start',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Class Registration',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Academics',
        'linkto': ROUTE_URL.SEMESTERACADEMICS      
      }, 
      {
        'title': 'Finances',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Student Life',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Semester End',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      }, 
      {
        'title': 'Graduation',
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER      
      } 
    ];
    return (
      
      <section role='region'>
        {/*<Accordion title='Open Requests Status' description='Dart' />
        <Accordion title='Semester Start' description='Semester Start Description' />*/}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} /></div>
        <nav role='navigation'>
          <ListGroup className='main-list-group'>
            {
        semesterLinks.map((semesterDetails, semesterIndex) => (
          
          <Link className='list-group-item' to={semesterDetails.linkto} key={semesterIndex}>{semesterDetails.title} <span className='glyphicon glyphicon-chevron-right pull-right' /> </Link>
         
        ))
        }
          </ListGroup>
        </nav>

      </section>
    );
  }
}

export default SchoolAndSemester;