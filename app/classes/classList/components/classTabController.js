/*Created Date: - 27th -01 -2017
 *Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';
import * as CommonConstants from '../../../constants/commonConstants';

class ClassTabController extends Component {

  onDayChange(day) {
    this.props.onChangeOfTab(day);
  }

  render() {
    return (
      <div className='btn-group btn-group-justified form-group openSansRegular fs0pt86'>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.TODAY} className={`btn ${this.props.state === CommonConstants.TODAY ? 'btn-default active' : 'btn-default'}`} onClick={this.onDayChange.bind(this, CommonConstants.TODAY)}>{translateText('common:CLASSES_TODAY')}</Link>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.WEEK} className={`btn ${this.props.state === CommonConstants.WEEK ? 'btn-default active' : 'btn-default'}`} onClick={this.onDayChange.bind(this, CommonConstants.WEEK)}>{translateText('common:CLASSES_WEEK')}</Link>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.LIST} className={`btn ${this.props.state === CommonConstants.LIST ? 'btn-default active' : 'btn-default'}`} onClick={this.onDayChange.bind(this, CommonConstants.LIST)}>{translateText('common:CLASSES_A-Z')}</Link>
      </div>
    );
  }
}

export default ClassTabController;
