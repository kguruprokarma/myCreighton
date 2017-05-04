import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Accordion from '../accordion/index';
import { translateText } from '../../common/translate';

const SemesterContainer = (semesterProps) => (
  <article role='article'>
    {semesterProps.data && <div>
      <h2 className='semester-title hidden'>{translateText(semesterProps.data.title)} </h2>
      <h3 className='semester-sub-title openSansLight pb10 mb20'>{translateText(semesterProps.data.headlines)} </h3>
      
      {/*<p className='openSansLight semester-badge-text pb15'>Red badge items have action required</p>*/}
      <p className='openSansLight fs1pt2 gbl_lh pb30'>{translateText(semesterProps.data.description)}</p>
      <Row className='openSansLight fs1pt2 mb10'>
        <Col sm={2} xs={3}>
          <span>Description:</span>
        </Col>
        <Col sm={1} xs={3}>
          <button className='semisterShow' onClick={semesterProps.showAllDesc}>{semesterProps.showHideDesc ? 'Hide' : 'Show'}</button>
        </Col>
        <Col sm={9} xs={6}>
          <button className='semisterShow pull-right pr20' onClick={semesterProps.showAllAccordions}>{semesterProps.showHideAccord?'Collapse All':'Expand All'}</button>
        </Col>
      </Row>
      {/* <Row className='pb20'>
        <Col xs={6}>
          <p className='openSansLight fs1pt2 gbl_lh'>Description: <button className='btn btn-link btnnoPadding'>Show</button></p>
        </Col>
        <Col xs={6}>
          <button className='openSansLight btn btn-link btnnoPadding pull-right'>Collapse All</button>
        </Col>
      </Row>*/}
      {semesterProps.data.accordionObj && <Accordion accordionObj={semesterProps.data.accordionObj} showHideDesc={semesterProps.showHideDesc} showHideAccord={semesterProps.showHideAccord} showAllAccordions={semesterProps.showAllAccordions} />
      }
    </div>
    }
  </article>
);

export default SemesterContainer;