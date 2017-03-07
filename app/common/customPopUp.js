/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import * as actionCreators from '../dashboard/actions';
import UserDetail from '../dashboard/components/userDetail';
import ProfileMenu from '../header/components/profileMenu';
import { AuthUserDetails } from './utility';
import * as CommonConstants from '../constants/commonConstants';
import i18n from '../i18n';

export class CustomPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.role = this.props.userData ? this.props.userData.userRole : AuthUserDetails().userRole;
    const userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = AuthUserDetails().netid;
    if (this.role) { this.props.getUserDetailsData(userReqObj); }
  }
  signOut() {
    localStorage.removeItem('roleInfo');
    sessionStorage.removeItem('lang');
    hashHistory.replace('/');
    location.reload();
  }
  changeLanguage() {
    sessionStorage.setItem('lang', 'es');
    i18n.init({ lng: sessionStorage.getItem('lang') });
    location.reload();
  }
  render() {
    const { userDetailsData } = this.props;
    const ProfileMenus = ProfileMenu(this.role);

    return (<div className='customPopUp'>
      <span className='popupPointer'>&nbsp;</span>
      <ListGroup>
        <ListGroupItem>
          {userDetailsData && <div> <UserDetail userDetail={userDetailsData.data[0].legal_name} /></div>}
        </ListGroupItem>
        {ProfileMenus.map((item, index) => (
          <ListGroupItem key={item.itemName} onClick={item.itemName === CommonConstants.CHANGE_LANGUAGE ? this.changeLanguage.bind(this) : ''} className='openSansLight'>
            <Link to={item.link} onClick={item.itemName === CommonConstants.SIGN_OUT ? this.signOut.bind(this) : this.props.showPopValue} activeClassName='active'>
              {item.itemName}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>

    );
  }
}


const mapStateToProps = (dashboardState) => (
  {
    userDetailsData: dashboardState.dashboardReducer.userDetailsData.data,
    userData: dashboardState.auth.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomPopUp);
