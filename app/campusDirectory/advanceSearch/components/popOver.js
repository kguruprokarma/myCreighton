/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import {Row, Col } from 'react-bootstrap';
//import { createAndSendLogs } from '../../../common/utility';

class PopOver extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSkill = this.toggleSkill.bind(this);
    this.doneSkills = this.doneSkills.bind(this);
    const items = this.props.items.map((item) => Object.assign({}, item));
    this.state = {
      itemSet: items
    };
  }

  toggleSkill(item) {
    // createAndSendLogs('infos', 'toggleSkill', 'Advanced Search', JSON.stringify(item));
    const tempItem = item;
    tempItem.checked = !item.checked;
    this.forceUpdate();
  }
  
  doneSkills() {
    // createAndSendLogs('infos', 'doneSkills', 'Advanced Search', '');
    const props = this.props;
    const selectedSkills = document.querySelectorAll(`input[name=${props.filedName}]`);
    const skillLength = selectedSkills.length;
    const changedArray = this.state.itemSet.slice();
    for (let i =0; i<skillLength; i++) {
      changedArray[i].checked = selectedSkills[i].checked? true: false;
    }
    props.onFinalize(changedArray);
  }

  render() {
    const props = this.props;
    return (
      <div className='searchPopup pt5'>
        <span className='searchPopupPointer'>&nbsp;</span>
        <div className='popup-box-shaow pt10'>
          <Row className='pl20 pb10'>
            <Col xs={6}>
              <span className='popUpClass'>{props.headerText}</span>
            </Col>
            <Col xs={6}>
              <button className='popUpClass searchDone' onClick={this.doneSkills}>Done</button>
            </Col>
          </Row>
          {this.state.itemSet.map((item, itemIndex) => (
            <div key={itemIndex} className='list-group-item popUpClass searchPopUp'>
              <label htmlFor={item.name} className='control control-checkbox'><span className='popUpClass'>{item.name}</span>
                <input type='checkbox' className='popUpClass' name={props.filedName} checked={item.checked ? true : false} onChange={() => this.toggleSkill(item)} />
                <div className='control__indicator popUpClass' />
              </label>
            </div>))
          }
        </div>
      </div>
    );
  }
}
PopOver.propTypes={
  items: React.PropTypes.Array
};
export default PopOver;