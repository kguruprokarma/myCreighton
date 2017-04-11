import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Accordion from '../accordion/';

const SemesterContainer = (semesterProps) => (
  <article>
    {semesterProps.data && <div>
      <h2 className='semester-title hidden'>{semesterProps.data.title} </h2>
      <h3 className='semester-sub-title openSansLight pb10 mb20'>{semesterProps.data.headlines} </h3>
      {/*<p className='openSansLight semester-badge-text pb15'>Red badge items have action required</p>*/}
      <p className='openSansLight fs1pt2 gbl_lh pb30'>Frequent functions and information needed during the semester.</p>
      {/* <Row className='pb20'>
        <Col xs={6}>
          <p className='openSansLight fs1pt2 gbl_lh'>Description: <button className='btn btn-link btnnoPadding'>Show</button></p>
        </Col>
        <Col xs={6}>
          <button className='openSansLight btn btn-link btnnoPadding pull-right'>Collapse All</button>
        </Col>
      </Row>*/}
      {semesterProps.data.accordionObj && <Accordion accordionObj={semesterProps.data.accordionObj} />
      }
    </div>
    }
  </article>
);

export default SemesterContainer;