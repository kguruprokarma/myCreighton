import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Accordion from './accordion';
import { translateText } from '../../common/translate';
import PreviousNext from './previousNext';

const SemesterContainer = (semesterProps) => (
  <section role='region'>
    <Row>
      <Col sm={8} md={9} xs={12} className='semester-internal-data'>
        {semesterProps.selectedArray && <div>
          <h2 className='semester-title hidden'>{translateText(semesterProps.selectedArray.title)} </h2>
          <h3 className='semester-sub-title openSansLight pb10 mb0'>{translateText(semesterProps.selectedArray.headlines)} </h3>
          <p className='openSansLight fs1pt2 gbl_lh pb15'>{translateText(semesterProps.selectedArray.description)}</p>
          {semesterProps.selectedArray.accordionObj && <Accordion
            accordionObj={semesterProps.selectedArray.accordionObj} showHideDesc={semesterProps.descToggle} showHideAccord={semesterProps.accordToggle} showAllAccordions={semesterProps.showAllAccordions} showAllDesc={semesterProps.showAllDesc} accordToggleFunc={semesterProps.accordToggleFunc}
            descStateClass={semesterProps.descStateClass}
          />
          }
        </div>
        }
      </Col>
    </Row>
    <Col xs={12} className='mt20 visible-xs'>
      {semesterProps.paramId.id && <PreviousNext currentPath={semesterProps.paramId.id} />}
    </Col>
  </section>
);

export default SemesterContainer;