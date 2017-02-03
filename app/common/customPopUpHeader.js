import React from 'react';
import {Image} from 'react-bootstrap';

class CustomPopUpHeader extends React.Component {
  render() {
    return (<div className='customPopUpHeader'>
          <Image className='tile' src={this.props.headerData.imgData} circle />
          <span className='tileInfo' >{this.props.headerData.name} - {this.props.headerData.role}</span>
      </div>
    );
  }
}

export default CustomPopUpHeader;