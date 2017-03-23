/*Created Date: - 2nd -02 -2017
*Usage of file: - This component is for Footer details *
*/

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UniversityAddress from './components/universityAddress';
import UniversityLogo from './components/universityLogo';
import Style from './style.css';
import { translateText } from '../common/translate';

const footer = () => (
  <footer className='footer fs0pt93 ' >
    <h1 className='announced-only'>{translateText('common:PAGE_FOOTER')}</h1>
    <Grid>
      <div className='footer-section pt15 pb15'>
        <Row>
          <Col xs={12} sm={2} md={2}>
            <UniversityLogo />
          </Col>
          <Col xs={12} sm={10} md={10}>
            <UniversityAddress />
          </Col>
        </Row>
      </div>
    </Grid>
  </footer>
);

export default footer;
