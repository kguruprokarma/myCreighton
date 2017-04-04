/*Created Date: - 7 -02 -2017
 *Usage of file: - Created to display popup*
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import Filter from './components/filter';
import * as EventConstants from '../../constants/commonConstants';
import styles from './../eventFilter/style.css';
import * as actionCreators from './actions';
import * as headerActionCreators from '../../header/actions';

export class NextEventFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      selectAll: true,
      eventPeriod: EventConstants.EVENT_FILTER_7_DAYS,
      Items: {
        eventperiodItems: [EventConstants.EVENT_FILTER_NEXT_EVENT, EventConstants.EVENT_FILTER_TODAY, EventConstants.EVENT_FILTER_7_DAYS, EventConstants.EVENT_FILTER_ALL ]
      },
      displayOptions: []
    };
    this.toggleRadio = this.toggleRadio.bind(this);
    this.showChild = this.showChild.bind(this);
    this.toggleCheckBoxParent = this.toggleCheckBoxParent.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.showSelected = this.showSelected.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.toggleCheckAll = this.toggleCheckAll.bind(this);
  }
  componentWillMount() {
    const displayOptions = JSON.parse(localStorage.getItem('displayOptions'));
    if (displayOptions && displayOptions[0]) {
      this.setState({selectAll: displayOptions[0].checked});
    }
    this.setState({ displayOptions: displayOptions });    
    const localStorageValue = localStorage.getItem('setFilterValue');
    const displayOptionValue = localStorage.getItem('setDisplayOptionValue');
    if (localStorageValue !== null) {
      this.setState({ eventPeriod: localStorageValue });
    } else {
      const props = this.props;
      this.setState({ eventPeriod: props.EventChangedValue });
    }
  }
  toggleCheckAll() {
    this.setState({selectAll: !this.state.selectAll}, () => {
      this.checkAll();
    });
  }
  checkAll() {
    const displayOptions = JSON.parse(localStorage.getItem('displayOptions'));
    const val = this.state.selectAll;
    for (let i = 1; i < displayOptions.length; i++) {
      const item = displayOptions[i];
      item.checked = val;
      for (let j = 0; j < item.children.length; j++) {
        const childItem = item.children[j];
        childItem.checked = val;
      }
    }
    this.setState({ displayOptions: displayOptions });
  }
  toggleRadio(depen) {
    this.setState({ eventPeriod: depen.target.value });
    const localStorageValue = localStorage.getItem('setFilterValue');
    if (depen.target.value !== localStorageValue) {
      localStorage.setItem('setFilterValue', depen.target.value);
    }
  }
  showChild(itemVal) {
    const item = itemVal;
    item.showItem = !item.showItem;
    this.forceUpdate();
  }

  toggleCheckBoxParent(itemVal) {
    const item = itemVal;
    item.checked = !item.checked;
    item.childrenUnselect = false;
    if (!item.checked) {
      this.setState({selectAll: false});
    }
    for (let i = 0; i < item.children.length; i++) {
      item.children[i].checked = item.checked;
    }
    this.forceUpdate();
  }

  toggleCheck(itemVal, parentVal) {
    const item = itemVal;
    const parent = parentVal;
    item.checked = !item.checked;
    if (!item.checked) {
      this.setState({selectAll: false});
    }
    let uncheckedCount = 0;
    for (let i = 0; i < parent.children.length; i++) {
      if (!parent.children[i].checked) {
        uncheckedCount++;
      }
    }
    if (uncheckedCount === parent.children.length) {
      parent.checked = false;
      parent.childrenUnselect = false;
    } else if (uncheckedCount > 0 && uncheckedCount !== parent.children.length) {
      parent.childrenUnselect = true;
      parent.checked = false;
    } else {
      parent.childrenUnselect = false;
      parent.checked = true;
    }
    this.forceUpdate();
  }

  showSelected() {
    const props = this.props;
    props.filterPopUpClose();
    const selectedObj = {};
    selectedObj.eventperiodItems = this.state.eventPeriod;
    selectedObj.displayOptions = {};
    const items = this.state.displayOptions;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.checked || item.childrenUnselect) {
        selectedObj.displayOptions[item.itemName] = [];
        const selectedChildItems = [];
        for (let j = 0; j < item.children.length; j++) {
          const childItem = item.children[j];
          if (childItem.checked) {
            selectedChildItems.push(childItem.sid);
          }
        }
        selectedObj.displayOptions[item.itemName] = selectedChildItems;
      }
    }
    const allValue = this.state.displayOptions;
    allValue[0].checked = this.state.selectAll;
    localStorage.setItem(EventConstants.DISPLAY_OPTIONS, JSON.stringify(this.state.displayOptions));
    localStorage.setItem('setDisplayOptionValue', JSON.stringify(selectedObj.displayOptions));
    props.filterChange(selectedObj);
  }

  render() {
    return (<div className='customPopUp test'>
      <span className='popupPointer'>&nbsp;</span>
      <ListGroup className='popup-box-shaow'>
        <ListGroupItem >
          <Filter Items={this.state.Items} displayOptions={this.state.displayOptions} eventPeriod={this.state.eventPeriod} toggleRadio={(depen) => this.toggleRadio(depen)} showChild={(item) => this.showChild.bind(this, item)} toggleCheckBoxParent={(item) => this.toggleCheckBoxParent.bind(this, item)} toggleCheck={(item, parent) => this.toggleCheck.bind(this, item, parent)} showSelected={this.showSelected} toggleCheckAll={() => this.toggleCheckAll.bind(this)} checkedAll={this.state.selectAll} />
        </ListGroupItem >
      </ListGroup>
    </div>
    );
  }
}

const mapStateToProps = (nextEventFilterState) => (
  {
    EventChangedValue: nextEventFilterState.eventsFilterReducer.changedValue
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(headerActionCreators, actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NextEventFilter);