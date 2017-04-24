/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
//import ReactDom from 'react-dom';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import * as actionCreators from './actions';
import HeaderLabel from '../common/headerLabel';
import { translateText } from '../common/translate';
import { browserTitle } from '../common/utility';
import Libraryleftnav from '../common/libraryleftnav';
import ReinertAlumni from './components/reinertAlumni';
import LawLibrary from './components/lawLibrary';
import HealthSciences from './components/healthSciences';

import Searchbox from './../campusDirectory/components/searchBox';
import '../librarySearch/style.css';
import Spinner from './../common/spinner';

export class LibraryInformation extends React.PureComponent {

  constructor(props) {
    super(props);
    this.scrollToPosition = this.scrollToPosition.bind(this);
  }

  componentWillMount() {
    const props = this.props;
    browserTitle(translateText('common:CAMPUS_DIRECTORY'));
    props.getLibraryData();
  }
  scrollToPosition(positionId) {
    if (document.getElementById(positionId) !== null) {
      document.getElementById(positionId).scrollIntoView();
    }
  }

  render() {
    const props = this.props;
    const DATA = props.libraryInfoData;
    let aluminDetails;
    let healthDetails;
    let lawDetails;

    map(DATA, (evntData) => {
      map(evntData, (libData) => {
        if (libData.law) {
          lawDetails = libData.law;
        }
        if (libData.reinertAlumni) {
          aluminDetails = libData.reinertAlumni;
        }
        if (libData.healthSciences) {
          healthDetails = libData.healthSciences;
        }
      });
    });
    return (
      <section role='region'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:LIBRARY_SEARCH')} />
        </div>
        {props.loading && <Spinner />}
        <Row className='pb10 visible-xs'>
          <Col xs={12}>
            <div className='btn-group btn-group-justified librarySearch openSansLight'>
              <Link className='btn btn-default libraryButton plr5' activeClassName='active'>JaySearch</Link>
              <Link className='btn btn-default libraryButton plr5' activeClassName='active'>e-Journals</Link>
              <Link className='btn btn-default libraryButton plr5' activeClassName='active'>Library Guides</Link>
              <Link className='btn btn-default libraryButton plr5' activeClassName='active'>Databases</Link>
            </div>
          </Col>
        </Row>
    
        <Row>
          <Col sm={9} xs={12} className='pull-right'>
            <Searchbox />
            <div className='libraryLinks hidden graybtBorder pb10'>
              <Link>Advanced JaySearch</Link><span> | </span><Link>Browse Jaysearch</Link>
            </div>
            <div id='container' className='openSansLight'>
              <p className='boomarkLinks'><Link onClick={() => this.scrollToPosition('reinertAlumni')}>{translateText('COMMON:REINERT_ALUMNI_LIBRARY')}</Link></p>
              <p className='boomarkLinks'><Link onClick={() => this.scrollToPosition('healthScience')} >{translateText('COMMON:HEALTH_SCIENCES_LIBRARY')}</Link></p>
              <p className='boomarkLinks'> <Link onClick={() => this.scrollToPosition('law')}>{translateText('COMMON:LAW_LIBRARY')}</Link></p>
            </div>
            <div id='reinertAlumni' className='openSansLight graybtBorder pt20 pb20'>
              {DATA && <ReinertAlumni aluminiData={aluminDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
            <div id='healthScience' className='openSansLight graybtBorder pt20 pb20'>
              {DATA && <HealthSciences healthData={healthDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
            <div id='law' className='openSansLight pt20 pb20'>
              {DATA && <LawLibrary lawData={lawDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
          </Col>
          <Col sm={3} className='hidden-xs'>
            <Libraryleftnav />
          </Col>
        </Row>
        
      </section>
    );
  }
}

const mapStateToProps = (libraryInfoState) => (
  {
    libraryInfoData: libraryInfoState.libraryInformationReducer.libraryInformationData.data,
    loading: libraryInfoState.libraryInformationReducer.isLoading,
    isError: libraryInfoState.libraryInformationReducer.error
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LibraryInformation);