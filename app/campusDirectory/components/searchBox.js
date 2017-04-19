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
import Spinner from '../../common/spinner';

const listItems = document.getElementsByClassName('result-list-item');

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    const constructorProps = props;
    const searchboxProps = this.props;
    this.state = constructorProps.state;
    this.state = { 
      searchText: searchboxProps.searchString ? searchboxProps.searchString : '',
      selectUser: true,
      selectionNumber: -1
    };
   // this.state.searchURL = '';
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this.selectedUser = this.selectedUser.bind(this);
    this.selection = this.selection.bind(this);
    if (constructorProps.currentPath === CommonConstants.SEARCH_RESULTS ) {
      searchboxProps.onSearchText(constructorProps.searchString);
    }
  }

  onSearchText(event) {
    event.preventDefault();
    const query = this.state.searchText.replace(/ /g, '');
    if (!query) {
      return false;
    }
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
    this.props.searchItemClicked();
    const searchURL = `${ROUTE_URL.SERCHRESULTS}/${this.state.searchText}`;
    hashHistory.replace(searchURL);
  }

  selectedUser(firstName, lastName) {
    this.setState({ searchText: (`${firstName}, ${lastName}`), selectUser: false });
  }

  clearSearchText() {
    this.setState({ searchText: '' });
  }

  selection(event) {
    let current = null;
    const evt = (event) ? event : window.event;
    const key = (evt.which) ? evt.which : evt.keyCode;
    const selected = listItems.length;
    if (selected<=0) {
      return false;
    }
   // if (key !== 40 && key !== 38) return;
    const element = document.querySelector('.selected');
    if (element) {
      element.classList.remove('selected');
    }
    if (key === 40) {
      this.setState({selectionNumber: (++this.state.selectionNumber)});
      if (this.state.selectionNumber === (selected)) {
        this.setState({selectionNumber: -1});
      } else if (this.state.selectionNumber >= selected) {
        this.setState({selectionNumber: (0)});
        current = listItems.item(0);
      } else {
        current = listItems.item(this.state.selectionNumber);
      }
    } else if (key === 38) {
      this.setState({selectionNumber: --this.state.selectionNumber});
      if (this.state.selectionNumber === -1) {
        this.setState({selectionNumber: (selected)});
      } else if (this.state.selectionNumber <= -2) {
        this.setState({selectionNumber: (selected-1)});
        current = listItems.item(selected-1);
      } else {
        current = listItems.item(this.state.selectionNumber);
      }
    }
    if (current) {
      current.classList.add('selected');
      const text = current.text.split(' ');
      this.setState({ searchText: (`${text[0]}, ${text[1]}`)});
      current.scrollIntoView(false);
    }
  }
  
  handleChange(event) {
    if (!this.state.selectUser) {
      this.setState({ selectUser: true });
    }
    this.setState({selectionNumber: -1});
   /* if (this.state.keySelection) {
      return false;
    }*/
   /* if (!event.target.value.trim()) {
      return false;
    }*/
 //   const txtShouldnotStartWithSpace = /^\S[A-Za-z,\s-]*$/;
//    const txtRestrictNumeric = /^[A-Za-z,\s-]*$/;
    if (event.target.value.length <= CommonConstants.CAMPUS_SEARCH_TEXT_LENGTH) {
      /* if (txtShouldnotStartWithSpace.test(event.target.value)) {
         if (txtRestrictNumeric.test(event.target.value)) {*/
      this.props.resetCampusDirectoryData();
      let query = event.target.value;
      this.setState({ searchText: query });
      query = event.target.value.replace(/ /g, '');
      this.props.resetSearchItemClicked();
      if (query.length > CommonConstants.CAMPUS_SEARCH_MINIUM_LENGTH) {
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
        /*   }
         }*/
      }
      if (event.target.value === '') {
        this.setState({ searchText: event.target.value });
      }
    }
  }

  render() {
    const props =this.props;
    return (
      <Row>
        { props.loading && <Spinner />}
        <Col xs={12}>
          <Form className='searchForm' onSubmit={this.onSearchText}>
            <Row>
              <Col xs={12} sm={9}>
                <FormGroup>
                  <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg cmpsDirSearch mt20' onKeyDown={this.selection} placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                  <button className={`icon-addon btn btn-link btnnoPadding openSansLight ${this.state.searchText === '' ? 'show' : 'hide'}`}><ImageComponent imagePath={SEARCH_ICON} /></button>
                  <Link className='icon-addon-right btnnoPadding openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></Link>
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
        {/*<Col xs={12}>
          {
<<<<<<< Updated upstream
            (props.campusSimpleSearchData && props.campusSimpleSearchData.data && props.campusSimpleSearchData.data.length === 0 && this.state.searchText) && <div> {translateText('common:NO_SEARCH_RESULT')}: <span className='cmpNoResult'>{this.state.searchText} </span></div>
=======
            (this.props.campusSimpleSearchData && this.props.campusSimpleSearchData.data && this.props.campusSimpleSearchData.data.length === 0 && this.state.searchText) && <div> {translateText('common:NO_SEARCH_RESULT')}: <span className='cmpNoResult'>{this.state.searchText}</span></div>
>>>>>>> Stashed changes
          }
        </Col>*/}

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
