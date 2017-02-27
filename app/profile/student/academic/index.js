/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AcademicStatus from './components/academicStatus';
import AdvisorInformation from './components/advisorInformation';
import { Link } from 'react-router';
import * as actionCreators from './actions';
import * as profileActionCreators from '../../actions';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';
import { authUserDetails } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';

export class Academic extends React.PureComponent {

  constructor() {
    super();
  }

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = '2775739283';
    this.props.getAcademicData(userReqObj);
  }

  render() {
    let USER_DATA = this.props.academicData;
    return (
      <section id='academic'>
        <HeaderLabel headerLabel={translateText('common:PROFILE_ACADEMIC')} />
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              {/*<AcademicStatus json={USER_DATA.studentProfile.academicDetail} />
                            <AdvisorInformation json={USER_DATA.studentProfile.academicDetail} />*/}
              <AcademicStatus json={USER_DATA.data[0]} />
              <AdvisorInformation json={USER_DATA.data[0]} />
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={this.props.profile} />
            </Col>
          </Row>
        }
      </section>
    );
  }
}

const mapStateToProps = (academicState) => (
  {
    academicData: academicState.academicReducer.academicData.data,
    profile: academicState.academicReducer.profile

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Academic);
