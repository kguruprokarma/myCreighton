import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { find } from 'lodash';
import { translateText } from '../../common/translate';
import { LIBRARY_GUIDES_SUBJECTS, LIBRARY_GUIDES_LIBRARIES } from '../../common/navLinksConstants';

class LibraryGuide extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      librarySelected: 1,
      subjectSelected: 1
    };
    this.handleLibraryGuideChange = this.handleLibraryGuideChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }
  handleLibraryGuideChange(library) {
    this.setState({ librarySelected: parseInt(library.target.value) });
  }
  handleSubjectChange(subject) {
    this.setState({ subjectSelected: parseInt(subject.target.value) });
  }
  render() {
    const subjectUrl = find(LIBRARY_GUIDES_SUBJECTS, { id: this.state.subjectSelected }).link;
    const libraryUrl = find(LIBRARY_GUIDES_LIBRARIES, { id: this.state.librarySelected }).link;
    return (
      <Form>
        <p className='openSansLight libraryGuideInstuction fs1pt2 mb10'>{translateText('common:BROWSE_LIBRARY_TEXT')}</p>
        <Row className='form-group mb10'>
          <Col xs={9}>
            <div className='styled-select'>
              <select className='fs1pt2 openSansLight input-lg librarySelection form-control' value={this.state.librarySelected} onChange={this.handleLibraryGuideChange} >
                {
                  LIBRARY_GUIDES_LIBRARIES.map((item, libIndex) => (<option key={libIndex} value={item.id}>{item.name}</option>))
                }
              </select>
            </div>
          </Col>
          <Col xs={3}>
            <a rel='noopener noreferrer' className='openSansLight btn btn-default btn-large btn-block librarySearchBtn pl10 searchButton' target='_blank' href={libraryUrl}>{translateText('common:GO_BUTTON')}</a>
          </Col>
        </Row>
        <p className='openSansLight libraryGuideOr fs1pt2 pb10'>{translateText('common:OR_TEXT')}</p>
        <Row className='form-group'>
          <Col xs={9}>
            <div className='fs1pt2 styled-select'>
              <select className='form-control openSansLight subjectSelection input-lg' value={this.state.subjectSelected} onChange={this.handleSubjectChange} >
                {
                   LIBRARY_GUIDES_SUBJECTS.map((item, subIndex) => (<option key={subIndex} value={item.id}>{item.name}</option>))
                  }
              </select>
            </div>
          </Col>
          <Col xs={3}>
            <a rel='noopener noreferrer' className='openSansLight btn btn-default btn-large btn-block librarySearchBtn pl10 searchButton' target='_blank' href={subjectUrl}>{translateText('common:GO_BUTTON')}</a>
          </Col>
        </Row>
      </Form>
    );
  }
}
LibraryGuide.propTypes = {
  tabindex: React.PropTypes.number
};

export default LibraryGuide;