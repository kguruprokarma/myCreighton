/*Created Date: - 06th -04 -2017
 *Usage of file: - This component is used to toggle the content.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';
import { DOWN_ARROW } from '../../constants/imageConstants';

export class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.accordToggle = this.accordToggle.bind(this);
    this.imageClass = '';
  }

  accordToggle() {
    const props = this.props;
    if (props.isAccordToggle) {
      //props.hideAccordionTab();
      this.imageClass = '';
    } else {
      //props.showAccordionTab();
      this.imageClass = 'revImage';
    }
  }

  render() {
    const props = this.props;
    //console.log('this.props.isAccordToggle: ', this.props.isAccordToggle);
    //const accordStateClass = props.isAccordToggle ? 'accord-active' : '';
    return (
      <section role='region'>
        {props.accordionObj && props.accordionObj.map((accordionDetails, accordionIndex) => (
          <div key={accordionIndex}>
            <button className='btn btn-link btnnoPadding accord-title' onClick={this.accordToggle}>
              <Col xs={10}>{translateText(accordionDetails.accordionTitle)}</Col>
              <Col xs={2} className='text-right'> <img src={DOWN_ARROW} alt='' className={this.imageClass} /></Col>
            </button>
            {/*<div className={`${accordStateClass} accord-description`}>*/}
            <ListGroup className='main-list-group accordian-list-data'>
              {accordionDetails.links.map((linkDetails, linkIndex) => (
                <ListGroupItem key={linkIndex}>
                  <Link>{translateText(linkDetails)}   
                    <img src={DOWN_ARROW} alt='' className='pull-right rightArrow' />
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isAccordToggle: state.accordionReducer.accordionToggle
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);