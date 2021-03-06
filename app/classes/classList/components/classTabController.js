/*Created Date: - 27th -01 -2017
 *Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';
import * as CommonConstants from '../../../constants/commonConstants';

class ClassTabController extends Component {
  constructor(props) {
    super(props);
    this.onDayChange = this.onDayChange.bind(this);
  }
  onDayChange(day) {
    const props = this.props;
    props.onChangeOfTab(day);
  }

  render() {
    const props = this.props;
    return (
      <nav role='navigation' id='navigation03' className='btn-group btn-group-justified form-group openSansRegular fs0pt86'>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.TODAY} className={`btn ${props.state === CommonConstants.TODAY ? 'btn-default active' : 'btn-default'}`} onClick={() => { this.onDayChange(CommonConstants.TODAY); }}>{translateText('common:CLASSES_TODAY')}</Link>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.WEEK} className={`btn ${props.state === CommonConstants.WEEK ? 'btn-default active' : 'btn-default'}`} onClick={() => { this.onDayChange(CommonConstants.WEEK); }}>{translateText('common:CLASSES_WEEK')}</Link>
        <Link to={ROUTE_URL.CLASSES + ROUTE_URL.LIST} className={`btn ${props.state === CommonConstants.LIST ? 'btn-default active' : 'btn-default'}`} onClick={() => { this.onDayChange(CommonConstants.LIST); }}>{translateText('common:CLASSES_A-Z')}</Link>
      </nav>
    );
  }
}

export default ClassTabController;
