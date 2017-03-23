import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Result from './components/resultBox';
import { translateText } from '../common/translate';
import SearchLeftNav from '../common/searchLeftNav';
import * as actionCreators from '../campusDirectory/actions';
import SimpleSearch from '../campusDirectory/components/simpleSearch';
 

export class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
    this.loadMore = this.loadMore.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.SimpleSearchData) {
      this.setState({userList: nextProps.SimpleSearchData.data.slice(0, 10)});
    }
  }

  loadMore () {
    const j = this.state.userList.length;  
    const moreResults = [...this.state.userList, ...this.props.SimpleSearchData.data.slice(j, j+10)];     
    this.setState({userList: moreResults});
  }

  render() {
    const props = this.props;
    return (
      <section>
        <SimpleSearch {...this.props} currentPath={props.route.path} searchString={props.params.searchquery} />
        <div>
          <Row>            
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <Row>
                <Col md={9} xs={9}>
                  {props.SimpleSearchData && this.state.userList.length} {props.SimpleSearchData && translateText('common:SEARCH_RESULT')}
                </Col>
                <Col md={3} xs={3} className='text-right'>
                  {props.SimpleSearchData && props.SimpleSearchData.data.length > this.state.userList.length && 
                    <a onClick={() => { this.setState({userList: props.SimpleSearchData.data}); }}>{translateText('common:SEARCH_ALL_RESULT')}</a>
                  }
                </Col>
              </Row>
              {this.state.userList && this.state.userList.map((user, userindex) => (
                <Result {...user} key={userindex} />
              ))}
              {props.SimpleSearchData && props.SimpleSearchData.data.length > this.state.userList.length && 
                <div className='text-center'>
                  <button className='btn btn-default' onClick={this.loadMore}>{translateText('common:SEARCH_MORE_RESULT')}</button>
                </div>
              }
              
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <SearchLeftNav />
            </Col>
          </Row>
        </div>
      </section>
      
    );
  }
}

const mapStateToProps = (simpleSearchState) => (
  {
    SimpleSearchData: simpleSearchState.campusDirectoryReducer.campusSimpleSearch.data    
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);