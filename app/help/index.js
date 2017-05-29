import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../footer/actions';
import DashboardHelp from '../dashboard/__help__/help';
import ClassListHelp from '../classes/classList/__help__/index';
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
      <section>
        {props.currentState === '/dashboard' && <DashboardHelp />}
        {props.currentState === '/classes/week' && <ClassListHelp />}        
        <div className='container close-container'><button className='btn btn-link btnnoPadding close-button architects_daughterregular' onClick={this.closeHelpPopUp}><span className='arrow_sprite close-help-icon' /> Close Help</button></div>   
      </section>
    );
  }
}
Help.propTypes = {
  helpPopUpClose: React.PropTypes.func
};

const mapStateToProps = () => ({ });
const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Help);