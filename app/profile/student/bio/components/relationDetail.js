/*Created Date: - 18th -01 -2017
*Usage of file: - This container is to manage details appearance for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Dependent from './dependent';

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
    return (
      <article className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">IF NOT AGE OF MAJORITY</h3>
        <div className="control-group">
          <label className="control control-checkbox labelField">
            <input type="checkbox" name="dependent" value='parent' onChange={this.toggleParent.bind(this)} checked={this.state.flag === 'parent'} id="parent" /> <span className="openSansRegular">Parent</span>
			    <span className="control__indicator"></span>
          </label>
          <div className="clearfix"></div>
          <label className="control control-checkbox labelField ">
            <input type="checkbox" name="dependent" value='guardian' onChange={this.toggleParent.bind(this)} checked={this.state.flag === 'guardian'} id="guardian" /> <span className="openSansRegular">Guardian</span>
            <span className="control__indicator"></span>
          </label>
        </div>
        {(this.state.flag === 'parent') ?
          (<Dependent json={this.props.json.parent} />)
          :
          (<Dependent json={this.props.json.guardian} />)
        }
      </article>
    )
  }
}

export default RelationDetail;
