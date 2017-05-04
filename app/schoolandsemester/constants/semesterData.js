import { translateText } from '../../common/translate';

export const semesterDataObj = [
  {
    objectKey: 'Academics',
    title: translateText('common:SEMESTER_ACADEMICS'),
    headlines: translateText('common:SCHOOL_TASKS_AND_ACTIVITIES'),
    description: translateText('common:FREQUENT_FUNCTIONS_AND_INFORMATION'),
    accordionObj:
    [
      {
        accordionTitle: translateText('common:SEMESTER_CHANGES'),
        links:
        [
          {
            linkKey: 'common:CHANGE_UNDERGRADUATE_COLLEGE',
            linkDesc: 'Request application to the Registrar’s Office for changing from your major and current undergraduate college to a different college on campus.',
            linkTo: ''

          },
          {
            linkKey: 'Leave of Absence',
            linkDesc: 'Request a short-term leave of absence (1 or 2 semesters) for full-time students with a cumulative of GPA 2.00 or above.',
            linkTo: ''
          },
          {
            linkKey: 'Withdrawal - Apply for Approval',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Apply for a Major',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'My Incompletes',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_PROBLEMS'),
        links:
        [
          {
            linkKey: 'Request a Tutor',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Request Academic Support',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_GRADES'),
        links:
        [
          {
            linkKey: 'My Current Semester Scores',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'My Current Semester GPA',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_RECORDS'),
        links:
        [
          {
            linkKey: 'View Progress Towards Graduation',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'View Dismissal/Expulsion Record',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Request Academic Standing Rec…',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Request Enrollment Verification',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Request Degree Verification',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Request Transcript',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_CALENDAR_DATES'),
        links:
        [
          {
            linkKey: 'Current Semester Milestones',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_MY_PROGRAM'),
        links:
        [
          {
            linkKey: 'School of Pharmacy',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'Open Requests Status', 
    title: translateText('common:SEMESTER_ACADEMICS'),
    headlines: 'Action Required and Status of My Open Items',
    description: 'Below is the list of items that need to be completed in order to register for class or earn class credit. Check the status of any open Creighton requests.',
    accordionObj: [
      {
        accordionTitle: '',
        links:
        [
          {
            linkKey: 'Health Insurance Waiver',
            linkDesc: 'N/A',
            linkTo: ''

          },
          {
            linkKey: 'Pay Tuition',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Change Loan Amount Status',
            linkDesc: 'N/A',
            linkTo: ''
          },
          {
            linkKey: 'Dorm Work Order Status',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'Semester Start', 
    title: 'Semester Start',
    headlines: 'Be Ready for School',
    description: 'BeloReview and complete the items in this list to make sure you have the basic things needed to begin a successful academic year.',
    accordionObj: [
      {
        accordionTitle: 'Profile information',
        links:
        [
          {
            linkKey: 'Emergency Contact',
            linkDesc: 'N/A',
            linkTo: ''

          },
          {
            linkKey: 'Other Contact Details',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: 'Profile information',
        links:
        [
          {
            linkKey: 'Emergency Contact',
            linkDesc: 'N/A',
            linkTo: ''

          },
          {
            linkKey: 'Other Contact Details',
            linkDesc: 'N/A',
            linkTo: ''
          }
        ]
      }
    ]
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