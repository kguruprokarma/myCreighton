/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import BusinessInformation from './components/businessInformation';
import ProfessionalDevelopment from './components/professionalDevelopment';
import * as actionCreators from './actions';
import LeftNav from '../../../common/leftNav';
import HeaderLabel from '../../../common/headerLabel';
import AlertComponent from '../../../common/alertComponent';
import { translateText } from '../../../common/translate';
import { authUserDetails, browserTitle } from '../../../common/utility';

export class StaffProfessional extends React.PureComponent {

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = authUserDetails().netid;
    this.props.getProfessionalData(userReqObj);
    browserTitle(translateText('common:STAFF_PROFESSIONAL'));
  }

  render() {
    const props = this.props;
    const USER_DATA = props.professionalData.data;
    return (
      <section role='region' id='academic'>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:STAFF_PROFESSIONAL')} /></div>
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <form>
                <BusinessInformation data={USER_DATA.data[0]} />
                <ProfessionalDevelopment data={USER_DATA.data[0]} />
              </form>
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={this.props.profile} />
            </Col>
          </Row>
        }
        {((!USER_DATA && !props.loading) || (USER_DATA.error)) &&
          <AlertComponent typename='danger' msg={translateText('common:NO_RESPONSE')} />
        }
      </section>
    );
  }
}

StaffProfessional.propTypes = {
  profile: React.PropTypes.string,
  getProfessionalData: React.PropTypes.func
};

const mapStateToProps = (professionalState) => (
  {
    professionalData: professionalState.professionalReducer.professionalData,
    profile: professionalState.professionalReducer.profile

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfessional);
