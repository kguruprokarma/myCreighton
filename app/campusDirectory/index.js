/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import SimpleSearch from './components/simpleSearch';
import SearchLeftNav from '../common/searchLeftNav';
import HeaderLabel from '../common/headerLabel';
import { translateText } from '../common/translate';

export class CampusDirectory extends React.PureComponent {

  render() {
    return (
      <section>
        <div>
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:CAMPUS_DIRECTORY')} />
          </div>
          <Row>
            <Col md={9} sm={8} xs={12} className='userData pull-right'>
              <SimpleSearch {...this.props} />
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <SearchLeftNav />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default connect()(CampusDirectory);