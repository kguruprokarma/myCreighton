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
      {semesterProps.data.accordionObj && <Accordion accordionObj={semesterProps.data.accordionObj} showHideDesc={semesterProps.showHideDesc} showHideAccord={semesterProps.showHideAccord} showAllAccordions={semesterProps.showAllAccordions} showAllDesc={semesterProps.showAllDesc} accordToggleFunc={semesterProps.accordToggleFunc} />
      }
    </div>
    }
  </article>
);

export default SemesterContainer;