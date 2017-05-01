/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import * as actionCreators from '../actions';
import SearchBoxComponent from './searchBox';
import SearchTabController from './campusTabController';
import '../style.css';

export class SimpleSearchDirectory extends React.PureComponent {
  constructor(props) {
    super(props);
    //const simpleSearchDirectoryPorps = this.props;
    //this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
    //this.onSearchTypeChange(simpleSearchDirectoryPorps.params.searchtype);
    this.state = { presentState: '' };
  }

  // onSearchTypeChange() {

  // }

  onSearchText(textValue) {
    const simpleSearchDirectoryPorps = this.props;
    const text = textValue.replace(/ /g, '');
    if (!text) return;
    const searchText = text.toLowerCase().split(',');
    const reqObj = {};
    if (searchText[0]) {
     // reqObj.lastName = searchText[0].charAt(0).toUpperCase() + searchText[0].slice(1);
      reqObj.lastName = searchText[0];
    }
    if (searchText[1]) {
     // const firstName = searchText[1].charAt(0).toUpperCase() + searchText[1].slice(1);
      const firstName = searchText[1];
      if (firstName) {
        reqObj.firstName = firstName;
      }
    }
    simpleSearchDirectoryPorps.searchItemClicked();
    simpleSearchDirectoryPorps.getCampusDirectoryData(reqObj);
  }

  render() {
    const simpleSearchDirectoryPorps = this.props;
    return (
      <article role='article'>
        <Row>
          <Col md={4} sm={6} xs={12} className='hidden-md hidden-lg hidden-sm controller-buttons'>
            {/*<SearchTabController state={this.state.presentState} onSearchTypeChange={this.onSearchTypeChange} />*/}
            <SearchTabController state={this.state.presentState} />
          </Col>
        </Row>
        <SearchBoxComponent searchString={simpleSearchDirectoryPorps.searchString} state={this.state} onSearchText={this.onSearchText} currentPath={simpleSearchDirectoryPorps.route.path.split('/')[1]} />
      </article>
    );
  }
}


const mapStateToProps = (simpleSearchState) => (
  {
    campusSimpleSearchData: simpleSearchState.campusDirectoryReducer.campusSimpleSearch.data,
    searchType: simpleSearchState.campusDirectoryReducer.searchType,
    loading: simpleSearchState.campusDirectoryReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSearchDirectory);