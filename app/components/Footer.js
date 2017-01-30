import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = (props) => (
    <footer className="footer">
       <div className="container">
           <Row className="show-grid">
              <Col xs={12}><p><a href="#Link">Site map </a> | <a href="#Link">Feedback</a></p></Col>
           </Row>
           <Row className="show-grid">
              <Col xs={6}><p>Creighton University</p>
                 </Col>
              <Col xs={6}><p>2500 California Plaza <br /> Omaha, NE 68178<br /> 402.280.2700</p>
                  </Col>
           </Row>
           <Row>
             <Col xs={12}><p>&copy; 2017 Creighton University</p></Col>
           </Row>
        </div>
     </footer>
)

export default Footer;