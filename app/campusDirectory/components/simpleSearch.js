/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Alert } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import * as actionCreators from '../actions';
import SearchBox from './searchBox';
import SearchTabController from './tab';
import Style from '../style.css';

export class SimpleSearchDirectory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
    this.onSearchTypeChange(this.props.params.searchtype);
    this.state = { presentState: '' };
  }

  onSearchTypeChange(searchType) {
    //TODO:: for advanced search
  }

  onSearchText(text) {
    if (!text) return;
    const searchText = text.split(' ');
    const reqObj = {
      firstName: searchText[0],
      lastName: searchText[1]
    };
    this.props.getCampusDirectoryData(reqObj);
  }

  render() {
    return (
      <section>
        <div>
          <Row>
            <Col md={4} sm={6} xs={12} className='hidden-md hidden-lg hidden-sm controller-buttons'>
              <SearchTabController state={this.state.presentState} onSearchTypeChange={this.onSearchTypeChange} />
            </Col>
          </Row>
          <SearchBox searchString={this.props.searchString} state={this.state} onSearchText={this.onSearchText} currentPath={this.props.route.path.split('/')[1]} />
        </div>

      </section>
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