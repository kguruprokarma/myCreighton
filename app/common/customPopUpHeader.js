/*Created Date: - 26th -01 -2017
*Usage of file: - This file is created to show Avatar in popup container*
*/

import React from 'react';
import Avatar from 'react-avatar';

class CustomPopUpHeader extends React.Component {

  render() {
    return (<div className='customPopUpHeader'>
      <Avatar name={this.props.headerData.userName.fullName} size={25} round={true} />
      <span className='tileInfo' >{this.props.headerData.userName.fullName}</span><span className='openSansBold user-type'> - {this.props.headerData.userRole}</span>
    </div>
    );
  }
}

export default CustomPopUpHeader;
