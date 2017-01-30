import React from 'react';
import ListItemsHeader from './components/ListItemsHeader';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';

const LIST_DATA = {
	"listItems":[{
		"itemName":"Kerbs Cycle Paper",
		"dueDate":"Jan 25, 2017",
		"extraFeatures":{
			"description":"lorem ipsum",
			"description1":"lorem ipsum1"
		}
	},{
		"itemName":"Kerbs Cycle Paper1",
		"dueDate":"Jan 26, 2017",
		"extraFeatures":{
			"description":"lorem ipsum",
			"description1":"lorem ipsum1"
		}
	},{
		"itemName":"Kerbs Cycle Paper2",
		"dueDate":"Jan 27, 2017",
		"extraFeatures":{
			"description":"lorem ipsum",
			"description1":"lorem ipsum1"
		}
	}]
};

class ToDo extends React.PureComponent {
  render() {
    return (<div>
    	<AddItem />
       	<ListItems items={LIST_DATA.listItems} />
      </div>
    );
  }
};

export default ToDo;