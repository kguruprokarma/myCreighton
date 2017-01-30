import React from 'react';
//import style from '../style.css';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router';
class AddItem extends React.Component {
  render() {
    return (
    	<div>
      <Button className="btn-block"><span className="glyphicon glyphicon-plus"></span> &nbsp;
      	<span>Quick List</span></Button>
      	</div>
    );
  }
}

export default AddItem;