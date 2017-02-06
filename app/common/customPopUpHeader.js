import React from 'react';
import { Image } from 'react-bootstrap';
import Avatar from 'react-avatar';

class CustomPopUpHeader extends React.Component {
  render() {
    return (<div className='customPopUpHeader'>
      <Avatar name={this.props.headerData.name} size={25} round={true} />
      <span className='tileInfo' >{this.props.headerData.name}</span>
    </div>
    );
  }
}

export default CustomPopUpHeader;