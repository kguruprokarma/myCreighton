/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { Link } from 'react-router';
import * as ROUTE_URL from '../constants/routeContants';
import { translateText } from '../common/translate';

export class PreviousNext extends React.Component {
  componentWillMount() {

  }
  render() {
    const previousNextData = this.props;
    return (
      <div className='row' >
        <div className='form-group col-xs-6'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${previousNextData.presentCategory}/${previousNextData.prevItem}`} className={`btn btn-primary ${previousNextData.currentIndex===0?'disableButton':''}`}>
            <span className='glyphicon glyphicon-chevron-left' /> {translateText('common:PREVIOUS')}
          </Link>
        </div>
        <div className='form-group col-xs-6 text-right'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${previousNextData.presentCategory}/${previousNextData.nextItem}`} className={`btn btn-primary ${previousNextData.currentIndex===previousNextData.totalLength?'disableButton':''}`}> {translateText('common:NEXT')}
            <span className='glyphicon glyphicon-chevron-right' />
          </Link>
        </div>
      </div>
    );
  }
}

export default PreviousNext;
