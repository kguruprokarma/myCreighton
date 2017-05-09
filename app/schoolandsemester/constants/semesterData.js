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
            linkKey: 'common:SCHOOL_OF_PHARMACY',
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
            linkKey: 'common:HEALTH_INSURANCE_WAIVER',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:PAY_TUITION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:CHANGE_LOAN_AMOUNT_STATUS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:DORM_WORK_ORDER_STATUS',
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
            linkKey: 'common:EMERGENCY_CONTACT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:OTHER_CONTACT_DETAILS',
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
        accordionTitle: translateText('HEALTH_TEXT'),
        links:
        [
          {
            linkKey: 'common:HEALTH_INSURANCE_WAIVER',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:IMMUNIZATION_RECORDS',
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
            linkKey: 'common:FERPA_PERMISSION_FINANCIAL',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:FERPA_PERMISSION_ACADEMIC',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FERPA_PERMISSION_CONDUCT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:PARENTS_WEEKEND',
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
            linkKey: 'common:STATEMENT_OF_FINANCIAL_RESPONSIBILITY',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:ACCEPT_FINANCIAL_AID_AWARD',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:LOAD_DINING_DOLLARS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:LOAD_JAYBUCKS',
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
            linkKey: 'common:SIGN_HOUSING_CONTACT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:LOTTERY_ENROLLMENT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FIND_A_ROOMMATE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:IDENTIFY_A_ROOMMATE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:VERIFY_A_ROOMMATE',
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
            linkKey: 'common:SELECT_A_MEAL_PLAN',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:UPDATE_A_MEAL_PLAN',
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
            linkKey: 'common:REGISTER_FOR_CLASSES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:ENROLLMENT_OVERRIDE_PREREQUISITES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:ENROLLMENT_OVERRIDE_CLASS_SIZE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'common:DROP_OR_ADD_CLASSES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'common:MY_WAITLIST',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:COURSE_REGISTRATION_MINIMUM',
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
            linkKey: 'common:PAY_TUITION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:OUTSTANDING_FEES_AND_HOLDS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:MY_PROMISSORY_NOTES',
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
            linkKey: 'common:MY_CURRENT_CLASS_SCHEDULE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:TEXTBOOKS_FOR_REGISTERED_CLASSES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:MATERIALS_FOR_REGISTERED_CLASSES',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:SYLLABUS_FOR_REGISTERED_CLASSES',
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
            linkKey: 'common:CREIGHTON_BOOKSTORE',
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
            linkKey: 'common:PAY_DAMAGE_BILL',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:PAY_DESK_FEE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:PAY_CONDUCT_FEE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'common:PAY_PARKING_FEE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },  
          {
            linkKey: 'common:PAST_DUE_TUITION',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:HOW_MUCH_DO_I_OWE',
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
            linkKey: 'common:LOAD_DINING_DOLLARS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:LOAD_JAYBUCKS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:LOAD_PRINT_CREDITS',
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
            linkKey: 'common:SEMESTER_FAFSA',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FINANCIAL_AID',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FEDERAL_WORK_STUDY',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:BUDGET_INCREASE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:CHANGE_LOAN_AMOUNT',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },          
          {
            linkKey: 'common:PARENTPLUS_LOAN',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:FINANCIAL_STATUS_CHANGE',
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