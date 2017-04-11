/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import HeaderLabel from '../common/headerLabel';
import { translateText } from '../common/translate';
import { browserTitle } from '../common/utility';
import ReinertAlumni from './components/reinertAlumni';
import LawLibrary from './components/lawLibrary';
import HealthSciences from './components/healthSciences';
import '../librarySearch/style.css';

class LibraryInformation extends React.PureComponent {
  componentWillMount() {
    const props = this.props;
    browserTitle(translateText('common:CAMPUS_DIRECTORY'));
    props.getLibraryData();
  }
  render() {
    const props = this.props;
    const DATA = props.libraryInfoData;
    let aluminDetails;
    let healthDetails;
    let lawDetails;

    map(DATA, (evntData) => {
      console.log('evntDetails', evntData);
      map(evntData, (libData) => {
        console.log('evntData1', libData);
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
        <div id='container' className='openSansLight'>
          <a className='reinertAlumni' href='#reinertAlumni'><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:REINERT_ALUMNI_LIBRARY')}</a>
          <a className='healthScience' href='#healthScience'><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:HEALTH_SCIENCES_LIBRARY')}</a>
          <a className='law' href='#law'><span className='libraryArrow glyphicon glyphicon-arrow-down pr10' />{translateText('COMMON:LAW_LIBRARY')}</a>
        </div>
        <div id='reinertAlumni' className='openSansLight graybtBorder pt20 pb20'>
          {DATA && <ReinertAlumni aluminiData={aluminDetails} />}
        </div>
        <div id='healthScience' className='openSansLight graybtBorder pt20 pb20'>
          {DATA && <HealthSciences healthData={healthDetails} />}
        </div>
        <div id='law' className='openSansLight pt20 pb20'>
          {DATA && <LawLibrary lawData={lawDetails} />}
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