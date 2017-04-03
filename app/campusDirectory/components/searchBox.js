/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as ROUTE_URL from '../../constants/routeContants';
import * as actionCreators from '../actions';
import * as urlConstants from '../../constants/urlConstants';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    const constructorProps = props;
    const searchboxProps = this.props;
    this.state = constructorProps.state;
    this.state.searchText = '';
    this.state.searchURL = '';
    this.onSearchText = this.onSearchText.bind(this);
   // this.handleChange = this.handleChange.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
    if (constructorProps.currentPath === CommonConstants.SEARCH_RESULTS) {
      searchboxProps.onSearchText(constructorProps.searchString);
    }
  }

  onSearchText(event) {
    event.preventDefault();
    const props = this.props;
    if (!this.state.searchText) return false;    
    if (props.currentPath === CommonConstants.SEARCH_RESULTS) {
      //props.onSearchText(this.state.searchText);
      this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
      hashHistory.replace(this.state.searchURL);
      location.reload();
    } else {
      this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
      hashHistory.replace(this.state.searchURL);
    }
    return true;
  }

  clearSearchText() {
    this.setState({ searchText: '' });
    this._typeahead.getInstance().clear();
  }

  // handleChange(event) {
  //   const txtRegx = /^[A-Za-z, -]*$/;
  //   if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
  //     if (txtRegx.test(event.target.value)) {
  //       this.setState({ searchText: event.target.value });
  //     }
  //   }
  // }

  _handleSearch (query) {
    this.state.searchText = query;
    if (!query) {
      return;
    }
    const reqObj = {
      firstName: query
    };
    this.props.getCampusDirectoryData(reqObj);
  }
  
  _handleKeydown (event) {
    event.preventDefault();
    const txtRegx = /^[A-Za-z, -]*$/;
    if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
      if (txtRegx.test(event.target.value)) {
        this.setState({ searchText: event.target.value });
      }
    }
    if (!event.target.value) return;
    
    if (event.key === CommonConstants.KEYPRESS_ENTER) {
      this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
      hashHistory.replace(this.state.searchURL);
    }
  }

  render() {
    let FILTER_DATA = [];
    if (this.props.campusSimpleSearchData && this.props.campusSimpleSearchData.data 
              && this.props.campusSimpleSearchData.data.length > 0) {
      FILTER_DATA = this.props.campusSimpleSearchData.data;
    }
    return (
      <Row>
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.onSearchText}>
            <Row>
              <Col xs={12} sm={9}>
                <div onKeyUp={this._handleKeydown.bind(this)}>
                  <FormGroup>
                    <AsyncTypeahead
                      autoFocus
                      labelKey='fac_first_name'
                      value={this.state.searchText}
                      onSearch={this._handleSearch}
                      options={FILTER_DATA}
                      //onKeypress={this._handleKeydown}
                      //onChange={this._handleKeydown}
                      ref={ref => this._typeahead = ref}
                      className='openSansLight mt20'
                      placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')}
                      renderMenuItemChildren={(option) => (
                        <div>
                          <span>{option.fac_first_name}</span>
                        </div>
                      )}
                    />                  
                    {/*<FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />*/}
                    <div className={`icon-addon openSansLight ${this.state.searchText === '' ? 'show' : 'hide'}`} onClick={this.clearSearchText} ><ImageComponent imagePath={SEARCH_ICON} /></div>
                    <div className='icon-addon-right openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></div>
                    <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
                  </FormGroup>
                </div>
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
//export default SearchBox;

const mapStateToProps = (searchBoxState) => (
  {
    campusSimpleSearchData: searchBoxState.campusDirectoryReducer.campusSimpleSearch.data
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);


