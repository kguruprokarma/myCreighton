import React from 'react';
import ItemInfo from './components/ItemInfo';
import TaskBreakDown from './components/TaskBreakDown';
import style from './style.css';

class ToDoItemDescription extends React.PureComponent {
	componentWillMount(){
        console.log(this.props.params.itemName);
    }
  render() {
    return (<div>
    	<ItemInfo itemName={this.props.params.itemName} />
    	<hr/>
    	<TaskBreakDown />
      </div>
    );
  }
};

export default ToDoItemDescription;