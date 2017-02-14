/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classesReducer from '../classes/classList/reducer';
import { DATASORT, DATAFILTERADDINGDATA, DATATIME } from './utility';
import * as ROUTE_URL from '../constants/routeContants';

import * as actionCreators from '../classes/classList/actions';


let classIds = [];

class PreviousNext extends React.Component {

    constructor() {
        super();
        this.getLinkIndexAndId = this.getLinkIndexAndId.bind(this);
        this.pushClassesToClassIdsArray = this.pushClassesToClassIdsArray.bind(this);
    }

    componentWillMount() {
        let catagory = this.props.presentCategory;
        if (catagory === "week") {
            this.props.getClassesDataByWeek();
        } else if (catagory === "list") {
            this.props.getClassesDataForAtoZ();
        } else if (catagory === "today") {
            this.props.getClassesDataByToday();
        }
    }

    pushClassesToClassIdsArray(classes) {
        classes.map((classData, index) => {
            classIds.push({ index, id: classData.id });
        });
    }

    getLinkIndexAndId() {
        if (this.props.classList.data && this.props.classList.data.classes.length > 0) {
            let catagory = this.props.presentCategory;
            if (catagory === "week") {
                classIds = [];
                let classes = DATAFILTERADDINGDATA(this.props.classList.data.classes);
                this.pushClassesToClassIdsArray(classes);
            } else if (catagory === "list") {
                classIds = [];
                let classes = DATASORT(this.props.classList.data.classes, 'name', 'ASC');
                this.pushClassesToClassIdsArray(classes);
            } else if (catagory === "today") {
                classIds = [];
                let classes = DATATIME(this.props.classList.data.classes, 'time', 'ASC');
                this.pushClassesToClassIdsArray(classes);
            }

            let linkIndex = parseInt(this.props.presentIndex);
            if (classIds.length > 1) {
                if (linkIndex === 0) {
                    this.previousId = classIds[linkIndex].id;
                    this.previousIndex = classIds[linkIndex].index;
                    this.nextIndex = classIds[linkIndex + 1].index;
                    this.nextId = classIds[linkIndex + 1].id;
                } 
                else if (classIds.length - 1 === linkIndex) {
                    this.previousId = classIds[linkIndex - 1].id;
                    this.previousIndex = classIds[linkIndex - 1].index;
                    this.nextIndex = classIds[linkIndex].index;
                    this.nextId = classIds[linkIndex].id;
                } 
                else if (linkIndex > 0 && linkIndex < classIds.length - 1) {
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
                    <Link to={ROUTE_URL.CLASS_DETAILS +"/" + this.props.presentCategory + "/"
                        + this.previousId
                        + "/"
                        + this.previousIndex} activeStyle={{ pointerEvents: 'none', color: 'gray', background: '#ddd', border: '#ddd' }} className="btn btn-primary">
                        <span className="glyphicon glyphicon-chevron-left"></span> Previous
                    </Link>
                </div>
                <div className="form-group col-xs-6 text-right">
                    <Link to={ROUTE_URL.CLASS_DETAILS +"/" + this.props.presentCategory + "/"
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
        classList: state.classesReducer.classesData
    });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PreviousNext);