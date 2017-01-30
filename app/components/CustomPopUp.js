import React from 'react';
import { Link } from 'react-router';
import CustomPopUpHeader from './CustomPopUpHeader';

const CustomPopUp = (props) => (
  <div className='customPopUp'>
    <span className="popupPointer"></span>
    	<CustomPopUpHeader headerData={props.items.headerData} />
    	<hr/>
    	{props.items.popUpItems.map((item, index) => (
            <div key={item.itemName}>
              <div className="customPopUpItem">
                <Link to={item.link}>
          			<div className="popUpText" onClick={props.showPop}>{item.itemName}</div>
                </Link>
              </div>
               <hr/>
            </div>
          ))}
        <div  className='logOut'>
        <hr/>
  		    <Link to="logout/">
        			<span className="popUpText">Logout</span>
          </Link>
        </div>
      </div>
)

export default CustomPopUp;