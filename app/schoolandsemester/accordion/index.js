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
    this.state = {
      isAccordToggle: false,
      //toggleSingleAccordClass: '',
      selected: ''
    };
    //this.accordToggle = this.accordToggle.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  accordToggle(filter) {
    this.setState({ selected: filter });
  }

  isActive(value) {
    let returnVal = '';
    if (value === this.state.selected) {
      if (returnVal !== 'accord-active') {
        returnVal = 'accord-active';
      } else {
        returnVal = '';
      }
      if (this.imageClass !== 'revImage') {
        this.imageClass = 'revImage';
      } else {
        this.imageClass = '';
      }
    }
    /*else {
      this.imageClass = '';
    }*/

    return returnVal;
    //return ((value === this.state.selected) ? 'accord-active' : '');
  }

  render() {
    const props = this.props;
    const descStateClass = props.showHideDesc ? 'accord-active' : '';
    const accordStateClass = props.showHideAccord ? 'accord-active' : 'accord-description';
    this.imageClass = props.showHideAccord ? 'revImage' : '';
    return (
      <section role='region'>
        {props.accordionObj && props.accordionObj.map((accordionDetails, accordionIndex) => (
          <div key={accordionIndex}>
            <button className='btn btn-link btnnoPadding accord-title' onClick={() => this.accordToggle(`${accordionIndex}`)}>
              <Col xs={10}>
                <p className='openSansLight fs1pt2 semesterTitle'>{translateText(accordionDetails.accordionTitle)}</p>
              </Col>
              <Col xs={2} className='openSansLight text-right'> <img src={DOWN_ARROW} alt='' className={this.imageClass} /></Col>
            </button>
            <ListGroup className={`${this.isActive(`${accordionIndex}`)} ${accordStateClass} main-list-group accordian-list-data`}>
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
                      {linkDetails.linkDesc}
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