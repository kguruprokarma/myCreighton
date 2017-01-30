import React from 'react';
//import style from '../style.css';
class ListItemsHeader extends React.Component {
  render() {
    return (
      <div className='toDoListHeader'>
        <button className="backButton">back</button>
        <span className="glyphicon glyphicon-plus"></span>
        <span className="toDoListHeaderText">TO-DO LIST</span>
      </div>
    );
  }
}

export default ListItemsHeader;