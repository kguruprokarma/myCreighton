/*Created Date: - 7 -02 -2017
 *Usage of file: - Created to display popup*
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import { ListGroupItem, ListGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import * as actionCreators from '../dashboard/actions';
import * as profileData from '../profile/actions';
import * as headerActions from '../header/actions';
import UserDetail from '../dashboard/components/userDetail';
import profileMenu from '../header/components/profileMenu';
import { authUserDetails } from './utility';
import i18n from '../i18n';
import { translateText } from '../common/translate';
import * as urlConstants from '../constants/urlConstants';
import * as roleConstants from '../constants/commonConstants';

export class CustomPopUp extends React.Component {
  constructor(props) {
    super(props);
    const customPopUpProps = this.props;
    this.state = {
      languageState: true
    };
    this.role = authUserDetails().userRole;
    if (this.role) {
     // customPopUpProps.getUserDetailsData(`/${this.role}`);
      if (!localStorage.getItem('infos')) {
        if (this.role === roleConstants.ROLE_FACULTY) {
          props.getFacultyProfileData();
        } else if (this.role === roleConstants.ROLE_STAFF) {
          props.getStaffProfileData();
        } else if (this.role === roleConstants.ROLE_STUDENT) {
          props.getStudentProfileData();
        }        
      }
    }
    this.languageChangeBind = this.changeLanguage.bind(this);
    //this.signOutBind = this.signOut.bind(this);
    this.signOutPopUp = this.signOutPopUp.bind(this);
  }

  signOutPopUp() {
    this.props.popUpClose();
    this.props.openSignOutPopUp();
  }
  changeLanguage(langKey) {
    localStorage.setItem('lang', langKey);
    localStorage.setItem('temp', localStorage.getItem('i18nextLng'));
    i18n.init({ lng: localStorage.getItem('lang') });
    location.reload();
  }
  render() {
    const props = this.props;
    //const userDetails = props.userDetailsData;
    const profileDetails = JSON.parse(localStorage.getItem('infos')) || props.profileData;
    const ProfileMenus = profileMenu(this.role);
    if (profileDetails && profileDetails.data) {
      localStorage.setItem('infos', JSON.stringify(profileDetails));
    }
    let profileInformation;
    if (profileDetails && profileDetails.data && profileDetails.data.length > 0) {
      const data = profileDetails.data[0];
      if (this.role === roleConstants.ROLE_FACULTY) {        
        profileInformation = data.faculty_name;
      } else if (this.role === roleConstants.ROLE_STAFF) {
        profileInformation = data.staff_name;
      } else if (this.role === roleConstants.ROLE_STUDENT) {
        profileInformation = data.legal_name;
      }    
    }

    const languages = [{ 'langkey': 'en', 'language': translateText('common:COMMON_ENGLISH') }, { 'langkey': 'es', 'language': translateText('common:COMMON_SPANISH') }];
    return (<div className='customPopUp'>
      <span className='popupPointer'>&nbsp;</span>
      {this.state.languageState && <ListGroup className='popup-box-shaow'>
        <ListGroupItem>
          {profileInformation && <div> <UserDetail userDetail={profileInformation} role={this.role} /></div>}
        </ListGroupItem>
        {ProfileMenus && ProfileMenus.map((item) => (
          <ListGroupItem key={item.itemName} className='openSansLight profile-icon'>
            {
              item.itemName === translateText('common:COMMON_CHANGE_LANGUAGE') ?
                <Link onClick={() => { this.setState({ languageState: false }); }} > {item.itemName}</Link>
                : <Link to={item.link} onClick={item.itemName === translateText('common:COMMON_SIGN_OUT') ? this.signOutPopUp : this.props.showPopValue} activeClassName='active'>
                  {item.itemName}
                </Link>
            }
          </ListGroupItem>
        ))}
      </ListGroup>
      }
      {!(this.state.languageState) &&
        <ListGroup className='popup-box-shaow'>
          <ListGroupItem className='openSansLight'>
            <Row>
              <Col sm={2} xs={2}>
                <button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' onClick={() => { this.setState({ languageState: true }); }} />
              </Col>
              <Col sm={10} xs={10}>
                <p className='selectLang pt5'>{translateText('common:COMMON_SELECT_LANGUAGE')}</p>
              </Col>
            </Row>
          </ListGroupItem>
          {languages.map((lanItem) => (
            <ListGroupItem key={lanItem.language} onClick={() => { this.languageChangeBind(lanItem.langkey); }} className='openSansLight'>
              <Link>{lanItem.language}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      }
      
    </div>
    );
  }
}

CustomPopUp.propTypes = {
  showPopValue: React.PropTypes.func,
  userData: React.PropTypes.string
};

const mapStateToProps = (dashboardState) => (
  {
    //userDetailsData: dashboardState.dashboardReducer.userDetailsData.data,
    profileData: dashboardState.profileReducer.profileData.data,
    userData: dashboardState.auth.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, profileData, headerActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomPopUp);
