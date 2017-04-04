import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Result from './components/resultBox';
import { translateText } from '../common/translate';
import SearchLeftNav from '../common/searchLeftNav';
import * as actionCreators from '../campusDirectory/actions';
import SimpleSearch from '../campusDirectory/components/simpleSearch';
import HeaderLabel from '../common/headerLabel';
import Spinner from '../common/spinner';
import AlertComponent from '../common/alertComponent';
import '../searchResults/style.css';

export class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (propsNext.SimpleSearchData) {
      this.setState({ userList: propsNext.SimpleSearchData.data.slice(0, 10) });
    }
  }

  loadMore () {
    const j = this.state.userList.length;  
    const props = this.props;
    const moreResults = [...this.state.userList, ...props.SimpleSearchData.data.slice(j, j+10)];     
    this.setState({userList: moreResults});
  }

  render() {
    const props = this.props;
    return (
      <section role='region'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:SEARCH_RESULT')} />
        </div>
        { props.loading && <Spinner />}
        <Row>
          <Col sm={8} md={9} xs={12} className='userData pull-right'>
            <SimpleSearch {...this.props} currentPath={props.route.path} searchString={props.params.searchquery} />
            <div className='openSansLight graybtBorder pb5'>
              <Row>
                <Col md={9} xs={6}>
                  {props.SimpleSearchData && this.state.userList.length} {props.SimpleSearchData && translateText('common:SEARCH_RESULT')}
                </Col>
                <Col md={3} xs={6} className='text-right'>
                  {props.SimpleSearchData && props.SimpleSearchData.data.length > this.state.userList.length &&
                    <button className='btn btn-link btnnoPadding show-all-btn' onClick={() => { this.setState({ userList: props.SimpleSearchData.data }); }}>{translateText('common:SEARCH_ALL_RESULT')}</button>
                  }
                </Col>
              </Row>
            </div>
            { 
              this.state.userList.length > 0 ?
              this.state.userList && this.state.userList.map((user, userindex) => (
                <Result {...user} key={userindex} />
            )) :(props.SimpleSearchData ? <div> {translateText('common:NO_SEARCH_RESULT')}: <span className='cmpNoResult'> {`"${props.params.searchquery}"`} </span></div> : '')
            }
            {props.SimpleSearchData && props.SimpleSearchData.data.length > this.state.userList.length &&
              <div className='text-center mt20'>
                <button className='btn btn-default openSansLight cmpsDirLoadMoreBtn' onClick={this.loadMore}>{translateText('common:SEARCH_MORE_RESULT')}</button>
              </div>
            }
            {((!props.SimpleSearchData && !props.loading)) &&
              <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
            }
          </Col>
          <Col md={3} sm={4} className='hidden-xs'>
            <SearchLeftNav />
          </Col>
        </Row>
      </section>

    );
  }
}

const mapStateToProps = (simpleSearchState) => (
  {
    SimpleSearchData: simpleSearchState.campusDirectoryReducer.campusSimpleSearch.data,
    loading: simpleSearchState.campusDirectoryReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);