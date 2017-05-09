import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import { translateText } from '../../common/translate';

const SemesterNav = (SemesterNavprops) => (

  <nav role='navigation'>
    <ListGroup className='main-list-group semester-links openSansLight'>
      {
        SemesterNavprops.semesterLinks.map((semesterDetails, semesterIndex) => (
          <ListGroupItem key={semesterIndex}>
            <Link className='visible-xs' to={semesterDetails.linkto} onClick={() => SemesterNavprops.navToLink(semesterDetails.objectKey)} key={semesterIndex} activeClassName='active'>
              <Row>
                <Col xs={11}>
                  <p className='openSansLight fs1pt2 semesterTitle'>{translateText(semesterDetails.title)}</p>
                </Col>
                <Col xs={1}>
                  <span className='glyphicon glyphicon-chevron-right pull-right' />
                </Col>
              </Row>
            </Link>
            <Link className='hidden-xs' onClick={() => SemesterNavprops.navToLink(translateText(semesterDetails.objectKey))}>{translateText(semesterDetails.title)}</Link>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  </nav>

);
export default SemesterNav;