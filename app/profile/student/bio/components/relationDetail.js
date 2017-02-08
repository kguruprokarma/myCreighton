/*Created Date: - 18th -01 -2017
*Usage of file: - This container is to manage details appearance for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Dependent from './dependent';
import { translate } from 'react-i18next';
import i18n from '../../../../i18n';

@translate([], { wait: true })
class RelationDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: 'parent'
    }
  }
  toggleParent(depen) {
    this.setState({ flag: depen.target.value })
  }
  render() {
    const { t } = this.props;
    return (
      <article className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">{t('common:IF_NOT_AGE_OF_MAJORITY')}</h3>
        <div className="control-group">
          <label className="control control-checkbox labelField noclons">
            <input type="checkbox" name="dependent" value='parent' onChange={this.toggleParent.bind(this)} checked={this.state.flag === 'parent'} id="parent" /> <span className="openSansRegular">{t('common:PARENT')}</span>
            <span className="control__indicator"></span>
          </label>
          <div className="clearfix"></div>
          <label className="control control-checkbox labelField noclons">
            <input type="checkbox" name="dependent" value='guardian' onChange={this.toggleParent.bind(this)} checked={this.state.flag === 'guardian'} id="guardian" /> <span className="openSansRegular">{t('common:GUARDIAN')}</span>
            <span className="control__indicator"></span>
          </label>
        </div>
        {(this.state.flag === 'parent') ?
          (<Dependent dependent={this.props.relationDetail.parent} />)
          :
          (<Dependent dependent={this.props.relationDetail.guardian} />)
        }
      </article>
    )
  }
}

export default RelationDetail;
