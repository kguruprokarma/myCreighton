/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Navigation Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';
import ImageComponent from '../../common/imageComponent';

const moduleBlock = (modulesprops) => {
  const moduleBlocks = modulesprops.modulelist.map((moduleDetail, moduleIndex) => (
    <Link to={moduleDetail.linkto} key={moduleIndex}>
      <Well bsSize='large' className='white-well' >
        <Row>
          <Col xs={3} md={12} className='moduleImage'>
            <ImageComponent imagePath={moduleDetail.imgURL} imagealtText='' className={moduleDetail.class} width='moduleDetail.width' />
          </Col>
          <Col xs={9} md={12}>
            <h3 className='well-title openSansLight'>{moduleDetail.name}</h3>
            <div className='well-caption'>{moduleDetail.description}</div>
          </Col>
        </Row>
      </Well>
    </Link>
    ));
  return (
    <div>
      {moduleBlocks}
    </div>
  );
};

export default moduleBlock;
