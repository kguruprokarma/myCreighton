import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { quickLaunchLinks } from '../constants/quickLaunchLinks';
import { translateText } from '../../common/translate';
import { dynamicUrlGeneration } from '../../common/utility';


const QuickLaunchCards = () => (
  <Row className='quick-launch-data'>
    {quickLaunchLinks.map((quickLaunchItem, quickLaunchIndex) => (
      <Col sm={2} xs={4} key={quickLaunchIndex} className='ql-col-height'>
        <Link onClick={() => dynamicUrlGeneration(quickLaunchItem.linkTo)}>
          <span className={`ql-icons ql-dimensions ${quickLaunchItem.cardImage}`} />
        </Link>
        <p>
          <Link className='mycu_darkgray fs0pt93 ql-title' onClick={() => dynamicUrlGeneration(quickLaunchItem.linkTo)}>
            {translateText(quickLaunchItem.cardTitle)}
          </Link>
        </p>

      </Col>
    ))}
  </Row>
);

export default QuickLaunchCards;