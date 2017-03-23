/*Created Date: - 7 -02 -2017
*Usage of file: - Created to display popup*
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import { ListGroupItem, ListGroup, Row, Col } from 'react-bootstrap';
import Filter from './components/filter';
import * as EventConstants from '../../constants/commonConstants';

// import i18n from '../i18n';
// import { translateText } from '../common/translate';
import * as actionCreators from './actions';
import * as headerActionCreators from '../../header/actions';

export class NextEventFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      eventPeriod: EventConstants.EVENT_FILTER_7_DAYS,
      Items: {
        eventperiodItems: [EventConstants.EVENT_FILTER_NEXT_EVENT, EventConstants.EVENT_FILTER_ALL, EventConstants.EVENT_FILTER_7_DAYS, EventConstants.EVENT_FILTER_TODAY],
        displayOptions: [
          {
            'itemName': 'All',
            'children': []
          },
          {
            'itemName': 'Classes',
            'checked': false,
            'children': [{
              'itemName': 'Chemistry 105',
              'checked': false
            }, {
              'itemName': 'English 112',
              'checked': false
            }, {
              'itemName': 'Philosophy 100',
              'checked': false
            }, {
              'itemName': 'Political science 232',
              'checked': false
            }]
          }, {
            'itemName': 'Class assignments',
            'checked': false,
            'children': [{
              'itemName': 'Chemistry 105',
              'checked': false
            }, {
              'itemName': 'English 112',
              'checked': false
            }, {
              'itemName': 'Philosophy 100',
              'checked': false
            }, {
            'itemName': 'Political science 232',
            'checked': false
          }]
          }, {
            'itemName': 'Tests and Quizzes',
            'checked': false,
            'children': [{
            'itemName': 'Chemistry 105',
            'checked': false
          }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
          }, {
      'itemName': 'To-do list',
      'checked': false,
      'children': [{
        'itemName': 'Chemistry 105',
        'checked': false
      }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
    }, {
      'itemName': 'Outlook calendar',
      'checked': false,
      'children': [{
        'itemName': 'Chemistry 105',
        'checked': false
      }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
    }, {
      'itemName': 'Academic milestones',
      'checked': false,
      'children': [{
        'itemName': 'Chemistry 105',
        'checked': false
      }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
    }, {
      'itemName': 'My affiliations',
      'checked': false,
      'children': [{
        'itemName': 'Chemistry 105',
        'checked': false
      }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
    }, {
      'itemName': 'Athletic events',
      'checked': false,
      'children': [{
        'itemName': 'Chemistry 105',
        'checked': false
      }, {
        'itemName': 'English 112',
        'checked': false
      }, {
        'itemName': 'Philosophy 100',
        'checked': false
      }, {
        'itemName': 'Political science 232',
        'checked': false
      }]
    }
        ]
      }
    };
    this.toggleRadio = this.toggleRadio.bind(this);
    this.showChild = this.showChild.bind(this);
    this.toggleCheckBoxParent = this.toggleCheckBoxParent.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.showSelected = this.showSelected.bind(this);
  }
  toggleRadio(depen) {
    this.setState({ eventPeriod: depen.target.value });
  }
  showChild(item) {    
    item.showItem = !item.showItem;
    this.forceUpdate();
  }

  toggleCheckBoxParent(item) {
    item.checked = !item.checked;
    for (let i = 0; i < item.children.length; i++) {
      item.children[i].checked = item.checked;
    }
    this.forceUpdate();
  }

  toggleCheck(item, parent) {
    item.checked = !item.checked;
    let uncheckedCount = 0;
    for (let i = 0; i < parent.children.length; i++) {
      if (!parent.children[i].checked) {
        uncheckedCount++;
      }
    }
    if (uncheckedCount === parent.children.length) {
      parent.checked = false;
    } else {
      parent.checked = true;
    }
    this.forceUpdate();
  }

  showSelected() {
    this.props.filterPopUpClose();
    const selectedObj = {};
    selectedObj.eventperiodItems = this.state.eventPeriod;
    selectedObj.displayOptions = {};
    const items = this.state.Items;
    for (let i = 0; i < items.displayOptions.length; i++) {
      const item = items.displayOptions[i];
      if (item.checked) {
        selectedObj.displayOptions[item.itemName] = [];
        const selectedChildItems = [];
        for (let j = 0; j < item.children.length; j++) {
          const childItem = item.children[j];
          if (childItem.checked) {
            selectedChildItems.push(childItem.itemName);
          }
        }
        selectedObj.displayOptions[item.itemName] = selectedChildItems;
      }
    }
    this.props.filterChange(selectedObj.eventperiodItems);
  }

  render() {
    return (<div className='customPopUp test'>
      <span className='popupPointer'>&nbsp;</span>
      <ListGroup>
        <ListGroupItem >
          {/*<div>Settings</div><span>Done</span>*/}
        </ListGroupItem >   
        <ListGroupItem >
          <Filter Items={this.state.Items} eventPeriod={this.state.eventPeriod} toggleRadio={(depen)=>this.toggleRadio( depen)} showChild={(item)=>this.showChild.bind(this, item)} toggleCheckBoxParent={(item)=>this.toggleCheckBoxParent.bind(this, item)} toggleCheck={(item, parent)=>this.toggleCheck.bind(this,item, parent)} showSelected={this.showSelected} />
        </ListGroupItem >
      </ListGroup>
    </div>
    );
  }
}

NextEventFilter.propTypes = {
  Items: React.PropTypes.array
};

const mapStateToProps = (nextEventFilterState) => (
  {
    EventChangedValue : nextEventFilterState.eventsFilterReducer.changedValue
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(headerActionCreators, actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NextEventFilter);