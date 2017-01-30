import React from 'react'
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classesReducer from '../classes/classList/reducer'
import { DATASORT, DATAFILTER, DATAFILTERADDINGDATA } from '../classes/classList/components/utility';
import * as actionCreators from '../classes/classList/actions';
const classIds = [];

class PreviousNext extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (classIds[0] == undefined) {
            let data = DATAFILTERADDINGDATA(this.props.classList.data.classes);
            data.map((dat, index) => {
                classIds.push({ index, id: dat.id });
            });
        }
    }

    render() {
        let index = parseInt(this.props.presentIndex);
        if (index === 0) {
            this.previousId = classIds[index].id;
            this.previousIndex = classIds[index].index;
            this.nextIndex = classIds[index + 1].index;
            this.nextId = classIds[index + 1].id;
        } else if (classIds.length - 1 === index) {
            this.previousId = classIds[index - 1].id;
            this.previousIndex = classIds[index - 1].index;
            this.nextIndex = classIds[index].index;
            this.nextId = classIds[index].id;
        } else if (index > 0 && index < classIds.length - 1) {
            this.previousId = classIds[index - 1].id;
            this.previousIndex = classIds[index - 1].index;
            this.nextIndex = classIds[index + 1].index;
            this.nextId = classIds[index + 1].id;
        }
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
        classList: state.classesReducer.classesData
    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PreviousNext)