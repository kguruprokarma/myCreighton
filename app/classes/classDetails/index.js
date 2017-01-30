/*Created Date: - 23rd -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderLabel from './../../common/headerLabel';
import ClassInfo from './../classDetails/components/classInfo';
import ClassAssignments from './../classDetails/components/classAssignments';
import TodaysClass from './../classDetails/components/todaysClass';
import UpcomingAssignments from './../classDetails/components/upcomingAssignments';
import TestsOrQuizzes from './../classDetails/components/testsOrQuizzes';
import * as actionCreators from './actions';
import style from '../classDetails/style.css';
import * as _ from 'lodash';
import { Link } from 'react-router';
import PreviousNext from "../../common/previousNext";

export class ClassDetails extends React.PureComponent {

    constructor() {
        super()
    }

    componentWillMount() {
        this.props.getClassDetails(this.props.params.id);
    }
    render() {

        let classData = this.props.classDetails && this.props.classDetails.data
            && _.find(this.props.classDetails.data, { id: parseInt(this.props.params.id) });
        return (
            <section className="classesDeatils">
            <h3 className="announced-only">Class details heading</h3>
                {(classData && Object.keys(classData).length > 0) && (<article>
                    <HeaderLabel headerLabel="CLASS DETAIL" />
                    <ClassInfo json={classData.classHeader} />
                    <ClassAssignments assignmentsData={classData} />
                    <TodaysClass json={classData} />
                    <UpcomingAssignments json={classData} />
                    <TestsOrQuizzes json={classData} />
                </article>)}
                <PreviousNext presentIndex={this.props.params.index} />
            </section>

        );
    }
}

const mapStateToProps = (state) => (
    {
        classDetails: state.classDetailsReducer.classDetails

    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails)

