/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link ,hashHistory} from 'react-router';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import * as actionCreators from '../dashboard/actions';
import UserDetail from '../dashboard/components/userDetail';
import ProfileMenu from '../header/components/profileMenu';
import {AuthUserDetails} from './utility'; 

export class CustomPopUp extends React.Component {
  constructor(props) {
    super(props);    
    this.role = this.props.userData?this.props.userData.userRole : AuthUserDetails().userRole;
    if(this.role)
      this.props.getUserDetailsData(`/${this.role}`);
  }
  signOut(){
    localStorage.removeItem('roleInfo');
    hashHistory.replace('/');
  }
  render() {
    const { userDetailsData } = this.props;
    const ProfileMenus = ProfileMenu(this.role);

    return (<div className='customPopUp'>
      <span className='popupPointer'>&nbsp;</span>
      <ListGroup>
        <ListGroupItem>
          {userDetailsData && <div> <UserDetail userDetail={userDetailsData} /></div>}
        </ListGroupItem>
        {ProfileMenus.map((item, index) => (
          <ListGroupItem key={item.itemName} className='openSansLight'>
            <Link to={item.link} onClick={item.itemName === 'Signout'?this.signOut.bind(this): this.props.showPopValue} activeClassName='active'>
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
