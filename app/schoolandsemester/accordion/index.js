/*Created Date: - 06th -04 -2017
 *Usage of file: - This component is used to toggle the content.*
 */

import React from 'react';
import { Link } from 'react-router';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import { DOWN_ARROW } from '../../constants/imageConstants';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.imageClass = '';
    this.accordToggle = this.accordToggle.bind(this);
  }

  accordToggle(filter) {
    const filterOption = filter; 
    filterOption.collapse = !filterOption.collapse;
    this.forceUpdate();
  }  

  render() {
    const props = this.props;
    const descStateClass = props.showHideDesc ? 'accord-active' : '';
    //const accordStateClass = props.showHideAccord ? 'accord-active' : 'accord-description';
    this.imageClass = props.showHideAccord ? 'revImage' : '';
    return (
      <section role='region'>
        {props.accordionObj && props.accordionObj.map((accordionDetails, accordionIndex) => (
          <div key={accordionIndex}>

            {accordionIndex===0 && <Row className='openSansLight fs1pt2 mb10'>
              <Col sm={6} xs={6}>
                <span>{translateText('common:COMMON_DESCRIPTION')}:</span><button className='semisterShow' onClick={props.showAllDesc}>{props.showHideDesc ? translateText('common:COMMON_HIDE'):translateText('common:COMMON_SHOW')}</button>
              </Col>
              {accordionDetails.accordionTitle && <Col sm={6} xs={6}>
                <button className='semisterShow pull-right' onClick={props.showAllAccordions}>{props.showHideAccord ? translateText('common:COMMON_COLLAPSE_ALL') : translateText('common:COMMON_EXPAND_ALL')}</button>
              </Col>}
            </Row>}

            {accordionDetails.accordionTitle && <button className='btn btn-link btnnoPadding accord-title ' onClick={() => this.accordToggle(accordionDetails)}>
              <Col xs={10}>
                <p className='openSansLight fs1pt2 semesterTitle'>{translateText(accordionDetails.accordionTitle)}</p>
              </Col>
              <Col xs={2} className='openSansLight text-right'> <img src={DOWN_ARROW} alt='' className={this.imageClass} /></Col>
            </button>}            
            <ListGroup className={`${accordionDetails.collapse ? 'accord-active' : 'accord-description'} main-list-group accordian-list-data`}>
              {
                accordionDetails.links.map((linkDetails, linkIndex) => (
                  <ListGroupItem key={linkIndex}>
                    <Link to={linkDetails.linkTo}>
                      <Row>
                        <Col xs={10}>
                          <p className='openSansLight fs1pt2 semesterTitle'>{translateText(linkDetails.linkKey)}</p>
                        </Col>
                        <Col xs={2}>
                          <img src={DOWN_ARROW} alt='' className='pull-right rightArrow' />
                        </Col>
                      </Row>
                    </Link>
                    <div className={`${descStateClass} accord-description`}>
                      {translateText(linkDetails.linkDesc)}
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </div>
        ))}
      </section>
    );
  }
}


export default Accordion;