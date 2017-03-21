/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import { ListGroupItem, ListGroup, Row, Col } from 'react-bootstrap';
import Filter from '../../../common/filter';
// import i18n from '../i18n';
// import { translateText } from '../common/translate';

export default class NextEventFilter extends React.Component {

  render() {
    return (<div className='customPopUp test'>
      <span className='popupPointer'>&nbsp;</span>
      <ListGroup>
        <ListGroupItem >
            <div>Settings</div><span>Done</span>
        </ListGroupItem >   
        <ListGroupItem >
            <Filter />
        </ListGroupItem >
      </ListGroup>
    </div>
    );
  }
}

NextEventFilter.propTypes = {
};

// const mapStateToProps = (nextEventFilterState) => (
//   {
//   }
//);

//const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

//export default connect(mapStateToProps, mapDispatchToProps)(NextEventFilter);
