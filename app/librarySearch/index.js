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
import LeftNavComponent from '../common/leftNavComponent';
import ReinertAlumni from './components/reinertAlumni';
import LawLibrary from './components/lawLibrary';
import HealthSciences from './components/healthSciences';
import LibraryTabs from './components/libraryTabs';
import LibrarySearch from './components/librarySearch';
import { LIBRARY_JAYSEARCH_CONST, LIBRARY_DATABASE_CONST } from '../common/linksPipeConstants';
import LinksPipe from '../common/linksPipeComponent';
import LibraryGuide from './components/libraryGuide';
import {LIBRARY_NAV_LINKS} from '../common/navLinksConstants';
import * as URL_CONSTANTS from '../constants/urlConstants';

import '../librarySearch/style.css';
import Spinner from './../common/spinner';

export class LibraryInformation extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.scrollToPosition = this.scrollToPosition.bind(this);
    this.setTabindex = this.setTabindex.bind(this);
  }

  componentWillMount() {
    const props = this.props;
    browserTitle(translateText('common:LIBRARY_SEARCH'));
    props.getLibraryData();
  }

  setTabindex(indexid) {
    // createAndSendLogs('infos', 'setTabindex', 'Library Search', indexid);
    this.setState({ tabIndex: indexid });
  }

  scrollToPosition(positionId) {
    // createAndSendLogs('infos', 'scrollToPosition', 'Library Search', positionId);
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

    this.linksPipeContent = [];
    if (this.state.tabIndex === 0) {
      this.linksPipeContent = LIBRARY_JAYSEARCH_CONST;
    } else if (this.state.tabIndex === 3) {
      this.linksPipeContent = LIBRARY_DATABASE_CONST;
    }

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
      <section role='region' className='section-container'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:LIBRARY_SEARCH')} />
        </div>
        {props.loading && <Spinner />}
        <LibraryTabs tabIndex={this.state.tabIndex} changeTab={this.setTabindex} navLibLinks={LIBRARY_NAV_LINKS} />
        <Row>
          <Col sm={9} xs={12} className='pull-right'>

            {(this.state.tabIndex <= 1 || this.state.tabIndex === 3)&&
              <LibrarySearch tabindex={this.state.tabIndex} />
            }
            {this.linksPipeContent && this.linksPipeContent.length > 0 &&
              <div className={this.state.tabIndex!==3 ? 'libraryLinks pb10 mb10 openSansLight fs1em graybtBorder' : 'libraryLinks pb10 openSansLight fs1em'}>
                <LinksPipe linksPipeData={this.linksPipeContent} />
              </div>
            }
            {this.state.tabIndex === 2 &&
            <div className='libraryGuideContent pb10'>
              <LibraryGuide tabindex={this.state.tabIndex} />
            </div>
            }
            {(this.state.tabIndex > 0 ) &&
              <p className='fs1pt2 pb10 graybtBorder openSansLight'>{translateText('common:LIBRARY_GUIDE_PART1')} <a rel='noopener noreferrer' target='_blank' href={URL_CONSTANTS.CREIGHTON_LOGIN}>{translateText('common:LIBRARY_GUIDE_PART2')}</a> {translateText('common:LIBRARY_GUIDE_PART3')}</p>
            }
            <div id='container' className='bookmarkContainer openSansLight pt25 pb35'>
              <p className='boomarkLinks'><Link onClick={() => this.scrollToPosition('reinertAlumni')}><span className='glyphicon glyphicon-arrow-down pr5 fs0pt73' aria-hidden='true' /> {translateText('COMMON:REINERT_ALUMNI_LIBRARY')}</Link></p>
              <p className='boomarkLinks'><Link onClick={() => this.scrollToPosition('healthScience')} ><span className='glyphicon glyphicon-arrow-down pr5 fs0pt73' aria-hidden='true' /> {translateText('COMMON:HEALTH_SCIENCES_LIBRARY')}</Link></p>
              <p className='boomarkLinks'> <Link onClick={() => this.scrollToPosition('law')}><span className='glyphicon glyphicon-arrow-down pr5 fs0pt73' aria-hidden='true' /> {translateText('COMMON:LAW_LIBRARY')}</Link></p>
            </div>
            <div id='reinertAlumni' className='libraryHeader openSansLight pt15 pb15'>
              {DATA && <ReinertAlumni aluminiData={aluminDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
            <div id='healthScience' className='libraryHeader openSansLight pt15 pb15'>
              {DATA && <HealthSciences healthData={healthDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
            <div id='law' className='openSansLight pt15'>
              {DATA && <LawLibrary lawData={lawDetails} scrollTopClick={() => this.scrollToPosition('header')} />}
            </div>
          </Col>
          <Col sm={3} className='hidden-xs'>
            <LeftNavComponent tabIndex={this.state.tabIndex} navLibLinks={LIBRARY_NAV_LINKS} changeTab={this.setTabindex} />
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