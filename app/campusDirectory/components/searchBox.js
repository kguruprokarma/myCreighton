/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import ImageComponent from '../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import * as ROUTE_URL from '../../constants/routeContants';
import * as actionCreators from '../actions';
import AutoPopulateList from './resultsList';
import Spinner from '../../common/spinner';
//import { createAndSendLogs } from '../../common/utility';

const listItems = document.getElementsByClassName('result-list-item');

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    const searchboxProps = this.props;
    this.state = {
      searchText: searchboxProps.searchString ? searchboxProps.searchString : '',
      selectUser: true,
      selectionNumber: -1,
      serchTextPreserved: ''
    };
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this.selectedUser = this.selectedUser.bind(this);
    this.selection = this.selection.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    if (searchboxProps.currentPath === CommonConstants.SEARCH_RESULTS) {
      searchboxProps.onSearchText(searchboxProps.searchString);
    }
  }

  onSearchText(event) {
    // createAndSendLogs('infos', 'onSearchText', 'Search Box', this.state.searchText);
    event.preventDefault();
    const query = this.state.searchText.replace(/ /g, '');
    if (!query) {
      return false;
    }
    this.searchQuery(query);
    this.props.searchItemClicked();
    const searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
    hashHistory.replace(searchURL);
    return true;
  }

  selectedUser(firstName, lastName) {
    // const logObj = {
    //   firstName: firstName,
    //   lastName: lastName
    // };
    // createAndSendLogs('infos', 'selectedUser', 'Search Box', JSON.stringify(logObj));
    this.setState({ searchText: (`${firstName}, ${lastName}`), selectUser: false, serchTextPreserved: (`${firstName}, ${lastName}`) });
  }

  clearSearchText() {
    // createAndSendLogs('infos', 'clearSearchText', 'Search Box', '');
    this.setState({ searchText: '', serchTextPreserved: '' });
  }

  subSelection(key, curr, selected) {
    // const logObj = {
    //   key: key,
    //   curr: curr,
    //   selected: selected
    // };
    // createAndSendLogs('infos', 'subSelection', 'Search Box', JSON.stringify(logObj));
    let current = curr;
    if (key === 40) {
      this.setState({ selectionNumber: (++this.state.selectionNumber) });
      if (this.state.selectionNumber === (selected)) {
        this.setState({ selectionNumber: -1 });
        this.setState({ searchText: this.state.serchTextPreserved });
      } else if (this.state.selectionNumber >= selected) {
        this.setState({ selectionNumber: (0) });
        current = listItems.item(0);
      } else {
        current = listItems.item(this.state.selectionNumber);
      }
    } else if (key === 38) {
      this.setState({ selectionNumber: --this.state.selectionNumber });
      if (this.state.selectionNumber === -1) {
        this.setState({ selectionNumber: (selected) });
        this.setState({ searchText: this.state.serchTextPreserved });
      } else if (this.state.selectionNumber <= -2) {
        this.setState({ selectionNumber: (selected - 1) });
        current = listItems.item(selected - 1);
      } else {
        current = listItems.item(this.state.selectionNumber);
      }
    }
    return current;
  }
  selection(event) {
    // createAndSendLogs('infos', 'selection', 'Search Box', 'Text value entered in Search box');
    let current = null;
    const evt = (event) ? event : window.event;
    const key = (evt.which) ? evt.which : evt.keyCode;
    const selected = listItems.length;
    if (selected <= 0) {
      return false;
    }
    if (key === 38 || key === 40) {
      evt.preventDefault();
    }
    const element = document.querySelector('.selected');
    if (element) {
      element.classList.remove('selected');
    }
    current = this.subSelection(key, current, selected);
    if (current) {
      current.classList.add('selected');
      const text = current.querySelector('span').textContent.split(' ');
      this.setState({ searchText: (`${text[0]}, ${text[1]}`) });
      current.scrollIntoView(false);
    }
    return true;
  }

  handleChange(event) {
    // createAndSendLogs('infos', 'handleChange', 'Search Box', event.target.value);
    if (!this.state.selectUser) {
      this.setState({ selectUser: true });
    }
    this.setState({ selectionNumber: -1 });
    if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
      this.props.resetCampusDirectoryData();
      let query = event.target.value;
      this.setState({ searchText: query, serchTextPreserved: query });
      query = event.target.value.replace(/ /g, '');
      this.props.resetSearchItemClicked();
      if (query.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH) {
        this.searchQuery(query);
      }
      if (event.target.value === '') {
        this.setState({ searchText: event.target.value });
      }
    }
  }
  searchQuery(query) {
    // createAndSendLogs('infos', 'searchQuery', 'Search Box', JSON.stringify(query));
    let searchText = query.toLowerCase();
    searchText = searchText.split(',');
    const reqObj = {};
    if (searchText[0]) {
      reqObj.lastName = searchText[0];
    }
    if (searchText[1]) {
      const firstName = searchText[1];
      if (firstName) {
        reqObj.firstName = firstName;
      }
    }

    this.props.getCampusDirectoryData(reqObj);
  }
  render() {
    const props = this.props;
    return (
      <Row>
        {props.loading && <Spinner />}
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.onSearchText}>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' onKeyDown={this.selection} placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                  <button className={`icon-addon btn btn-link btnnoPadding openSansLight ${this.state.searchText === '' ? 'show' : 'hide'}`}><ImageComponent imagePath={SEARCH_ICON} imagealtText={'Search Icon'} /></button>
                  <Link className='icon-addon-right btnnoPadding openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} imagealtText={'Close Icon'} /></Link>
                  <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
                </FormGroup>
                {(props.campusSimpleSearchData && props.campusSimpleSearchData.data && props.campusSimpleSearchData.data.length > 0 && this.state.searchText.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH && !props.searchClick && this.state.selectUser) &&
                  <AutoPopulateList selectedUser={this.selectedUser} populatedList={props.campusSimpleSearchData.data} />}
              </Col>
              <Col xs={12} sm={3}>
                <FormGroup>
                  <Link onClick={this.onSearchText} disabled={this.state.searchText.trim() === '' ? true : false} className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn mt20 pl10 searchButton'>{translateText('common:SEARCH')}</Link>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

SearchBox.propTypes = {
  resetCampusDirectoryData: React.PropTypes.func,
  getCampusDirectoryData: React.PropTypes.func,
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
