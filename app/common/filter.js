/*Created Date: - 18th -01 -2017
*Usage of file: - This container is to manage details appearance for profile screen.*
*/

import React from 'react';

const Items = {
  eventperiodItems: ['Next event detail', 'Today', '7 days', 'All'],
  displayOptions: [
    {
      "itemName": "All",
      "children": []
    },
    {
      "itemName": "Classes",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "Class assignments",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "Tests and Quizzes",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "To-do list",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "Outlook calendar",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "Academic milestones",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "My affiliations",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }, {
      "itemName": "Athletic events",
      "checked": false,
      "children": [{
        "itemName": "Chemistry 105",
        "checked": false
      }, {
        "itemName": "English 112",
        "checked": false
      }, {
        "itemName": "Philosophy 100",
        "checked": false
      }, {
        "itemName": "Political science 232",
        "checked": false
      }]
    }
  ]
}
const labels = {
  EVENT_PERIOD_HEADING: "EVENT PERIOD",
  DISPLAY_OPTIONS_HEADING: "DISPLAY OPTIONS",
  DONE_TEXT: "Done"
}
class FilterPopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      eventPeriod: 'Today',
      items: Items
    };
  }
  toggleRadio(depen) {
    this.setState({ eventPeriod: depen.target.value });
  }
  showChild(item) {
    //this.setState({items[childIndex]: {showItem: !items.displayOptions[childIndex].showItem}});
    //this.state.items.displayOptions[childIndex].showItem = !this.state.items.displayOptions[childIndex].showItem;
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
    let selectedObj = {};
    selectedObj.eventperiodItems = this.state.eventPeriod;
    selectedObj.displayOptions = {};
    let items = this.state.items;
    for (let i = 0; i < items.displayOptions.length; i++) {
      let item = items.displayOptions[i]
      if (item.checked) {
        selectedObj.displayOptions[item.itemName] = [];
        let selectedChildItems = [];
        for (let j = 0; j < item.children.length; j++) {
          let childItem = item.children[j];
          if (childItem.checked) {
            selectedChildItems.push(childItem.itemName);
          }
        }
        selectedObj.displayOptions[item.itemName] = selectedChildItems;
      }
    }
    //console.log(selectedObj);
  }
  render() {
    const divStyle = {
      'margin-left': '15px'
    };
    return (
      <article className="profileRow mt30">
        <button onClick={this.showSelected.bind(this)}>{labels.DONE_TEXT}</button>
        <h3 className="dataHeading openSansRegular">{labels.EVENT_PERIOD_HEADING}</h3>
        <div className="control-group">
          {
            Items.eventperiodItems.map((eventItem, eventIndex) => {
              return (
                <div key={eventIndex}>
                  <input type="radio" name="eventPeriod" value={eventItem} onChange={this.toggleRadio.bind(this)} checked={this.state.eventPeriod === eventItem} /> <span className="openSansRegular">{eventItem}</span>
                </div>)
            })
          }
        </div>
        <h3 className="dataHeading openSansRegular">{labels.DISPLAY_OPTIONS_HEADING}</h3>
        <div className="control-group">
          {
            this.state.items.displayOptions.map((eventItem, eventIndex) => {
              return (<div key={eventIndex}>
                <input type="checkbox" name="eventPeriod" value={eventItem.itemName} onChange={this.toggleCheckBoxParent.bind(this, eventItem)} checked={eventItem.checked} /> <span className="openSansRegular">{eventItem.itemName}</span>
                {eventItem.children.length > 0 && <span style={divStyle} onClick={this.showChild.bind(this, eventItem)}>></span>}
                {eventItem.showItem && <div style={divStyle}>
                  {
                    eventItem.children.map((eventItemChildren, childrenIndex) => {
                      return (
                        <div key={childrenIndex}>
                          <input type="checkbox" name="eventPeriod" value={eventItemChildren.itemName} onChange={this.toggleCheck.bind(this, eventItemChildren, eventItem)} checked={eventItemChildren.checked} /> <span className="openSansRegular">{eventItemChildren.itemName}</span>
                        </div>
                      );
                    })
                  }
                </div>}
              </div>
              );
            })
          }
        </div>
      </article>
    );
  }
}

export default FilterPopUp;