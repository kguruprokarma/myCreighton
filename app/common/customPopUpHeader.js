import React from 'react';
import { Image } from 'react-bootstrap';
import Avatar from 'react-avatar';

class CustomPopUpHeader extends React.Component {
  render() {
    return (<div className='customPopUpHeader'>
      <Avatar name={this.props.headerData.userName.fullName} size={25} round={true} />
      <span className='tileInfo' >{this.props.headerData.userName.fullName}</span>
    </div>
    );
  }
}

export default CustomPopUpHeader;