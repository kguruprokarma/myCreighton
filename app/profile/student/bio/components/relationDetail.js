/*Created Date: - 18th -01 -2017
*Usage of file: - This container is to manage details appearance for profile screen.*
*/

import React from 'react';
import * as CommonConstants from '../../../../constants/commonConstants';
import Dependent from './dependent';
import { translateText } from '../../../../common/translate';

class RelationDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: CommonConstants.STUDENT_PARENT
    };
  }
  toggleParent(depen) {
    this.setState({ flag: depen.target.value });
  }
  render() {
    return (
      <article className='profileRow mt30'>
        <h3 className='dataHeading openSansRegular'>{translateText('common:IF_NOT_AGE_OF_MAJORITY')}</h3>
        <div className='control-group'>
          <label className='control control-checkbox labelField noclons'>
            <input type='checkbox' name='dependent' value='parent' onChange={this.toggleParent.bind(this)} checked={this.state.flag === CommonConstants.STUDENT_PARENT} id='parent' /> <span className='openSansRegular'>{translateText('common:STUDENT_PARENT')}</span>
            <span className='control__indicator'>&nbsp;</span>
          </label>
          <div className='clearfix'></div>
          <label className='control control-checkbox labelField noclons'>
            <input type='checkbox' name='dependent' value='guardian' onChange={this.toggleParent.bind(this)} checked={this.state.flag === CommonConstants.STUDENT_GUARDIAN} id='guardian' /> <span className='openSansRegular'>{translateText('common:STUDENT_GUARDIAN')}</span>
            <span className='control__indicator'>&nbsp;</span>
          </label>
        </div>
        {(this.state.flag === CommonConstants.STUDENT_PARENT) ?
          (<Dependent dependent={this.props.parentDetail} />)
          :
          (<Dependent dependent={this.props.gurdianDetail} />)
        }
      </article>
    );
  }
}

export default RelationDetail;
