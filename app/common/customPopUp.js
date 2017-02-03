import React from 'react';
import { Link } from 'react-router';
import CustomPopUpHeader from './customPopUpHeader';
import style from './style.css';

class CustomPopUp extends React.Component {   
  render() {
    let header = this.props.items.headerData;

    return (<div className='customPopUp'>
      <span className="popupPointer"></span>
      
      { header && <div> <CustomPopUpHeader headerData={header} /> <hr/></div>}
      
      {this.props.items.popUpItems.map((item, index) => (
        <div key={item.itemName}>
          <div className="customPopUpItem">
            <Link to={item.link}>
              <div className="popUpText" onClick={this.props.showPop}>{item.itemName}</div>
            </Link>
          </div>
          <hr />
        </div>
      ))}
      <div className='logOut'>
        <hr />
        <Link to="logout/">
          <span className="popUpText">Logout</span>
        </Link>
      </div>
    </div>
    );
  }
}

export default CustomPopUp;