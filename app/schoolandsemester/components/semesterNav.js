import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';

const SemesterNav = (SemesterNavprops) => (

  <nav role='navigation'>
    <ListGroup className='main-list-group  openSansLight'>
      {
        SemesterNavprops.semesterLinks.map((semesterDetails, semesterIndex) => (
          <ListGroupItem key={semesterIndex}>
            <Link className='visible-xs' to={semesterDetails.linkto} key={semesterIndex}>{translateText(semesterDetails.title)} <span className='glyphicon glyphicon-chevron-right pull-right' /> </Link>
            <button className='btn btn-link btnnoPadding hidden-xs' onClick={SemesterNavprops.toggleClick}>{translateText(semesterDetails.title)}</button>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </nav>

);
export default SemesterNav;