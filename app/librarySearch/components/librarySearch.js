/* Created Date: - 20th, Apr-2017
 * Merge the components in Library search
 */
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Form, FormGroup, FormControl, button } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as urlConstants from '../../constants/urlConstants';
import { dynamicUrlGeneration } from '../../common/utility';

class LibrarySearch extends React.PureComponent {

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
  search(event) {
    event.preventDefault();    
    if (!this.state.searchText) {
      return false;
    }
    if (this.props.tabindex === 0) {
      const queryParamsArray = ['institution=01CRU', 'vid=01CRU', 'tab=default_tab', 'search_scope=EVERYTHING', 'mode=Basic', 'displayMode=full', 'bulkSize=10', 'highlight=true', 'dum=true', `query=any,contains,${this.state.searchText}`, 'displayField=all', 'pcAvailabiltyMode=false'];
      dynamicUrlGeneration(urlConstants.LIBRARY_SEARCH_URL, queryParamsArray);
    }
    if (this.props.tabindex === 1) {
      const queryParamsArray = [`vl(freeText0)=${this.state.searchText}`, 'institution=01CRU', 'vid=01CRU', 'indx=1', 'bulkSize=30', 'dym=false', 'loc=local,scope:(AZ01CRU)', 'fn=goAlmaAz', 'almaAzSearch=true', 'initialSearch=true'];
      dynamicUrlGeneration(urlConstants.LIBRARY_SEARCH_URL, queryParamsArray);
    }
    if (this.props.tabindex === 3) {
      const queryParamsArray = [`q=${this.state.searchText}`];
      dynamicUrlGeneration(urlConstants.LAW_DATABASE_URL, queryParamsArray);
    }
    return true;
  }
  clearSearchText() {
    this.setState({ searchText: ''});
  }

  render() {
    let placeholder;
    if (this.props.tabindex === 0) {
      placeholder = translateText('common:SEARCH_BOOKS_ARTICLES_MORE');
    }
    if (this.props.tabindex === 1) {
      placeholder = translateText('common:SEARCH_BY_TITLE');
    }
    if (this.props.tabindex === 3) {
      placeholder = translateText('common:SEARCH_ALL_DATABASES');
    }
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.search}>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' placeholder={placeholder} />
                  {this.state.searchText.length === 0 &&
                    <button className='icon-addon btn btn-link btnnoPadding openSansLight'><ImageComponent imagePath={SEARCH_ICON} imagealtText={'Search Icon'} /></button>}
                  <Link className='icon-addon-right btnnoPadding openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} imagealtText={'Close Icon'} /></Link>
                </FormGroup>
              </Col>
              <Col xs={12} sm={3}>
                <FormGroup>
                  <button onClick={this.search} className='openSansLight btn btn-default btn-large btn-block librarySearchBtn mt20 pl10 searchButton' disabled={this.state.searchText.trim() === '' ? true : false}>{translateText('common:SEARCH')}</button>
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