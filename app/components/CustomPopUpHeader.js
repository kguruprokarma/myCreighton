import React from 'react';
import {Image} from 'react-bootstrap';
const CustomPopUpHeader = (props) => (
   <div className='customPopUpHeader'>
     <Image className='tile' src={props.headerData.imgData} circle />
     <span className='tileInfo' >{props.headerData.name} - {props.headerData.role}</span>
   </div>
 )

export default CustomPopUpHeader;