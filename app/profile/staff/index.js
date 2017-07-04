/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import LegalName from '../student/bio/components/legalName';
import PrimaryContact from '../student/bio/components/primaryContact';
import EmergencyContact from '../student/bio/components/emergencyContact';
import Email from '../student/bio/components/email';
import Other from './components/other';
import StaffAddress from './components/staffAddress';
import MailAddress from './components/mailAddress';
import WorkAddress from './components/workAddress';
import * as actionCreators from '../actions';
import LeftNav from '../../common/leftNav';
import AlertComponent from '../../common/alertComponent';
import HeaderLabel from '../../common/headerLabel';
import * as CommonConstants from '../../constants/commonConstants';
import { browserTitle, createAndSendLogs } from '../../common/utility';
import Spinner from '../../common/spinner';
import FamilyDetail from '../faculty/bio/components/family';

export class StaffProfile extends React.PureComponent {

  componentWillMount() {
    const props = this.props;
    props.getStaffProfileData();
    browserTitle(translateText('common:PROFILE_MY_PROFILE'));
  }

  render() {
    const props = this.props;
    const USER_DATA = props.profile === CommonConstants.STAFF_LABEL && props.profileData;    
    if (((!USER_DATA && !props.loading) || (USER_DATA.error) || (USER_DATA && USER_DATA.data.length<=0))) {
      createAndSendLogs('error', 'render', 'StaffProfile', JSON.stringify(USER_DATA));
    } else if (USER_DATA && USER_DATA.data && USER_DATA.data.length > 0) {
      // createAndSendLogs('info', 'render', 'StaffProfile', JSON.stringify(USER_DATA));
    }
    return (
      <section role='region' className='section-container'>
        {props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {USER_DATA && USER_DATA.data && USER_DATA.data.length>0 &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <form>
                <LegalName legalName={USER_DATA.data[0].staff_name} />
                <StaffAddress staffAddress={USER_DATA.data[0].faculty_address} />
                <WorkAddress workAddress={USER_DATA.data[0].work_address} profile={props.profile} />
                <MailAddress mailAddress={USER_DATA.data[0].mail_address} />
                <PrimaryContact primaryContact={USER_DATA.data[0].phone} />
                <EmergencyContact data={USER_DATA.data[0]} />
                <Email professionalLabel={translateText('common:COMMON_SCHOOL')} professionalEmail={USER_DATA.data[0].work_email} personalLabel={translateText('common:COMMON_PERSONAL')} personalEmail={USER_DATA.data[0].personal_email} isShowPersonalEmail />
                <Other profile={props.profile} detail={USER_DATA.data[0]} />
                <FamilyDetail familyDetail={USER_DATA.data[0]} />
              </form>
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={props.profile} />
            </Col>
          </Row>
        }
        {((!USER_DATA && !props.loading) || (USER_DATA.data && USER_DATA.data.length <= 0) || (USER_DATA.error)) &&
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
