import React from 'react';
import { Link } from 'react-router';
class ItemInfo extends React.Component {
  render() {
    return (<div>
    	<h2>{this.props.itemName}</h2>
    	<div className="dateColor">Date Due: Mon Feb 27, 2017</div>
    	<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod</p>
      </div>
    );
  }
}

export default ItemInfo;