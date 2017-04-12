/*Created Date: - 06th -04 -2017
 *Usage of file: - This component is used to toggle the content.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as actionCreators from './actions';

export class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.accordToggle = this.accordToggle.bind(this);
  }

  accordToggle() {
    const props=this.props;
    if (props.isAccordToggle) {
      props.hideAccordionTab();
    } else {
      props.showAccordionTab();
    }
  }
  render() {
    const props=this.props;
    //console.log('this.props.isAccordToggle: ', this.props.isAccordToggle);
    //const accordStateClass = props.isAccordToggle ? 'accord-active' : '';
    return (
      <section role='region'>
        {props.accordionObj && props.accordionObj.map((accordionDetails, accordionIndex) => (
          <article key={accordionIndex}>
            <button className='btn btn-link btnnoPadding accord-title' onClick={this.accordToggle}>
              {accordionDetails.accordionTitle}
            </button>

            {/*<div className={`${accordStateClass} accord-description`}>*/}
            <ListGroup className='main-list-group accordian-list-data openSansLight'>
              {accordionDetails.links.map((linkDetails, linkIndex) => (
                <ListGroupItem key={linkIndex}><Link>{linkDetails} <span className='glyphicon glyphicon-chevron-right pull-right' /></Link></ListGroupItem>
              ))}
            </ListGroup>

          </article>
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