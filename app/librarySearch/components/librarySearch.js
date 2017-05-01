/* Created Date: - 20th, Apr-2017
 * Merge the components in Library search
 */
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as urlConstants from '../../constants/urlConstants';
import { dynamicUrlGeneration } from '../../common/utility';

export class LibrarySearch extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
  }
  handleChange(event) {
    const query = event.target.value;
    this.setState({ searchText: query});
  }
  search() {
    if (this.props.tabindex === 0) {
      const queryParamsArray = ['institution=01CRU', 'vid=01CRU', 'tab=default_tab', 'search_scope=EVERYTHING', 'mode=Basic', 'displayMode=full', 'bulkSize=10', 'highlight=true', 'dum=true', `query=any,contains,${this.state.searchText}`, 'displayField=all', 'pcAvailabiltyMode=false'];
      dynamicUrlGeneration(urlConstants.LIBRARY_SEARCH_URL, queryParamsArray);
    }
  }
  clearSearchText() {
    this.setState({ searchText: ''});
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.search}>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_BOOKS_ARTICLES_MORE')} />
                  {this.state.searchText.length === 0 && 
                    <button className='icon-addon btn btn-link btnnoPadding openSansLight'><ImageComponent imagePath={SEARCH_ICON} /></button>}
                  <Link className='icon-addon-right btnnoPadding openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></Link>
                </FormGroup>
              </Col>
              <Col xs={12} sm={3}>
                <FormGroup>
                  <Link onClick={this.search} className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn mt20 pl10 searchButton'>{translateText('common:SEARCH')}</Link>
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