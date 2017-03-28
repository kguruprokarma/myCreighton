/*Created Date: - 18th -01 -2017
*Usage of file: - This container is to manage details appearance for profile screen.*
*/

import React from 'react';
import * as CommonConstants from '../../../../constants/commonConstants';
import Dependent from './dependent';
import { translateText } from '../../../../common/translate';
import { getParentorGuardian } from '../../../../common/utility';

class RelationDetail extends React.Component {
  componentWillMount() {

  }
  render() {
    const props =this.props;
    const parentOrGuardian = getParentorGuardian(props.dateOfBirth);
    return (
      <article className='profileRow mt30'>
        <h3 className='dataHeading openSansRegular'>{translateText('common:IF_NOT_AGE_OF_MAJORITY')}</h3>
        <div className='control-group'>
          <label htmlFor='parent' className='control control-checkbox labelField noclons'>
            <input type='checkbox' name='dependent' value='parent' checked={parentOrGuardian === CommonConstants.STUDENT_PARENT} id='parent' /> <span className='openSansLight'>{translateText('common:STUDENT_PARENT')}</span>
            <span className='control__indicator'>&nbsp;</span>
          </label>
          <div className='clearfix' />
          <label htmlFor='guardian' className='control control-checkbox labelField noclons'>
            <input type='checkbox' name='dependent' value='guardian' checked={parentOrGuardian === CommonConstants.STUDENT_GUARDIAN} id='guardian' /> <span className='openSansLight'>{translateText('common:STUDENT_GUARDIAN')}</span>
            <span className='control__indicator'>&nbsp;</span>
          </label>
        </div>
        {(parentOrGuardian === CommonConstants.STUDENT_PARENT) ?
          (<Dependent dependent={props.parentDetail} />)
          :
          (<Dependent dependent={props.gurdianDetail} />)
        }
      </article>
    );
  }
}

export default RelationDetail;
