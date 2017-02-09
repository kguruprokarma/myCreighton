import React from 'react';
import { Link } from 'react-router';
import CustomPopUpHeader from './customPopUpHeader';
import { Grid, Row, Col, ListGroupItem, ListGroup } from 'react-bootstrap';

class CustomPopUp extends React.Component {
  render() {
    let header = this.props.items.headerData;
    return (<div className='customPopUp'>
      <span className="popupPointer"></span>
      <ListGroup>
        <ListGroupItem>
          {header && <div> <CustomPopUpHeader headerData={header} /></div>}
        </ListGroupItem>

        {this.props.items.popUpItems.map((item, index) => (
          <ListGroupItem key={item.itemName} className="openSansLight">
            <Link to={item.link} onClick={this.props.showPop}  activeClassName="active">
              {item.itemName}
            </Link>
          </ListGroupItem>
        ))}
        {/*
        <ListGroupItem className='logOut openSansLight'>
          <Link to="logout/"  activeClassName="active">
            Logout
          </Link>
        </ListGroupItem>
        */}
      </ListGroup>
    </div>

    );
  }
}

export default CustomPopUp;