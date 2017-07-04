import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../footer/actions';
import * as HELP_SCREEN from '../constants/helpScreenConstants';
import DashboardHelp from '../dashboard/__help__/help';
import ClassListHelp from '../classes/classList/__help__/index';
import { translateText } from '../common/translate';
import '../help/help.css';

class Help extends React.PureComponent {
  constructor(props) {
    super(props);
    this.closeHelpPopUp = this.closeHelpPopUp.bind(this);
  }
  closeHelpPopUp() {
    this.props.helpPopUpClose();
  }
  render() {
    const props = this.props;
    return (
      <section role='region' className='help-section'>
        {HELP_SCREEN.HELP_SCREEN_URLS.indexOf(props.currentState) >= 0 && <div>
          {props.currentState === '/dashboard' && <DashboardHelp />}
          {((props.currentState === '/classes/week') || (props.currentState === '/classes/today') || (props.currentState === '/classes/list')) && <ClassListHelp />}
          
          <div className='container close-container'><button className='btn btn-link btnnoPadding close-button architects_daughterregular' onClick={this.closeHelpPopUp}><span className='arrow_sprite close-help-icon' /> {translateText('common:HELP_CLOSE')}</button></div>
        </div>}
      </section>
    );
  }
}
Help.propTypes = {
  helpPopUpClose: React.PropTypes.func
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Help);