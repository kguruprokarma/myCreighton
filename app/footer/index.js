/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is for Footer details *
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import UniversityAddress from './components/universityAddress';
import UniversityLogo from './components/universityLogo';
import * as HELP_SCREEN from '../constants/helpScreenConstants';
import './style.css';
import { translateText } from '../common/translate';

export class Footer extends React.PureComponent { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.helpPopUpOpen();
  }
  render() {
    const props = this.props;
    return (
      <footer className='footer fs0pt93' role='contentinfo'>
        <h1 className='announced-only'>{translateText('common:PAGE_FOOTER')}</h1>
        <Grid>
          <button className={HELP_SCREEN.HELP_SCREEN_URLS.indexOf(props.currentState) >= 0 ? 'help-icon pull-right btn btn-link openSansBold btnnoPadding' : 'help-icon help-disable pull-right btn btn-link openSansBold btnnoPadding '} onClick={this.handleClick}><span className='glyphicon glyphicon-question-sign' aria-hidden='true' /></button>
          <div className='footer-section pt15 pb15'>
            <Row>
              <Col xs={12} sm={2} md={2}>
                <UniversityLogo />
              </Col>
              <Col xs={12} sm={10} md={10}>
                <UniversityAddress />
              </Col>
            </Row>
          </div>
        </Grid>
      </footer>
    );
  }
}
Footer.propTypes = {
  helpPopUpOpen: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(null, mapDispatchToProps)(Footer);
