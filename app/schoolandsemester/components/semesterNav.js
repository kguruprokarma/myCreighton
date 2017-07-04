import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';

const SemesterNav = (SemesterNavprops) => (

  <nav>
    <h1 className='announced-only'>{translateText('common:SCHOOL_AND_SEMESTER_NAV')}</h1>
    <ListGroup className={'visible-xs main-list-group semester-links openSansLight'}>
      {
        SemesterNavprops.semesterLinks.map((semesterDetails, semesterIndex) => (
          <ListGroupItem key={semesterIndex}>
            <Link to={`${ROUTE_URL.SCHOOLS_AND_SEMESTER}/${semesterDetails.objectKey}`} key={semesterIndex} activeClassName='active'>
              <Row>
                <Col xs={10}>
                  <p className='openSansLight fs1pt2 semesterTitle'>{translateText(semesterDetails.title)}</p>
                </Col>
                <Col xs={2} className='text-right'>
                  <span className='glyphicon glyphicon-chevron-right pull-right' aria-hidden='true' />
                </Col>
              </Row>
            </Link>
          </ListGroupItem>
        ))}
    </ListGroup>
    <ListGroup className='hidden-xs main-list-group semester-links openSansLight'>
      {
        SemesterNavprops.semesterLinks.map((semesterDetails, semesterIndex) => (
          <ListGroupItem key={semesterIndex}>
            <Link to={`${ROUTE_URL.SCHOOLS_AND_SEMESTER}/${semesterDetails.objectKey}`} className={SemesterNavprops.activeNavLink === translateText(semesterDetails.title) ? 'active' : ''}>{translateText(semesterDetails.title)}</Link>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </nav >

);
export default SemesterNav;