/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Email details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const Email = (emailProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_EMAIL')}</h3>
            {/* School email address */}
            <Row className="show-grid pt5 pb5">
                  <Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_SCHOOL')}</label> </Col>
                  <Col xs={8} md={8} md={8} className="dataField emailAddress wordBreak">
                        {/* Mailto added for open mail box popup */}
                        <Mailto email={emailProps.email.school.value}>{emailProps.email.school.value}</Mailto>
                  </Col>
            </Row>
            {/* Personal email address */}
            <Row className="show-grid pt5 pb5">
                  <Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_PERSONAL')}</label> </Col>
                  <Col xs={8} md={8} md={8} className="dataField emailAddress wordBreak">
                        {/* Mailto added for open mail box popup */}
                        <Mailto email={emailProps.email.personal.value}>{emailProps.email.personal.value}</Mailto>
                  </Col>
            </Row>
      </article>
);

export default Email;
