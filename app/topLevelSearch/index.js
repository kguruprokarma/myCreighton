import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { translateText } from '../common/translate';
import ImageComponent from '../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON, DOWN_ARROW } from '../constants/imageConstants';
import Spinner from '../common/spinner';
import { authUserDetails, browserTitle } from '../common/utility';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import * as ROUTE_URL from '../constants/routeContants';

export class TopLevelSearch extends React.PureComponent {

  constructor(props) {
    super(props);
    const topLevelSearchProps = this.props;
    const searchQuery = topLevelSearchProps.params.searchquery;
    this.state = {
      searchText: searchQuery ? searchQuery : '',
      filteredArray: '',
      onFinalCall: false,
      showHideDesc: true,
      isfilteredArrayEmpty: false
    };
    this.onSearchText = this.onSearchText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.applyFilterOnData = this.applyFilterOnData.bind(this);
    this.clearSearchText = this.clearSearchText.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.updateFilterState = this.updateFilterState.bind(this);
  }

  componentWillMount() {
    browserTitle(translateText('common:COMMON_SEARCH'));
    if (this.state.searchText) {
      this.searchTextOnBack(this.state.searchText);
    } 
  }


  componentDidUpdate() {
    const props = this.props;
    if (props.searchData.length > 0 && this.state.onFinalCall) {
      this.updateFilterState();
      const searchTextLowerCase = this.state.searchText.toLocaleLowerCase();
      this.applyFilterOnData(searchTextLowerCase);
    }
  }


  onSearchText(event) {
    event.preventDefault();
    const props = this.props;
    const query = this.state.searchText.replace(/ /g, '');
    if (!query) {
      return false;
    }
    const role = authUserDetails().userRole;
    props.getSearchData(role);
    this.setState({ onFinalCall: true });
    const searchURL = `${ROUTE_URL.TOP_LEVEL_SEARCH}/${this.state.searchText}`;
    hashHistory.replace(searchURL);
    return true;
  }

  searchTextOnBack(inputVal) {
    const props = this.props;
    const query = inputVal;
    if (!query) {
      return false;
    }
    const role = authUserDetails().userRole;
    props.getSearchData(role);
    this.setState({ onFinalCall: true });
    const searchURL = `${ROUTE_URL.TOP_LEVEL_SEARCH}/${this.state.searchText}`;
    hashHistory.replace(searchURL);
    return true;
  }

  updateFilterState() {
    this.setState({ onFinalCall: false });
  }

  applyFilterOnData(searchText) {
    const props = this.props;
    if (props.searchData.length > 0) {
      const dataByRole = props.searchData;
      const res = [];
      dataByRole.map((singleData) => {
        let tempVal;
        const filterInput = singleData.name.toLowerCase();
        if (filterInput.indexOf(searchText) > -1) {
          tempVal = singleData;
          res.push(singleData);
        }
        return tempVal;
      });
      this.setState({ filteredArray: res });
      if (res.length === 0) {
        this.setState({ isfilteredArrayEmpty: true });
      } else {
        this.setState({ isfilteredArrayEmpty: false });
      }
    }
  }

  handleChange(event) {
    const query = event.target.value;
    if (query.length <= 125) {
      this.setState({ searchText: query });
    }
  }

  clearSearchText() {
    this.setState({ searchText: '' });
    this.setState({ isfilteredArrayEmpty: false });
  }
  showAllDesc(event) {
    event.preventDefault();
    this.setState({ showHideDesc: !this.state.showHideDesc });
  }


  render() {
    const props = this.props;
    const descStateClass = this.state.showHideDesc ? 'accord-active' : '';
    return (
      <section role='region' className='section-container'>
        {props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:COMMON_SEARCH')} /></div>
        <Row>
          <Col sm={12}>
            <Form className='searchForm' onSubmit={this.onSearchText}>
              <Row>
                <Col xs={9}>
                  <FormGroup>
                    <FormControl type='search' autoFocus value={this.state.searchText} onChange={this.handleChange} className='openSansLight input-lg topLevelSearch mt20 pl25' placeholder={translateText('common:SEARCH_MYCREIGHTON_FEATURES')} />
                    <button className={`icon-addon btn btn-link btnnoPadding openSansLight ${this.state.searchText === '' ? 'show' : 'hide'}`}><ImageComponent imagePath={SEARCH_ICON} /></button>
                    <Link className='icon-addon-right btnnoPadding openSansLight show' onClick={this.clearSearchText} ><ImageComponent imagePath={MENUCLOSE_ICON} /></Link>
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <Link onClick={this.onSearchText} disabled={this.state.searchText.trim() === '' ? true : false} className='openSansLight btn btn-default btn-large btn-block cmpsDirSearchBtn plr5 topSearchButton mt20'>{translateText('common:GO_BUTTON')}</Link>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <Row className='pb10 fs1pt2 openSansLight'>
              <Col sm={6} xs={6}>
                <span>{translateText('common:COMMON_DESCRIPTION')}:</span><button className='semisterShow' onClick={this.showAllDesc}>{this.state.showHideDesc ? translateText('common:COMMON_HIDE') : translateText('common:COMMON_SHOW')}</button>
              </Col>
            </Row>
            <Col>
              <ListGroup className={'main-list-group accordian-list-data'}>
                {this.state.filteredArray && this.state.filteredArray.map((linkDetails, linkIndex) => (
                  <ListGroupItem key={linkIndex}>
                    <Link to={linkDetails.url} >
                      <Row className='fs1pt2 openSansLight'>
                        <Col xs={10}>
                          <p className='semesterTitle'>{linkDetails.name}</p>
                        </Col>
                        <Col xs={2}>
                          <img src={DOWN_ARROW} alt='' className='pull-right rightArrow' />
                        </Col>
                      </Row>
                      <div className={`${descStateClass} accord-description mycu_darkgray`}>
                        {linkDetails.description}
                      </div>
                    </Link>
                  </ListGroupItem>
                ))}
                {this.state.isfilteredArrayEmpty && <div>{translateText('common:NO_MATCHES')}</div>}
              </ListGroup>
            </Col>
          </Col>
        </Row>
      </section>
    );
  }

}

const mapStateToProps = (searchState) => ({
  searchData: searchState.topLevelSearchReducer.searchData,
  loading: searchState.topLevelSearchReducer.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopLevelSearch);
