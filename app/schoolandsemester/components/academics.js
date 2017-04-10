import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SemesterContainer from './semesterContainer';

const semesterDataObj = [
  {
    title: 'Academics',
    headlines: 'School Tasks and Activities',
    description: 'Frequent functions and information needed during the semester.',
    accordionObj: [{
      accordionTitle: 'Changes',
      links: [
        'Change Undergraduate College',
        'Leave of Absence',
        'Withdrawal - Apply for Approval',
        'Withdrawal - Return Title 4 Funds',
        'Apply for a Major',
        'My Incompletes'          
      ]
    },
    {
      accordionTitle: 'Problems',
      links: [
        'Request a Tutor',
        'Request Academic Support'
      ]
    },
    {
      accordionTitle: 'Grades',
      links: [
        'My Current Semester Scores',
        'My Current Semester GPA'
      ]
    },
    {
      accordionTitle: 'Records',
      links: [
        'View Progress Towards Graduation',
        'View Dismissal/Expulsion Record',
        'Request Academic Standing Rec…',
        'Request Enrollment Verification',
        'Request Degree Verification',
        'Request Transcript'
      ]
    },
    {
      accordionTitle: 'Calendar Dates',
      links: [
        'Current Semester Milestones'
      ]
    },
    {
      accordionTitle: 'My Program',
      links: [
        'School of Pharmacy'
      ]
    }
    ]
  }
];
class Academics extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        Academics {console.log('semesterDataObj: ', semesterDataObj[0])}
        <SemesterContainer data={semesterDataObj[0]} />
      </div>
    );
  }
}

function mapStateToProps({ }) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Academics);
