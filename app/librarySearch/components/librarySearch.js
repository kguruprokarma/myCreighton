/* Created Date: - 20th, Apr-2017
 * Merge the components in Library search
 */
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON } from '../../constants/imageConstants';


export class LibrarySearch extends React.PureComponent {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm'>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus className='openSansLight input-lg cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_BOOKS_ARTICLES_MORE')} />
                  <button className='icon-addon btn btn-link btnnoPadding openSansLight'><ImageComponent imagePath={SEARCH_ICON} /></button>
                </FormGroup>
              </Col> 
              <Col xs={12} sm={3}>
                <FormGroup>
                  <Link className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn mt20 pl10 searchButton'>{translateText('common:SEARCH')}</Link>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}
LibrarySearch.propTypes = {
  tabindex: React.PropTypes.number
};

export default LibrarySearch;