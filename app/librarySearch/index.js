/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
//import ReactDom from 'react-dom';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import HeaderLabel from '../common/headerLabel';
import { translateText } from '../common/translate';
import { browserTitle } from '../common/utility';
import ReinertAlumni from './components/reinertAlumni';
import LawLibrary from './components/lawLibrary';
import HealthSciences from './components/healthSciences';
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
        {props.loading && <Spinner /> }
        <div id='container' className='openSansLight'>
          <Link className='reinertAlumni' onClick={() => this.scrollToPosition('reinertAlumni')}><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:REINERT_ALUMNI_LIBRARY')}</Link>
          <Link className='healthScience' onClick={() => this.scrollToPosition('healthScience')} ><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:HEALTH_SCIENCES_LIBRARY')}</Link>
          <Link className='law' onClick={() => this.scrollToPosition('law')}><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:LAW_LIBRARY')}</Link>
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