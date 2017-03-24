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
import { SEARCH_ICON } from '../../constants/imageConstants';
import * as ROUTE_URL from '../../constants/routeContants';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.state.searchText = '';
    this.state.searchURL = '';
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    if (props.currentPath === CommonConstants.SEARCH_RESULTS) {
      this.props.onSearchText(props.searchString);
    }
  }
  onSearchText() {
    if (!this.state.searchText) return;
    if (this.props.currentPath === CommonConstants.SEARCH_RESULTS) {
      this.props.onSearchText(this.state.searchText);
    } else {
      hashHistory.replace(this.state.searchURL);
    }
  }

  handleKeyPress(event) {
    if (event.key === CommonConstants.KEYPRESS_ENTER) {
      this.props.onSearchText(this.state.searchText);
    }
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm'>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onKeyPress={this.handleKeyPress} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                  <div className='icon-addon openSansLight'><ImageComponent imagePath={SEARCH_ICON} /></div>
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


