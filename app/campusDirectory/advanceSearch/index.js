import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../common/headerLabel';
import { browserTitle } from '../../common/utility';
import SearchLeftNav from '../../common/searchLeftNav';
import { translateText } from '../../common/translate';
import { AdvanceSearchBox } from './components/advanceSearchBox';
import FutureFunctionalityPopUp from './../../common/futureFunctionalityPopUp';

class AdvanceSearch extends React.PureComponent {

  componentWillMount() {
    browserTitle(translateText('common:CAMPUS_DIRECTORY'));
  }
  render() {
    return (
      <div>
        <section role='region' className='section-container'>
          <FutureFunctionalityPopUp />
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:CAMPUS_DIRECTORY')} />
          </div>
          <Row>
            <Col md={9} sm={8} xs={12} className='userData pull-right'>
              {/*<SimpleSearch {...this.props} />*/}
              <AdvanceSearchBox />
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <SearchLeftNav />
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}
export default AdvanceSearch;