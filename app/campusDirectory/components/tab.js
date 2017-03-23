/* Created Date: - 20th, Mar-2017
 * This component is used to display top navigatin bar for simple search and advanced search List
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';
import * as CommonConstants from '../../constants/commonConstants';

class CampusDirectoryTabController extends Component {

  constructor(props) {
    super(props);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
  }

  onSearchTypeChange(searchType) {
    this.props.onSearchTypeChange(searchType);
  }

  render() {
    return (
      <div className='btn-group btn-group-justified form-group openSansRegular fs0pt86'>
        <Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH} className={`btn active ${this.props.state === CommonConstants.SIMPLE_SEARCH ? 'btn-default active' : 'btn-default'}`} onClick={this.onSearchTypeChange.bind(this, CommonConstants.SIMPLE_SEARCH)}>{translateText('common:SIMPLE_SEARCH')}</Link>
        <Link className='btn btn-default'>{translateText('common:ADVANCED_SEARCH')}</Link>
        {/*<Link to={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.ADVANCED_SEARCH} className={`btn ${this.props.state === CommonConstants.ADVANCED_SEARCH ? 'btn-default active' : 'btn-default'}`} onClick={this.onSearchTypeChange.bind(this, CommonConstants.ADVANCED_SEARCH)}>{translateText('common:ADVANCED_SEARCH')}</Link>*/}
      </div>
    );
  }
}

export default CampusDirectoryTabController;
