/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from './components/legalName';
import HomeAddress from './components/homeAddress';
import SchoolAddress from './components/schoolAddress';
import PrimaryContact from './components/primaryContact';
import EmergencyContact from './components/emergencyContact';
import Email from './components/email';
import Other from './components/other';
import RelationDetail from './components/relationDetail'
import * as actionCreators from './actions';
import { Link } from 'react-router';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';
import { translate } from 'react-i18next';
import i18n from '../../../i18n';

@translate([], { wait: true })
export class Profile extends React.PureComponent {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getStudentProfileData()
  }

  render() {
    let USER_DATA = this.props.profileData;
    const { t } = this.props;
    return (
      <section>
        <HeaderLabel headerLabel={t('common:MY_PROFILE')} />
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className="userData pull-right">
              <LegalName legalName={USER_DATA.studentProfile.bioData.legalName} i18nTranslate={t} />
              <HomeAddress homeAddress={USER_DATA.studentProfile.bioData.address.home} i18nTranslate={t} />
              <SchoolAddress schoolAddress={USER_DATA.studentProfile.bioData.address.school} i18nTranslate={t} />
              <PrimaryContact primaryContact={USER_DATA.studentProfile.bioData.contactDetail} i18nTranslate={t} />
              <EmergencyContact emergencyContact={USER_DATA.studentProfile.bioData.contactDetail.emergencyContact} i18nTranslate={t} />
              <Email email={USER_DATA.studentProfile.bioData.contactDetail.email} i18nTranslate={t} />
              <Other other={USER_DATA.studentProfile.bioData.contactDetail} i18nTranslate={t} />
              <RelationDetail relationDetail={USER_DATA.studentProfile.bioData.contactDetail.relationDetail} i18nTranslate={t} />
            </Col>
            <Col md={3} sm={4} className="hidden-xs">
              <LeftNav i18nTranslate={t} />
            </Col>
          </Row>
        }
      </section>
    );
  }
}

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.studentProfileReducer.profileData.data

  })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
