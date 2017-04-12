/*Created Date: - 06th -04 -2017
 *Usage of file: - This component is used to toggle the content.*
 */

import React from 'react';

class Accordion extends React.Component {

  constructor() {
    super();
    this.state = {
      accordionState: false
    };
    this.accordToggle = this.accordToggle.bind(this);
  }

  accordToggle() {
    this.setState({
      accordionState: !this.state.accordionState
    });
  }
  render() {
    const accordStateClass = this.state.accordionState ? 'accord-active' : '';
    return (
      <section role='region'>
        <div className='accord-title' onClick={this.accordToggle}>
          {this.props.title}
        </div>
        <div className={`${accordStateClass} accord-description`}>
          {this.props.description}
        </div>
      </section>
    );
  }
}

Accordion.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default Accordion;