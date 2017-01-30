import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';
import Dependent from './Dependent';

class RelationDetail extends React.Component {
  constructor(){
    super();
    this.state={
      flag : 'parent'
    } 
  }
  togalParent(depen){
    this.setState({flag: depen.target.value})
  }
  render() {
        return(
          <div className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">IF NOT AGE OF MAJORITY</h3>
                <div>
                  <input type="radio"  name="dependent" value='parent'  onChange={this.togalParent.bind(this)} checked={this.state.flag === 'parent'}/> Parent 
                </div>
                <div>
                  <input type="radio" name="dependent" value='guardian' onChange={this.togalParent.bind(this)} checked={this.state.flag === 'guardian'} /> Guardian 
                </div>
                {( this.state.flag === 'parent') ? 
                  (<Dependent json={this.props.json.parent} />)
                :
                (<Dependent json={this.props.json.guardian} />)
                }
          </div>
    )
  }
}

export default RelationDetail;
