/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Navigation Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';
import ImageComponent from '../../common/imageComponent';

const moduleBlock = (modulesprops) => (
  <article>
    {modulesprops.modulelist.map((moduleDetail, moduleIndex) => (<Col md={5} sm={6} key={moduleIndex} className={moduleIndex % 2 === 1 ? 'col-md-offset-2' : ''}>
      <Link to={(moduleDetail && moduleDetail.description) ? moduleDetail.linkto : ''}>
        <Well bsSize='large' className='white-well' >
          <Row>
            <Col xs={3} sm={3} md={12} className='moduleImage'>
              <ImageComponent imagePath={(moduleDetail && moduleDetail.imgURL) ? moduleDetail.imgURL : ''} imagealtText={(moduleDetail && moduleDetail.imgalt) ? moduleDetail.imgalt : ''} imgClassName={(moduleDetail && moduleDetail.name) ? moduleDetail.class : ''} />
            </Col>
            <Col xs={9} sm={9} md={12}>
              <h3 className='well-title openSansLight'>{(moduleDetail && moduleDetail.name) ? moduleDetail.name : ''}</h3>
              <div className='well-caption'>{(moduleDetail && moduleDetail.description) ? moduleDetail.description : ''}</div>
            </Col>
          </Row>
        </Well>
      </Link>
    </Col>
    ))}
  </article>
);


export default moduleBlock;
