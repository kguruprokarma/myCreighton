/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import { ListGroupItem, ListGroup, Row, Col } from 'react-bootstrap';
import * as actionCreators from '../dashboard/actions';
import UserDetail from '../dashboard/components/userDetail';
import profileMenu from '../header/components/profileMenu';
import { authUserDetails } from './utility';
import i18n from '../i18n';
import { translateText } from '../common/translate';

export class CustomPopUp extends React.Component {
  constructor(props) {
    super(props);
    const customPopUpProps = this.props;
    this.state = {
      languageState: true
    };
    this.role = this.props.userData ? this.props.userData.userRole : authUserDetails().userRole;
    if (this.role) {
      customPopUpProps.getUserDetailsData(`/${this.role}`);
    }
    this.languageChangeBind = this.changeLanguage.bind(this);
    this.signOutBind = this.signOut.bind(this);
  }

  signOut() {
    localStorage.removeItem('roleInfo');
    localStorage.removeItem('lang');
    //localStorage.removeItem('setFilterValue');
    localStorage.removeItem('classMasterCopy');
    localStorage.removeItem('assignmentMasterCopy');
    hashHistory.replace('/');
    location.reload();
  }
  changeLanguage(langKey) {
    localStorage.setItem('lang', langKey);
    localStorage.setItem('temp', localStorage.getItem('i18nextLng'));
    i18n.init({ lng: localStorage.getItem('lang') });
    location.reload();
  }
  render() {
    const props = this.props;
    const userDetails = props.userDetailsData;
    const ProfileMenus = profileMenu(this.role);
    const languages = [{ 'langkey': 'en', 'language': translateText('common:COMMON_ENGLISH') }, { 'langkey': 'es', 'language': translateText('common:COMMON_SPANISH') }];
    return (<div className='customPopUp'>
      <span className='popupPointer'>&nbsp;</span>
      {this.state.languageState && <ListGroup>
        <ListGroupItem>
          {userDetails && <div> <UserDetail userDetail={userDetails} /></div>}
        </ListGroupItem>
        {ProfileMenus.map((item) => (
          <ListGroupItem key={item.itemName} className='openSansLight profile-icon'>
            {
              item.itemName === translateText('common:COMMON_CHANGE_LANGUAGE') ?
                <Link onClick={() => { this.setState({ languageState: false }); }} > {item.itemName}</Link>
                : <Link to={item.link} onClick={item.itemName === translateText('common:COMMON_SIGN_OUT') ? this.signOutBind : this.props.showPopValue} activeClassName='active'>
                  {item.itemName}
                </Link>
            }
          </ListGroupItem>
        ))}
      </ListGroup>
      }
      {!(this.state.languageState) &&
        <ListGroup>
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
  showPopValue: React.PropTypes.string,
  userData: React.PropTypes.string
};

const mapStateToProps = (dashboardState) => (
  {
    userDetailsData: dashboardState.dashboardReducer.userDetailsData.data,
    userData: dashboardState.auth.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomPopUp);
