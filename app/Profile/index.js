import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from './components/LegalName';
import HomeAddress from './components/HomeAddress';
import SchoolAddress from './components/SchoolAddress';
import PrimaryContact from './components/PrimaryContact';
import EmergencyContact from './components/EmergencyContact';
import Email from './components/Email';
import Other from './components/Other';
import RelationDetail from './components/RelationDetail'
import * as actionCreators from './actions';
import { Link } from 'react-router';
import styles from './style.css';

class Profile extends React.PureComponent {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getStudentProfileData()
  }

  render() {
    let USER_DATA = this.props.profileData
    return (
      <div>
        {USER_DATA && <div>
          <h1 className="bebasregular userHeading hidden-xs mb20 mt20">My Profile</h1>
          <div className="row">
            <div className="userLeftmenu col-sm-3 hidden-xs">
              <div className="llist-group openSansLight">
								<Link className="list-group-item">Change View</Link>
                <Link to="/Profile" className="list-group-item active">My Profile</Link>
                <Link to="/Academic" className="list-group-item ">Academic</Link>
                <Link className="list-group-item">Student Life</Link>
                <Link className="list-group-item">Settings</Link>
							</div>
            </div>
            <div className="userData col-sm-9">
              <LegalName json={USER_DATA.studentProfile.bioData.legalName} />
              <HomeAddress json={USER_DATA.studentProfile.bioData.address.home} />
              <SchoolAddress json={USER_DATA.studentProfile.bioData.address.school} />
              <PrimaryContact json={USER_DATA.studentProfile.bioData.contactDetail} />
              <EmergencyContact json={USER_DATA.studentProfile.bioData.contactDetail.emergencyContact} />
              <Email json={USER_DATA.studentProfile.bioData.contactDetail.email} />
              <Other json={USER_DATA.studentProfile.bioData.contactDetail} />
              <RelationDetail json={USER_DATA.studentProfile.bioData.contactDetail.relationDetail} />
            </div>
          </div></div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    profileData: state.studentProfileReducer.profileData.data

  })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
