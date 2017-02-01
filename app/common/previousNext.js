/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classesReducer from '../classes/classList/reducer'
import { DATASORT, DATAFILTERADDINGDATA, DATATIME } from './utility';

import * as actionCreators from '../classes/classList/actions';


let classIds = [];

class PreviousNext extends React.Component {

    constructor() {
        super();
        this.getLinkIndexAndId = this.getLinkIndexAndId.bind(this);
    }

    componentWillMount() {
        if (this.props.catagoryName == "Week") {
            this.props.getClassesDataByWeek();
        } else if (this.props.catagoryName == "List") {
            this.props.getClassesDataForAtoZ();
        } else if (this.props.catagoryName == "Today") {
            this.props.getClassesDataByToday();
        }
    }

    getLinkIndexAndId() {
        if (this.props.classList.data && this.props.classList.data.classes.length > 0) {
            if (this.props.catagoryName == "Week") {
                classIds = [];
                let data = DATAFILTERADDINGDATA(this.props.classList.data.classes);
                data.map((dat, index) => {
                    classIds.push({ index, id: dat.id });
                });

            } else if (this.props.catagoryName == "List") {
                classIds = [];
                let data = DATASORT(this.props.classList.data.classes, 'name', 'ASC');
                data.map((dat, index) => {
                    classIds.push({ index, id: dat.id });
                });

            } else if (this.props.catagoryName == "Today") {
                classIds = [];
                let data = DATATIME(this.props.classList.data.classes, 'time', 'ASC');
                data.map((dat, index) => {
                    classIds.push({ index, id: dat.id });
                });
                
            }

            let linkIndex = parseInt(this.props.presentIndex);
            if (classIds.length > 1) {
                if (linkIndex === 0) {
                    this.previousId = classIds[linkIndex].id;
                    this.previousIndex = classIds[linkIndex].index;
                    this.nextIndex = classIds[linkIndex + 1].index;
                    this.nextId = classIds[linkIndex + 1].id;
                } else if (classIds.length - 1 === linkIndex) {
                    this.previousId = classIds[linkIndex - 1].id;
                    this.previousIndex = classIds[linkIndex - 1].index;
                    this.nextIndex = classIds[linkIndex].index;
                    this.nextId = classIds[linkIndex].id;
                } else if (linkIndex > 0 && linkIndex < classIds.length - 1) {
                    this.previousId = classIds[linkIndex - 1].id;
                    this.previousIndex = classIds[linkIndex - 1].index;
                    this.nextIndex = classIds[linkIndex + 1].index;
                    this.nextId = classIds[linkIndex + 1].id;
                }
            }
            else {
                this.previousId = classIds[linkIndex].id;
                this.previousIndex = classIds[linkIndex].index;
                this.nextIndex = classIds[linkIndex].index;
                this.nextId = classIds[linkIndex].id;
            }
        }
    }

    render() {
        this.getLinkIndexAndId();
        return (
            <div className="row">
                <div className="form-group col-xs-6">
                    <Link to={"/ClassDetails/"
                        + this.previousId
                        + "/"
                        + this.previousIndex} activeStyle={{ pointerEvents: 'none', color: 'gray', background: '#ddd', border: '#ddd' }} className="btn btn-primary">
                        <span className="glyphicon glyphicon-chevron-left"></span> Previous
                    </Link>
                </div>
                <div className="form-group col-xs-6 text-right">
                    <Link to={"/ClassDetails/"
                        + this.nextId
                        + "/"
                        + this.nextIndex} className="btn btn-primary" activeStyle={{ pointerEvents: 'none', color: 'gray', background: '#ddd', border: '#ddd' }}> Next
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        classList: state.classesReducer.classesData,
        catagoryName: state.classesReducer.catagoryName
    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PreviousNext)