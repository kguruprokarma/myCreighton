/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';
import { authUserDetails } from '../../../common/utility';
import AcademicStatus from './components/academicStatus';
import AdvisorInformation from './components/advisorInformation';
import * as actionCreators from './actions';
import * as profileActionCreators from '../../actions';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import Spinner from '../../../common/spinner';
import HeaderLabel from '../../../common/headerLabel';

export class Academic extends React.PureComponent {

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = authUserDetails().netid;
    this.props.getAcademicData(userReqObj);
  }

  render() {
    const USER_DATA = this.props.academicData;
    return (
      <section id='academic'>
        {this.props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_ACADEMIC')} /></div>
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
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
    profile: academicState.academicReducer.profile,
    loading: academicState.academicReducer.isLoading

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Academic);
