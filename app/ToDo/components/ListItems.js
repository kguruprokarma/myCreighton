import React from 'react';
import { Link } from 'react-router';
//import style from '../style.css';

class ListItems extends React.Component {
  render() {
    return (
      <div>
          {this.props.items.map((item, index) => (
            <div key={item.itemName}>
            <hr/>
              <div className="containerOfItem">
                <Link to={"ToDoItemDescription/" +item.itemName }>
                <div className="circleSection"><div className="circleIcon"></div></div>
                <div className="textSection">
                  <p className="dateColor">Due: {item.dueDate}</p>
                  <p>{item.itemName}</p>
                </div>
                <div className="clearLeft"></div>
                </Link>
              </div>
              {(this.props.items.length === (index+1))?<hr/>:''}
            </div>
          ))}
      </div>
    );
  }
}

export default ListItems;

