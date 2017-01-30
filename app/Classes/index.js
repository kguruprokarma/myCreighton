import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Classheader from './components/classesHeader';
import Classctrls from './components/classControls';
import ClassBox from './components/classBox';
import * as actionCreators from './actions';

//import style from './style.css';

export class Classes extends React.PureComponent {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getClassesDataByWeek()
  }

  render() {
    let USER_DATA = this.props.classesData
    if (this.props.catagoryName)
      console.log("catagoryName in index.js: ", USER_DATA);
    return (
      <div>
        {USER_DATA && <div>
          <Col md={8} sm={6} xs={12} className="hidden-xs"><div className="row"><Classheader /></div></Col>
          <Col md={4} sm={6} xs={12}><div className="row"><Classctrls /></div></Col>
          <div className="clearfix"></div>
          <ClassBox catagoryName={this.props.catagoryName} data={USER_DATA.classes} />
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    classesData: state.classesReducer.classesData.data,
    catagoryName: state.classesReducer.catagoryName

  })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Classes)
