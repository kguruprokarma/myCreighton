/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
//import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as ROUTE_URL from '../../constants/routeContants';
import * as actionCreators from '../actions';
import AutoPopulateList from './resultsList';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    const constructorProps = props;
    const searchboxProps = this.props;
    this.state = constructorProps.state;
    this.state.searchText = searchboxProps.searchString ? searchboxProps.searchString : '';
    this.state.searchURL = '';
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this.selectedUser = this.selectedUser.bind(this);
    /* if (constructorProps.currentPath === CommonConstants.SEARCH_RESULTS) {
       searchboxProps.onSearchText(constructorProps.searchString);
     }*/
  }

  onSearchText(event) {
    event.preventDefault();
    //const props = this.props;
    /* if (!this.state.searchText.trim()) return false;
     if (props.currentPath === CommonConstants.SEARCH_RESULTS) {
       //props.onSearchText(this.state.searchText);
       this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
       hashHistory.replace(this.state.searchURL);
       // location.reload();
     } else {
       this.state.searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
       hashHistory.replace(this.state.searchURL);
     }
     return true;
   }*/
    const query = this.state.searchText;
    if (query.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH) {
      let searchText = query.toLowerCase();
      if (searchText.indexOf(',') >= 0) {
        searchText = searchText.split(',');
      } else {
        searchText = searchText.split(' ');
      }
      const reqObj = {};
      if (searchText[0]) {
        reqObj.firstName = searchText[0];
      }
      if (searchText[1]) {
        reqObj.lastName = searchText[1];
      }
      this.props.getCampusDirectoryData(reqObj);
      this.props.searchItemClicked();
      const searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
      hashHistory.replace(searchURL);
    }
  }

  selectedUser(firstName, lastName) {
    this.setState({ searchText: (`${firstName} ${lastName}`) });
  }

  clearSearchText() {
    this.setState({ searchText: '' });
  }

  handleChange(event) {
    const txtShouldnotStartWithSpace = /^\S[A-Za-z,\s-]*$/;
    const txtRestrictNumeric = /^[A-Za-z,\s-]*$/;
    if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
      /* if (txtShouldnotStartWithSpace.test(event.target.value)) {
         if (txtRestrictNumeric.test(event.target.value)) {*/
      this.props.resetCampusDirectoryData();
      const query = event.target.value;
      this.setState({ searchText: query });
      this.props.resetSearchItemClicked();
      if (query.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH) {
        let searchText = query.toLowerCase();
        if (searchText.indexOf(',') >= 0) {
          searchText = searchText.split(',');
        } else {
          searchText = searchText.split(' ');
        }
        const reqObj = {};
        if (searchText[0]) {
          reqObj.firstName = searchText[0];
        }
        if (searchText[1]) {
          reqObj.lastName = searchText[1];
        }

        this.props.getCampusDirectoryData(reqObj);
        /*   }
         }*/
      }
      if (event.target.value === '') {
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
                  <div className={`icon-addon openSansLight ${this.state.searchText === '' ? 'show' : 'hide'}`} onClick={this.clearSearchText} ><ImageComponent imagePath={SEARCH_ICON} /></div>
                  <div className='icon-addon-right openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></div>
                  <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
                </FormGroup>
                {(this.props.campusSimpleSearchData && this.props.campusSimpleSearchData.data && this.props.campusSimpleSearchData.data.length > 0 && this.state.searchText.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH && !this.props.searchClick) &&
                  <AutoPopulateList selectedUser={this.selectedUser} populatedList={this.props.campusSimpleSearchData.data} />}

              </Col>
              <Col xs={12} sm={3}>
                <FormGroup>
                  <Link onClick={this.onSearchText} disabled={this.state.searchText.trim() === '' ? true : false} className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn mt20 pl10'>{translateText('common:SEARCH')}</Link>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xs={12}>
          {
            (this.props.campusSimpleSearchData && this.props.campusSimpleSearchData.data && this.props.campusSimpleSearchData.data.length === 0 && this.state.searchText) && <div> {translateText('common:NO_SEARCH_RESULT')}: <span className='cmpNoResult'>{this.state.searchText} </span></div>
          }
        </Col>

      </Row>
    );
  }
}

SearchBox.propTypes = {
  resetCampusDirectoryData: React.PropTypes.func,
  getCampusDirectoryData: React.PropTypes.func,
  searchClick: React.PropTypes.boolean,
  resetSearchItemClicked: React.PropTypes.func,
  searchItemClicked: React.PropTypes.func
};

const mapStateToProps = (simpleSearchState) => (
  {
    campusSimpleSearchData: simpleSearchState.campusDirectoryReducer.campusSimpleSearch.data,
    searchType: simpleSearchState.campusDirectoryReducer.searchType,
    loading: simpleSearchState.campusDirectoryReducer.isLoading,
    searchClick: simpleSearchState.campusDirectoryReducer.searchClick
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
