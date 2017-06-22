/*Created Date: - 06th -04 -2017
 *Usage of file: - This component is used to toggle the content.*
 */

import React from 'react';
import { Link } from 'react-router';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import { DOWN_ARROW } from '../../constants/imageConstants';
import { dynamicUrlGeneration } from '../../common/utility';

const Accordion = (accordionProps) => (
  <section role='region'>
    <h1 className='announced-only'>{translateText('common:SCHOOL_ACCORDION')}</h1>
    {accordionProps.accordionObj && accordionProps.accordionObj.map((accordionDetails, accordionIndex) => (
      <div key={accordionIndex}>
        {accordionIndex === 0 && <Row className='openSansLight fs1pt2 mb10'>
          <Col sm={6} xs={6}>
            <span>{translateText('common:COMMON_DESCRIPTION')}:</span><button className='semisterShow' onClick={accordionProps.showAllDesc}>{accordionProps.showHideDesc ? translateText('common:COMMON_HIDE') : translateText('common:COMMON_SHOW')}</button>
          </Col>
          {accordionDetails.accordionTitle && <Col sm={6} xs={6}>
            <button className='semisterShow pull-right' onClick={accordionProps.showAllAccordions}>{accordionProps.showHideAccord ? translateText('common:COMMON_COLLAPSE_ALL') : translateText('common:COMMON_EXPAND_ALL')}</button>
          </Col>}
        </Row>}

        {accordionDetails.accordionTitle && <button className='btn btn-link btnnoPadding accord-title ' onClick={() => accordionProps.accordToggleFunc(accordionDetails)}>
          <Col xs={10}>
            <p className='openSansLight fs1pt2 semesterTitle'>{translateText(accordionDetails.accordionTitle)}</p>
          </Col>
          <Col xs={2} className='openSansLight text-right'> <img src={DOWN_ARROW} alt='' className={accordionDetails.collapse ? 'revImage' : ''} /></Col>
        </button>}
        <ListGroup className={`${accordionDetails.collapse ? 'accord-active' : 'accord-description'} main-list-group accordian-list-data`}>
          {
            accordionDetails.links.map((linkDetails, linkIndex) => (
              <ListGroupItem key={linkIndex}>
                <Link onClick={() => dynamicUrlGeneration(linkDetails.linkTo)} >
                  <Row>
                    <Col xs={10}>
                      <p className='openSansLight fs1pt2 semesterTitle'>{translateText(linkDetails.linkKey)}</p>
                    </Col>
                    <Col xs={2}>
                      <img src={DOWN_ARROW} alt='' className='pull-right rightArrow' />
                    </Col>
                  </Row>
                  <div className={`${accordionProps.descStateClass} accord-description mycu_darkgray`}>
                    {translateText(linkDetails.linkDesc)}
                  </div>
                </Link>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    ))}
  </section>
);
export default Accordion;


  /*render() {
    const props = this.props;
    const descStateClass = props.showHideDesc ? 'accord-active' : '';
    return 
  }*/
