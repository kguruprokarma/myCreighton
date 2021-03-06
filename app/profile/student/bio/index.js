/*Created Date: - 18th -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';
import { browserTitle } from '../../../common/utility';
import AlertComponent from '../../../common/alertComponent';
import LegalName from './components/legalName';
import HomeAddress from './components/homeAddress';
import Address from './components/address';
import PrimaryContact from './components/primaryContact';
import EmergencyContact from './components/emergencyContact';
import Email from './components/email';
import Other from './components/other';
import RelationDetail from './components/relationDetail';
import * as actionCreators from '../../actions';
import LeftNav from '../../../common/leftNav';
import Spinner from '../../../common/spinner';
import HeaderLabel from '../../../common/headerLabel';
import * as CommonConstants from '../../../constants/commonConstants';

export class Profile extends React.PureComponent {
  componentWillMount() {
    const props = this.props;
    props.getStudentProfileData();
    browserTitle(translateText('common:PROFILE_MY_PROFILE'));
  }

  render() {
    const props = this.props;
    const USER_DATA = props.profile === CommonConstants.STUDENT_LABEL && props.profileData;
    return (
      <section role='region' className='section-container'>
        {props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {(USER_DATA && USER_DATA.data.length>0) &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <form>
                <LegalName legalName={USER_DATA.data[0].legal_name} />
                <HomeAddress homeAddress={USER_DATA.data[0].home_address} />
                <Address schoolAddress={USER_DATA.data[0].school_address} />
                <PrimaryContact primaryContact={USER_DATA.data[0].primary_phone_no} />
                <EmergencyContact data={USER_DATA.data[0]} />
                <Email professionalLabel={translateText('common:COMMON_SCHOOL')} professionalEmail={USER_DATA.data[0].email.school_email} isShowPersonalEmail={false} />
                <Other profile={props.profile} detail={USER_DATA.data[0]} />
                <RelationDetail dateOfBirth={USER_DATA.data[0].birth_date} parentDetail={USER_DATA.data[0].parent} gurdianDetail={USER_DATA.data[0].guardian} />
              </form>
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={props.profile} />
            </Col>
          </Row>
        }
        {((!USER_DATA && !props.loading) || (USER_DATA.error) || (USER_DATA && USER_DATA.data.length<=0)) &&
          <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
        }
      </section>
    );
  }
}

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.profileReducer.profileData.data,
    profile: bioState.profileReducer.profile,
    loading: bioState.profileReducer.isLoading

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
