import { translateText } from '../../common/translate';

export const semesterDataObj = [
  {
    objectKey: 'academics',
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
            linkDesc: translateText('common:CHANGE_UNDERGRADUATE_DESC'),
            linkTo: ''

          },
          {
            linkKey: 'common:LEAVE_OF_ABSENCE',
            linkDesc: 'Request a short-term leave of absence (1 or 2 semesters) for full-time students with a cumulative of GPA 2.00 or above.',
            linkTo: ''
          },
          {
            linkKey: 'common:WITHDRAWAL_APPLY_FOR_APPROVAL',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:APPLY_FOR_A_MAJOR',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:MY_INCOMPLETES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_PROBLEMS'),
        links:
        [
          {
            linkKey: 'common:REQUEST_A_TUTOR',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REQUEST_ACADEMIC_SUPPORT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_GRADES'),
        links:
        [
          {
            linkKey: 'common:MY_CURRENT_SEMESTER_SCORES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:MY_CURRENT_SEMESTER_GPA',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_RECORDS'),
        links:
        [
          {
            linkKey: 'common:VIEW_PROGRESS_TOWARDS_GRADUATION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:View_Dismissal_Expulsion_Record',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REQUEST_ACADEMIC_STANDING_RECORD',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REQUEST_ENROLLMENT_VERIFICATION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REQUEST_DEGREE_VERIFICATION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REQUEST_TRANSCRIPT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_CALENDAR_DATES'),
        links:
        [
          {
            linkKey: 'common:CURRENT_SEMESTER_MILESTONES',
            linkDesc: translateText('common:COMMON_NA'),
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
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'openrequestsstatus', 
    title: translateText('common:OPEN_REQUESSTS_STATUS'),
    headlines: translateText('common:ACTION_REQUIRED_AND_STATUS_OF_MY_OPEN_ITEMS'),
    description: translateText('common:OPEN_REQUEST_DESC'),
    accordionObj: [
      {
        accordionTitle: '',
        links:
        [
          {
            linkKey: translateText('common:HEALTH_INSURANCE_WAIVER'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: translateText('common:PAY_TUITION'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: translateText('common:CHANGE_LOAN_AMOUNT_STATUS'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: translateText('common:DORM_WORK_ORDER_STATUS'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'semesterstart', 
    title: translateText('SEMESTER_START'),
    headlines: translateText('BE_READY_FOR_SCHOOL'),
    description: translateText('SEMESTER_START_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('PROFILE_INFORMATION'),
        links:
        [
          {
            linkKey: translateText('EMERGENCY_CONTACT'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: translateText('OTHER_CONTACT_DETAILS'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('CLUBS_AND_INTERESTS'),
        links:
        [
          {
            linkKey: 'Campus Clubs',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Academic Interests',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('HEALTH_TEXT'),
        links:
        [
          {
            linkKey: 'Health Insurance Waiver',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Immunization Records',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('PARENTS_TEXT'),
        links:
        [
          {
            linkKey: 'FERPA permission - Financial',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'FERPA permission - Academic',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'FERPA permission - Conduct',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Parents Weekend',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('FINANCES_TEXT'),
        links:
        [
          {
            linkKey: 'Statement of Financial Responsibi…',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Accept Financial Aid Award',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Load Dining Dollars',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Load JayBuck$',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('HOUSING_TEXT'),
        links:
        [
          {
            linkKey: 'Sign Housing Contact',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Lottery enrollment',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Find a Roommate',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Identify a Roommate',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Verify a Roommate',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('DINING_TEXT'),
        links:
        [
          {
            linkKey: 'Select a Meal Plan',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Update a Meal Plan',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('WAVIERS_TEXT'),
        links:
        [
          {
            linkKey: 'Welcome Events',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'Service Trips',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'classregistration', 
    title: translateText('CLASS_REGISTRATION'),
    headlines: translateText('SELECT_AND_PAY_FOR_THE_CLASSES'),
    description: translateText('CLASS_REGISTRATION_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('REGISTER_CLASS_CLASSES'),
        links:
        [
          {
            linkKey: 'Register for Classes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Enrollment Override - Prerequisites',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Enrollment Override - Class Size',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'Drop or Add Classes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'My Waitlist',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Course Registration Minimum',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }    
        ]
      },
      {
        accordionTitle: translateText('FINANCES_TEXT'),
        links:
        [
          {
            linkKey: 'Pay Tuition',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Outstanding Fees and Holds',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'My Promissory Notes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('MY_REGISTER_CLASS'),
        links:
        [
          {
            linkKey: 'My Current Class Schedule',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Textbooks for Registered Classes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Materials for Registered Classes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Syllabus for Registered Classes',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('SHOP_CREIGHTON'),
        links:
        [
          {
            linkKey: 'Creighton Bookstore',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'finances', 
    title: translateText('FINANCES_TEXT'),
    headlines: translateText('MY_SCHOOL_EXPENSES_AND_INCOME'),
    description: translateText('FINANCES_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('FINANCE_BILLS'),
        links:
        [
          {
            linkKey: 'Pay Damage Bill',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Pay Desk Fee',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Pay Conduct Fee',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'Pay Parking Fee',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'Past-due Tuition',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'How Much Do I Owe?',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('CREIGHTON_CURRENCY'),
        links:
        [
          {
            linkKey: 'Load Dining Dollars',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Load JayBuck$',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Load Print Credits',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('GET_MONEY'),
        links:
        [
          {
            linkKey: 'FAFSA',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Financial Aid',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Federal Work Study',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Budget Increase',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Change Loan Amount',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },          
          {
            linkKey: 'ParentPlus Loan',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'Financial Status Change',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('WORK_STUDY'),
        links:
        [
          {
            linkKey: 'common:MY_WORK_STUDY',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:WORK_STUDY_OPPORTUNITIES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'studentlife', 
    title: translateText('STUDENT_LIFE'),
    headlines: translateText('CAMPUS_INVOLVEMENT_AND_FACILITY_REQUESTS'),
    description: translateText('STUDENT_LIFE_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('Clubs and Interests'),
        links:
        [
          {
            linkKey: 'common:CAMPUS_CLUBS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:ACADEMIC_INTERESTS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('SERVICE_FOR_OTHER'),
        links:
        [
          {
            linkKey: 'common:MY_SERVICE_HOURS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:SERVICE_OPPORTUNITIES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('WAVIERS_TEXT'),
        links:
        [
          {
            linkKey: 'common:WELCOME_EVENTS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:SERVICE_TRIPS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('STUDENT_LIFE_FACILITIES'),
        links:
        [
          {
            linkKey: 'common:REPORT_A_FACILITIES_PROBLEM',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FILE_A_DORM_WORK_ORDER',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'semesterend', 
    title: translateText('SEMESTER_END'),
    headlines: translateText('FINALS_AND_GRADES'),
    description: translateText('SEMESTER_END_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('SEMESTER_CALENDAR_DATES'),
        links:
        [
          {
            linkKey: translateText('CURRENT_SEMESTER_END_MILESTONES'),
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:Future_Semester_End_Milestones',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('SEMESTER_END_GRADES'),
        links:
        [
          {
            linkKey: 'common:GRADE_CHANGES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:MY_GRADE_APPEALS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:CURRENT_SEMESTER_FINAL_GRADES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  },
  {
    objectKey: 'graduation', 
    title: translateText('GRADUATION_TEXT'),
    headlines: translateText('WHEN_DO_I_GRADUATE'),
    description: translateText('GRADUATE_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('SEMESTER_ACADEMICS'),
        links:
        [
          {
            linkKey: 'common:APPLY_FOR_GRADUATION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:CAREER_SURVEY',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:REMOVE_HOLDS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('GRADUATION_REQUIREMENTS'),
        links:
        [
          {
            linkKey: 'common:VIEW_PROGRESS_TOWARD_GRADUATION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:GPA_CALCULATOR',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:PLAN_FOR_NEXT_SEMESTER',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      },
      {
        accordionTitle: translateText('SEMESTER_CALENDAR_DATES'),
        links:
        [
          {
            linkKey: 'common:CURRENT_SEMESTER_GRADUATION_DATES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FUTURE_SEMESTER_GRADUATION_DATES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          }
        ]
      }
    ]
  }
];

export default semesterDataObj;