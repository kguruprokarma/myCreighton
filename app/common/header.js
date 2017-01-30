import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

const Header = (props) => (
  <header id="header" role="banner">
<<<<<<< HEAD
  <h1 className="announced-only">Page header</h1>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} sm={6}>
          <h2 className="bebasregular logo mt10 mb10 fs1pt4">MYCREIGHTON</h2>
=======
    <Grid>
      <Row className="show-grid">
        <Col xs={12} sm={6}>
          <h1 className="bebasregular logo mt10 mb10 fs21">MYCREIGHTON</h1>
>>>>>>> origin/Sprint-2
        </Col>
        <Col xs={12} sm={6}>
          <p className="headerLinks">
            <Link to="/Academic">Academic</Link> | <Link to="/Profile">Profile</Link>  | <Link to="/Classes">Classes</Link>
          </p>
        </Col>
      </Row>
    </Grid>
  </header>
)

export default Header;
