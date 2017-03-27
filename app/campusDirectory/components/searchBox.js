/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as ROUTE_URL from '../../constants/routeContants';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    const constructorProps = props;
    const searchboxProps = this.props;
    this.state = constructorProps.state;
    this.state.searchText = '';
    this.state.searchURL = '';
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    if (constructorProps.currentPath === CommonConstants.SEARCH_RESULTS) {
      searchboxProps.onSearchText(constructorProps.searchString);
    }
  }

  onSearchText(event) {
    event.preventDefault();
    const props = this.props;
    if (!this.state.searchText) return false;    
    if (props.currentPath === CommonConstants.SEARCH_RESULTS) {
      props.onSearchText(this.state.searchText);
    } else {
      this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
      hashHistory.replace(this.state.searchURL);
    }
    return true;
  }

  clearSearchText() {
    this.setState({ searchText: '' });
  }

  handleChange(event) {
    const txtRegx = /^[A-Za-z0-9, -]*$/;
    if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
      if (txtRegx.test(event.target.value)) {
        this.setState({ searchText: event.target.value });
      }
    }
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.onSearchText}>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                  <div className='icon-addon openSansLight'><ImageComponent imagePath={SEARCH_ICON} /></div>
                  <div className={`icon-addon-right openSansLight ${this.state.searchText === '' ? 'hide' : 'show'}`} onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></div>
                  <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
                </FormGroup>
              </Col>
              <Col xs={12} sm={3}>
                <FormGroup>
                  <Link onClick={this.onSearchText} disabled={this.state.searchText === '' ? true : false} className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn mt20 pl10'>{translateText('common:SEARCH')}</Link>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default SearchBox;


