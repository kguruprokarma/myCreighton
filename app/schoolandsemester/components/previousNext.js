/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import {findIndex} from 'lodash';
import * as ROUTE_URL from '../../constants/routeContants';
import { translateText } from '../../common/translate'; 
import {semesterDataObj} from '../constants/semesterData';

class PreviousNext extends React.Component {
  componentWillMount() {
  }
  render() {
    const props = this.props;
    const currentIndex = findIndex(semesterDataObj, ['objectKey', props.currentPath]);

    const totalLength = semesterDataObj.length-1;
    let nextUrl;
    let prevUrl;
    if (currentIndex < totalLength) {
      nextUrl = semesterDataObj[currentIndex+1].objectKey;
    }
    if (currentIndex > 0) {
      prevUrl = semesterDataObj[currentIndex-1].objectKey;
    }
    return (

      <Row className='row' >
        <Col className='form-group col-xs-6'>
          <Link to={`${ROUTE_URL.SCHOOLS_AND_SEMESTER}/${prevUrl}`} className={`btn btn-primary ${currentIndex===0?'disableButton':''}`}>
            <span className='glyphicon glyphicon-chevron-left' /> {translateText('common:PREVIOUS')}
          </Link>
        </Col>
        <Col className='form-group col-xs-6 text-right'>
          <Link to={`${ROUTE_URL.SCHOOLS_AND_SEMESTER}/${nextUrl}`} className={`btn btn-primary ${currentIndex===totalLength?'disableButton':''}`}> {translateText('common:NEXT')}
            <span className='glyphicon glyphicon-chevron-right' />
          </Link>
        </Col>
      </Row>
    );
  }
}

export default PreviousNext;
