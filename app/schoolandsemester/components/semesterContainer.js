import React from 'react';
//import { Col, Row } from 'react-bootstrap';
import Accordion from '../accordion/index';
import { translateText } from '../../common/translate';

const SemesterContainer = (semesterProps) => (
  <article role='article'>
    {semesterProps.data && <div>
      <h2 className='semester-title hidden'>{translateText(semesterProps.data.title)} </h2>
      <h3 className='semester-sub-title openSansLight pb10 mb0'>{translateText(semesterProps.data.headlines)} </h3>
      <p className='openSansLight fs1pt2 gbl_lh pb15'>{translateText(semesterProps.data.description)}</p>
      {/*<Row className='openSansLight fs1pt2 mb10'>
        <Col sm={6} xs={6}>
          <span>{translateText('common:COMMON_DESCRIPTION')}:</span><button className='semisterShow' onClick={semesterProps.showAllDesc}>{semesterProps.showHideDesc ? translateText('common:COMMON_HIDE'): translateText('common:COMMON_SHOW')}</button>
        </Col>
        <Col sm={6} xs={6}>
          <button className='semisterShow pull-right' onClick={semesterProps.showAllAccordions}>{semesterProps.showHideAccord?translateText('common:COMMON_COLLAPSE_ALL'):translateText('common:COMMON_EXPAND_ALL')}</button>
        </Col>
      </Row>*/}
      {semesterProps.data.accordionObj && <Accordion accordionObj={semesterProps.data.accordionObj} showHideDesc={semesterProps.showHideDesc} showHideAccord={semesterProps.showHideAccord} showAllAccordions={semesterProps.showAllAccordions} showAllDesc={semesterProps.showAllDesc} accordToggleFunc={semesterProps.accordToggleFunc} />
      }
    </div>
    }
  </article>
);

export default SemesterContainer;