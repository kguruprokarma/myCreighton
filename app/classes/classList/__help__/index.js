
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navigation from '../../../common/mainNav';
import * as actionCreators from '../../../footer/actions';
import ImageComponent from '../../../common/imageComponent';
import { DIVIDER_ICON } from '../../../constants/imageConstants';
import { translateText } from '../../../common/translate';
import '../../../help/help.css';

class ClassListHelp extends Component {
  constructor() {
    super();
    this.closeHelpPopUp = this.closeHelpPopUp.bind(this);
  }
  closeHelpPopUp() {
    this.props.helpPopUpClose();
  }
  render() {
    const props = this.props;
    return (
      <div className='view-container help-container help-classes' onClick={this.closeHelpPopUp}>
        <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' value='' onClick={this.closeHelpPopUp} />
        <header role='banner' id='header'>
          <h1 className='announced-only'>Page header</h1>
          <nav role='navigation' id='navigation01' className='container'>
            <div className='row'>
              <nav role='navigation' id='navigation01' className='pull-left ml15 mr0 hidden-lg hamburgerMenu position-relative'>
                <button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' />
                <div className='help-position return-icon-position visible-xs'>
                  <span className='arrow_sprite return-menu-arrow'>&nbsp;</span><span className='return-content'>{translateText('common:RETURN_TO_DASHBOARD')}</span>
                </div>
              </nav>
              <div className='visible-lg col-lg-10'>
                <h2 className='bebasregular logo mt0 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'><span className='hidden'>myCreighton</span></a></h2>
              </div>
              <div className='hidden-lg mobile-header text-left col-sm-8 col-xs-7'>
                <h2 className='bebasregular visible-sm visible-md logo mt10 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'>myCreighton</a></h2>
                <div className='visible-xs'>
                  <h1 className='bebasregular logo mt10 mb10 fs1pt4'>Class Schedule</h1>
                </div>
              </div>
              <div className='pull-right icons-list col-lg-2 col-sm-3 col-xs-3'>
                <ul className='pull-right list-inline mobile-no-wrap mb0'>
                  <li className='head-Icons top-search-icon'>
                    <a href='#/search'><span className='glyphicon glyphicon-search' /></a>
                  </li>
                  <li className='head-Icons notification-icon'>
                    <Link className='btn btn-link btnnoPadding'>
                      <span className='glyphicon glyphicon-bell ' aria-hidden='true' />
                      {props.notificationData.length > 0 && <span className='badge-notification'>{props.notificationData.length}</span>}
                    </Link>
                  </li>
                  <li className='head-Icons'>
                    <div className='popUp'>
                      <icon className='glyphicon glyphicon-user btnnoPadding' role='link' tabIndex='0' aria-label='Link to User Profile popup' />
                      <div className='popUpContainer' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Navigation navDisplay={props.navData} />
        <main role='main' id='content' className='container'><a id='maincontent' className='announced-only'>&nbsp;</a>
          <section role='region' id='classSchedule' className='section-container'>
            <div className='row'>
              <div className='hidden-xs col-md-8 col-sm-6 col-xs-12'>
                <div className='hidden-xs'>
                  <h1 role='banner' id='header' className='bebasregular headerLabel mt5 mb20'>Class Schedule</h1>
                </div>
              </div>
              <div className='controller-buttons classListButtons col-md-4 col-sm-6 col-xs-12'>
                <nav role='navigation' id='navigation03' className='btn-group btn-group-justified form-group openSansRegular help-tabs fs0pt86'><a className='btn btn-default' href='#/classes/today'>Today</a><a className='btn btn-default active' href='#/classes/week'>Week</a><a className='btn btn-default' href='#/classes/list'>A-Z</a></nav>
                <div className='container-fluid position-relative'>
                  <div className='clases-help-content'>
                    <div className='classes-arrows'>
                      <span className='arrow_sprite left-class-arrow'>&nbsp;</span>
                      <span className='arrow_sprite center-class-arrow'>&nbsp;</span>
                      <span className='arrow_sprite right-class-arrow'>&nbsp;</span>
                    </div>
                    <h3 className='gbl_lh-16 text-center mb20 fs1pt33'>{translateText('common:CLASS_SCHEDULE_HELP1')}</h3>
                    <h3 className='gbl_lh-16 text-center mb20 fs1pt33'>{translateText('common:CLASS_SCHEDULE_HELP2')}</h3>
                    <h4 className='text-center mb5'> {translateText('common:CLASS_INFORMATION_INCLUDES')}</h4>
                    <p className='mb20'><ImageComponent imagePath={DIVIDER_ICON} /></p>
                    <div className='ml40'>
                      <p>* {translateText('common:CLASS_INFORMATION_CLASSNAME_HELP')} </p>
                      <p>* {translateText('common:CLASS_INFORMATION_INSTRUCTOR_HELP')} </p>
                      <p>* {translateText('common:CLASS_INFORMATION_SECTION_HELP')} </p>
                      <p>* {translateText('common:CLASS_INFORMATION_LOCATION_HELP')} </p>
                      <p>* {translateText('common:CLASS_INFORMATION_DATE_HELP')} </p>
                      <p>* {translateText('common:CLASS_INFORMATION_START_END_HELP')} </p>
                      <button className='btn btn-link btnnoPadding close-button architects_daughterregular' onClick={this.closeHelpPopUp}><span className='arrow_sprite close-help-icon' /> {translateText('common:HELP_CLOSE')}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

ClassListHelp.propTypes = {
  helpPopUpClose: React.PropTypes.func
};
const mapStateToProps = (storeData) => ({
  navData: storeData.headerReducer.showNav,
  notificationData: storeData.notificationReducer.notificationData
});
const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ClassListHelp);
