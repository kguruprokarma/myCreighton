import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';

const SemesterNav = (SemesterNavprops) => (

  <nav role='navigation'>
    <ListGroup className='main-list-group semester-links  openSansLight'>
      {
        SemesterNavprops.semesterLinks.map((semesterDetails, semesterIndex) => (
          <ListGroupItem key={semesterIndex}>
            <Link className='visible-xs' to={semesterDetails.linkto} key={semesterIndex} activeClassName='active'>{translateText(semesterDetails.title)} <span className='glyphicon glyphicon-chevron-right pull-right' /> </Link>
            <Link className='hidden-xs' onClick={SemesterNavprops.toggleClick} activeClassName='active'>{translateText(semesterDetails.title)}</Link>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </nav>

);
export default SemesterNav;