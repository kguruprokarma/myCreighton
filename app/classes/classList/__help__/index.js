
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../../common/mainNav';

class ClassListHelp extends Component {
  componentWillMount() {
  }
  render() {
    console.log('dashboardHelp');
    const props = this.props;
    return (
      <div data-reactroot className='view-container'>
        <header role='banner' id='header'>
          <h1 className='announced-only'>Page header</h1>
          <nav role='navigation' id='navigation01' className='container'>
            <div className='row'>
              <nav role='navigation' id='navigation01' className='col-xs-2 col-sm-2 hidden-lg hamburgerMenu'><button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' /></nav>
              <div className='visible-lg col-lg-10'>
                <h2 className='bebasregular logo mt0 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'><span className='hidden'>myCreighton</span></a></h2>
              </div>
              <div className='hidden-lg mobile-header text-center col-sm-8 col-xs-8'>
                <h2 className='bebasregular visible-sm visible-md logo mt10 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'>myCreighton</a></h2>
                <div className='visible-xs'>
                  <h1 className='bebasregular logo mt10 mb10 fs1pt4'>Class Schedule</h1>
                </div>
              </div>
              <div className='pull-right icons-list col-lg-2 col-sm-2 col-xs-2'>
                <ul className='pull-right list-inline mobile-no-wrap mb0'>
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
                <nav role='navigation' id='navigation03' className='btn-group btn-group-justified form-group openSansRegular fs0pt86'><a className='btn btn-default' href='#/classes/today'>Today</a><a className='btn btn-default active' href='#/classes/week'>Week</a><a className='btn btn-default' href='#/classes/list'>A-Z</a></nav>
              </div>
            </div>
          </section>
        </main>

        <div>
          <h3> View your class schedule for the week or just your classes going on today
         you can also choose to list them alphabetically </h3>

          <h2> Class information includes:</h2><br />
          <h3> * Class name </h3><br />
          <h3> * Instructor </h3><br />
          <h3> * Section </h3><br />
          <h3> * location </h3><br />
          <h3> * date </h3><br />
          <h3> * start/end time </h3><br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeData) => (
  {
    navData: storeData.headerReducer.showNav
  }
);
export default connect(mapStateToProps)(ClassListHelp);
