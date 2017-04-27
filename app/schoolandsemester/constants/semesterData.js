import { translateText } from '../../common/translate';

export const semesterDataObj = [
  {
    title: translateText('common:SEMESTER_ACADEMICS'),
    headlines: translateText('common:SCHOOL_TASKS_AND_ACTIVITIES'),
    description: translateText('common:FREQUENT_FUNCTIONS_AND_INFORMATION'),
    accordionObj: [{
      accordionTitle: translateText('common:SEMESTER_CHANGES'),
      links: [
        translateText('common:CHANGE_UNDERGRADUATE_COLLEGE')
      ]
    }]
  }
];

export default semesterDataObj;

/*

export const semesterDataObj = [
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

*/