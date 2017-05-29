import { translateText } from '../../common/translate';
import * as urlConstants from '../../constants/urlConstants';

export const semesterDataObj = [
  {
    objectKey: 'semesterstart', 
    title: translateText('SEMESTER_START'),
    headlines: translateText('BE_READY_FOR_SCHOOL'),
    description: translateText('SEMESTER_START_DESC'),
    accordionObj: [
      {
        accordionTitle: translateText('PROFILE_INFORMATION'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:EMERGENCY_CONTACT',
            linkDesc: translateText('common:EMERGENCY_CONTACT_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/newstudentinformation/'

          },
          {
            linkKey: 'common:OTHER_CONTACT_DETAILS',
            linkDesc: translateText('common:OTHER_CONTACT_DETAILS_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/newstudentinformation/'
          }
        ]
      },
      {
        accordionTitle: translateText('CLUBS_AND_INTERESTS'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:CAMPUS_CLUBS',
            linkDesc: translateText('common:CAMPUS_CLUBS_DESC'),
            linkTo: 'https://www.creighton.edu/student-experience/clubs-groups'

          },
          {
            linkKey: 'common:ACADEMIC_INTERESTS',
            linkDesc: translateText('common:ACADEMIC_INTERESTS_DESC'),
            linkTo: 'http://www.creighton.edu/studentlife/studentleadershipinvolvementcenter/'
          }
        ]
      },
      {
        accordionTitle: translateText('HEALTH_TEXT'),
        collapse: true,
        links: 
        [
          {
            linkKey: 'common:HEALTH_INSURANCE_WAIVER',
            linkDesc: translateText('common:HEALTH_INSURANCE_WAIVER_DESC'),
            linkTo: 'https://www.creighton.edu/chc/studenthealthservices/healthinsurance/creightonstudenthealthinsuranceplan/'

          },
          {
            linkKey: 'common:IMMUNIZATION_RECORDS',
            linkDesc: translateText('common:IMMUNIZATION_RECORDS_DESC'),
            linkTo: 'https://www.creighton.edu/chc/studenthealthservices/immunizationrequirements/'
          }
        ]
      },
      {
        accordionTitle: translateText('PARENTS_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:FERPA',
            linkDesc: translateText('common:FERPA_DESC'),
            linkTo: 'https://www.creighton.edu/generalcounsel/compliance/facultystudentcompliance/ferpa/'

          },
          {
            linkKey: 'common:PARENTS_WEEKEND',
            linkDesc: translateText('common:PARENTS_WEEKEND_DESC'),
            linkTo: 'https://www.creighton.edu/parentprogram/parentandfamilyevents/'
          }
        ]
      },
      
      {
        accordionTitle: translateText('FINANCES_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:STATEMENT_OF_FINANCIAL_RESPONSIBILITY',
            linkDesc: translateText('common:STATEMENT_OF_FINANCIAL_RESPONSIBILITY_DESC'),
            linkTo: 'https://choose.creighton.edu/apply/?sr=ce8e51a2-43e6-4131-8ee9-b88ce041c3a3'

          },
          {
            linkKey: 'common:ACCEPT_FINANCIAL_AID_AWARD',
            linkDesc: translateText('common:ACCEPT_FINANCIAL_AID_AWARD_DESC'),
            linkTo: 'https://www.creighton.edu/financialaid/applyingforfinancialaid/acceptingyouraidoffer/'
          },
          {
            linkKey: 'common:LOAD_DINING_DOLLARS',
            linkDesc: translateText('common:LOAD_DINING_DOLLARS_DESC'),
            linkTo: 'https://www.creighton.edu/admin/cardservices/jaybuckprogram/jaybuckvsdiningdollars/'
          },
          {
            linkKey: 'common:LOAD_JAYBUCKS',
            linkDesc: translateText('common:LOAD_JAYBUCKS_DESC'),
            linkTo: 'https://www.creighton.edu/admin/cardservices/jaybuckprogram/loadingfunds/'
          }
        ]
      },
      {
        accordionTitle: translateText('HOUSING_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:SIGN_HOUSING_CONTACT',
            linkDesc: translateText('common:SIGN_HOUSING_CONTACT_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/departmentofresidencelife/housinginformation/'

          },
          {
            linkKey: 'common:LOTTERY_ENROLLMENT',
            linkDesc: translateText('common:LOTTERY_ENROLLMENT_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/starrezdashboard/'
          },
          {
            linkKey: 'common:FIND_A_ROOMMATE',
            linkDesc: translateText('common:FIND_A_ROOMMATE_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/newstudentinformation/newstudentroommatesearchprocess/'
          },
          {
            linkKey: 'common:IDENTIFY_A_ROOMMATE',
            linkDesc: translateText('common:IDENTIFY_A_ROOMMATE_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/newstudentinformation/newstudentroommatesearchprocess/'

          },
          {
            linkKey: 'common:VERIFY_A_ROOMMATE',
            linkDesc: translateText('common:VERIFY_A_ROOMMATE_DESC'),
            linkTo: 'https://www.creighton.edu/studentlife/living/housinginformation/newstudentinformation/newstudentroommatesearchprocess/'
          }
        ]
      },
      {
        accordionTitle: translateText('DINING_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:SELECT_A_MEAL_PLAN',
            linkDesc: translateText('common:SELECT_A_MEAL_PLAN_DESC'),
            linkTo: 'https://creighton.sodexomyway.com/dining-plans/index.html'

          },
          {
            linkKey: 'common:UPDATE_A_MEAL_PLAN',
            linkDesc: translateText('common:UPDATE_A_MEAL_PLAN_DESC'),
            linkTo: 'https://creighton.sodexomyway.com/profile/login.html?ReturnUrl=/index.html'
          }
        ]
      },
      {
        accordionTitle: translateText('WAVIERS_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:WELCOME_EVENTS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''

          },
          {
            linkKey: 'common:SERVICE_TRIPS',
            linkDesc: translateText('common:SERVICE_TRIPS_DESC'),
            linkTo: ' https://www.creighton.edu/fileadmin/user/GeneralCounsel/docs/Service_Trip_Release_of_Claims.doc'
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
        collapse: true,
        links:
        [
          {
            linkKey: 'common:REGISTER_FOR_CLASSES',
            linkDesc: translateText('common:REGISTER_FOR_CLASSES_DESC'),
            linkTo: 'http://www.creighton.edu/registrar/registration/registeringonthenest/'
          },
          {
            linkKey: 'common:ENROLLMENT_OVERRIDE_PREREQUISITES',
            linkDesc: translateText('common:ENROLLMENT_OVERRIDE_PREREQUISITES_DESC'),
            linkTo: 'http://www.creighton.edu/registrar/registration/overridesandexceptions/'
          },
          {
            linkKey: 'common:ENROLLMENT_OVERRIDE_CLASS_SIZE',
            linkDesc: translateText('common:ENROLLMENT_OVERRIDE_CLASS_SIZE_DESC'),
            linkTo: 'http://www.creighton.edu/registrar/registration/overridesandexceptions/'
          },  
          {
            linkKey: 'common:DROP_OR_ADD_CLASSES',
            linkDesc: translateText('common:DROP_OR_ADD_CLASSES_DESC'),
            linkTo: 'http://www.creighton.edu/registrar/registration/changingyourschedule/'
          },  
          {
            linkKey: 'common:MY_WAITLIST',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:COURSE_REGISTRATION_MINIMUM',
            linkDesc: translateText('common:COURSE_REGISTRATION_MINIMUM_DESC'),
            linkTo: 'http://www.creighton.edu/registrar/registration/preparingtoregister/'
          }    
        ]
      },
      {
        accordionTitle: translateText('FINANCES_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:PAY_TUITION',
            linkDesc: translateText('common:PAY_TUITION_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/billinginfo/billingpaymentoptions/'
          },
          {
            linkKey: 'common:OUTSTANDING_FEES_AND_HOLDS',
            linkDesc: translateText('common:OUTSTANDING_FEES_AND_HOLDS_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/billinginfo/billingpaymentoptions/'
          },
          {
            linkKey: 'common:MY_PROMISSORY_NOTES',
            linkDesc: translateText('common:MY_PROMISSORY_NOTES_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/loans/studentloandepartment/'
          }
        ]
      },
      {
        accordionTitle: translateText('MY_REGISTER_CLASS'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:MY_CURRENT_CLASS_SCHEDULE',
            linkDesc: translateText('common:MY_CURRENT_CLASS_SCHEDULE_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/scheduleofcourses/'
          },
          {
            linkKey: 'common:TEXTBOOKS_FOR_REGISTERED_CLASSES',
            linkDesc: translateText('common:TEXTBOOKS_FOR_REGISTERED_CLASSES_DESC'),
            linkTo: 'https://law.creighton.edu/werner-institute/current-werner-students/course-schedules-booklists'
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
        collapse: true,
        links:
        [
          {
            linkKey: 'common:CREIGHTON_BOOKSTORE',
            linkDesc: translateText('common:CREIGHTON_BOOKSTORE_DESC'),
            linkTo: 'http://www.bkstr.com/creightonstore/home'
          }
        ]
      }
    ]
  },
  {
    objectKey: 'academics',
    title: translateText('common:SEMESTER_ACADEMICS'),
    headlines: translateText('common:SCHOOL_TASKS_AND_ACTIVITIES'),
    description: translateText('common:FREQUENT_FUNCTIONS_AND_INFORMATION'),
    accordionObj:
    [
      {
        accordionTitle: translateText('common:SEMESTER_CHANGES'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:CHANGE_UNDERGRADUATE_COLLEGE',
            linkDesc: translateText('common:CHANGE_UNDERGRADUATE_DESC'),
            linkTo: urlConstants.INTERCOLLEGE_TRANSFER

          },
          {
            linkKey: 'common:LEAVE_OF_ABSENCE',
            linkDesc: translateText('common:LEAVE_OF_ABSENCE_DESC'),
            linkTo: 'http://catalog.creighton.edu/graduate/administration-policies/leave-absence/'
          },
          {
            linkKey: 'common:WITHDRAWAL_APPLY_FOR_APPROVAL',
            linkDesc: translateText('common:WITHDRAWAL_APPLY_FOR_APPROVAL_DESC'),
            linkTo: 'http://catalog.creighton.edu/undergraduate/academic-policies-procedures/withdrawal/'
          },
          {
            linkKey: 'common:WITHDRAWAL_RETURN_TITLE_4_FUNDS',
            linkDesc: translateText('common:WITHDRAWAL_RETURN_TITLE_4_FUNDS_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/withdrawalsandrefunds/'
          },
          {
            linkKey: 'common:APPLY_FOR_A_MAJOR',
            linkDesc: translateText('common:APPLY_FOR_A_MAJOR_DESC'),
            linkTo: 'https://www.creighton.edu/programs'
          },
          {
            linkKey: 'common:MY_INCOMPLETES',
            linkDesc: translateText('common:MY_INCOMPLETES_DESC'),
            linkTo: 'http://catalog.creighton.edu/undergraduate/academic-policies-procedures/incomplete/'
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_PROBLEMS'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:REQUEST_A_TUTOR',
            linkDesc: translateText('common:REQUEST_A_TUTOR_DESC'),
            linkTo: 'http://blogs.creighton.edu/edge/academic-success/#tutoring'
          },
          {
            linkKey: 'common:REQUEST_ACADEMIC_SUPPORT',
            linkDesc: translateText('common:REQUEST_ACADEMIC_SUPPORT_DESC'),
            linkTo: 'https://www.creighton.edu/academics/centers-institutes'
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_GRADES'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:MY_CURRENT_SEMESTER_SCORES',
            linkDesc: translateText('common:MY_CURRENT_SEMESTER_SCORES_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/grades/'
          },
          {
            linkKey: 'common:MY_CURRENT_SEMESTER_GPA',
            linkDesc: translateText('common:MY_CURRENT_SEMESTER_GPA_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/grades/'
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_RECORDS'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:VIEW_PROGRESS_TOWARDS_GRADUATION',
            linkDesc: translateText('common:VIEW_PROGRESS_TOWARDS_GRADUATION_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/graduationcommencement/'
          },
          {
            linkKey: 'common:VIEW_DISMISSAL_EXPULSION_RECORD',
            linkDesc: translateText('common:VIEW_DISMISSAL_EXPULSION_RECORD_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/confidentialityprivacyferpa/'
          },
          {
            linkKey: 'common:REQUEST_ACADEMIC_STANDING_RECORD',
            linkDesc: translateText('common:REQUEST_ACADEMIC_STANDING_RECORD_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/registration/'
          },
          {
            linkKey: 'common:REQUEST_ENROLLMENT_VERIFICATION',
            linkDesc: translateText('common:REQUEST_ENROLLMENT_VERIFICATION_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/enrollmentdegreeverification/'
          },
          {
            linkKey: 'common:REQUEST_DEGREE_VERIFICATION',
            linkDesc: translateText('common:REQUEST_DEGREE_VERIFICATION_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/enrollmentdegreeverification/'
          },
          {
            linkKey: 'common:REQUEST_TRANSCRIPT',
            linkDesc: translateText('common:REQUEST_TRANSCRIPT_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/transcripts/'
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_CALENDAR_DATES'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:CURRENT_SEMESTER_MILESTONES',
            linkDesc: translateText('common:CURRENT_SEMESTER_MILESTONES_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/catalogs/'
          }
        ]
      },
      {
        accordionTitle: translateText('common:SEMESTER_MY_PROGRAM'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:SCHOOL_OF_PHARMACY',
            linkDesc: translateText('common:SCHOOL_OF_PHARMACY_DESC'),
            linkTo: 'https://spahp.creighton.edu/academics/pharmacy'
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
        collapse: true,
        links:
        [
          {
            linkKey: 'common:PAY_DAMAGE_BILL',
            linkDesc: translateText('common:PAY_DAMAGE_BILL_DESC'),
            linkTo: 'http://www.creighton.edu/fileadmin/user/Admissions/docs/Admissions/2012-13_Housing_Agreement_parent_agreement_form.pdf'
          },
          {
            linkKey: 'common:PAY_DESK_FEE',
            linkDesc: translateText('common:PAY_DESK_FEE_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/billinginfo/billingpaymentoptions/'
          },
          {
            linkKey: 'common:PAY_CONDUCT_FEE',
            linkDesc: translateText('common:PAY_CONDUCT_FEE_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/billinginfo/billingpaymentoptions/'
          },  
          {
            linkKey: 'common:PAY_PARKING_FEE',
            linkDesc: translateText('common:PAY_PARKING_FEE_DESC'),
            linkTo: 'http://www.creighton.edu/businessoffice/billinginfo/parkingpermitmedicalschoolyearbookstudenthealthinsurancefees/'
          },  
          {
            linkKey: 'common:PAST_DUE_TUITION',
            linkDesc: translateText('common:PAST_DUE_TUITION_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/billinginfo/billingpaymentoptions/'
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
        collapse: true,
        links:
        [
          {
            linkKey: 'common:LOAD_DINING_DOLLARS',
            linkDesc: translateText('common:LOAD_DINING_DOLLARS_DESC'),
            linkTo: 'https://www.creighton.edu/admin/cardservices/jaybuckprogram/jaybuckvsdiningdollars/'
          },
          {
            linkKey: 'common:LOAD_JAYBUCKS',
            linkDesc: translateText('common:LOAD_JAYBUCKS_DESC'),
            linkTo: 'https://www.creighton.edu/admin/cardservices/jaybuckprogram/loadingfunds/'
          },
          {
            linkKey: 'common:LOAD_PRINT_CREDITS',
            linkDesc: translateText('common:LOAD_PRINT_CREDITS_DESC'),
            linkTo: 'https://www.creighton.edu/admin/cardservices/jaybuckprogram/'
          }
        ]
      },
      {
        accordionTitle: translateText('GET_MONEY'),
        links:
        [
          {
            linkKey: 'common:SEMESTER_FAFSA',
            linkDesc: translateText('common:SEMESTER_FAFSA_DESC'),
            linkTo: 'http://online.creighton.edu/admissions/financial-aid'
          },
          {
            linkKey: 'common:FINANCIAL_AID',
            linkDesc: translateText('common:FINANCIAL_AID_DESC'),
            linkTo: 'http://online.creighton.edu/admissions/financial-aid'
          },
          {
            linkKey: 'common:FEDERAL_WORK_STUDY',
            linkDesc: translateText('common:FEDERAL_WORK_STUDY_DESC'),
            linkTo: 'https://www.creighton.edu/studentemployment/federalworkstudyprogram/'
          },
          {
            linkKey: 'common:BUDGET_INCREASE',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:CHANGE_LOAN_AMOUNT',
            linkDesc: translateText('common:CHANGE_LOAN_AMOUNT_DESC'),
            linkTo: 'https://www.creighton.edu/financialaid/typesofaid/loanprograms/'
          },          
          {
            linkKey: 'common:PARENTPLUS_LOAN',
            linkDesc: translateText('common:PARENTPLUS_LOAN_DESC'),
            linkTo: 'https://www.creighton.edu/financialaid/typesofaid/loanprograms/directloanprogramguide/'
          },
          {
            linkKey: 'common:FINANCIAL_STATUS_CHANGE',
            linkDesc: translateText('common:FINANCIAL_STATUS_CHANGE_DESC'),
            linkTo: 'https://www.creighton.edu/financialaid/financialaidinfo/generalpolicies/'
          }
        ]
      },
      {
        accordionTitle: translateText('WORK_STUDY'),
        links:
        [
          {
            linkKey: 'common:MY_WORK_STUDY',
            linkDesc: translateText('common:MY_WORK_STUDY_DESC'),
            linkTo: 'https://www.creighton.edu/studentemployment/'
          },
          {
            linkKey: 'common:WORK_STUDY_OPPORTUNITIES',
            linkDesc: translateText('common:WORK_STUDY_OPPORTUNITIES_DESC'),
            linkTo: 'https://www.creighton.edu/studentemployment/oncampusjobs/'
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
        collapse: true,
        links:
        [
          {
            linkKey: 'common:CAMPUS_CLUBS',
            linkDesc: translateText('common:CAMPUS_CLUBS_DESC'),
            linkTo: 'https://www.creighton.edu/student-experience/clubs-groups'
          },
          {
            linkKey: 'common:ACADEMIC_INTERESTS',
            linkDesc: translateText('common:ACADEMIC_INTERESTS_DESC'),
            linkTo: 'http://www.creighton.edu/studentlife/studentleadershipinvolvementcenter/'
          }
        ]
      },
      {
        accordionTitle: translateText('SERVICE_FOR_OTHER'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:SERVICE_OPPORTUNITIES',
            linkDesc: translateText('common:SERVICE_OPPORTUNITIES_DESC'),
            linkTo: 'https://www.creighton.edu/cu-community/service'
          }
        ]
      },
      {
        accordionTitle: translateText('WAVIERS_TEXT'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:WELCOME_EVENTS',
            linkDesc: translateText('common:COMMON_NA'),
            linkTo: ''
          },
          {
            linkKey: 'common:SERVICE_TRIPS',
            linkDesc: translateText('common:SERVICE_TRIPS_DESC'),
            linkTo: 'https://www.creighton.edu/fileadmin/user/GeneralCounsel/docs/Service_Trip_Release_of_Claims.doc'
          }
        ]
      },
      {
        accordionTitle: translateText('STUDENT_LIFE_FACILITIES'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:REPORT_A_FACILITIES_PROBLEM',
            linkDesc: translateText('common:REPORT_A_FACILITIES_PROBLEM_DESC'),
            linkTo: 'https://www.creighton.edu/admin/facilities/'
          },
          {
            linkKey: 'common:FILE_A_DORM_WORK_ORDER',
            linkDesc: translateText('common:FILE_A_DORM_WORK_ORDER_DESC'),
            linkTo: 'https://www.creighton.edu/admin/facilities/servicerequestform/'
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
        collapse: true,
        links:
        [
          {
            linkKey: translateText('CURRENT_SEMESTER_END_MILESTONES'),
            linkDesc: translateText('common:CURRENT_SEMESTER_END_MILESTONES_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/academiccalendars/'
          },
          {
            linkKey: 'common:FUTURE_SEMESTER_END_MILESTONES',
            linkDesc: translateText('common:FUTURE_SEMESTER_END_MILESTONES_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/academiccalendars/'
          }
        ]
      },
      {
        accordionTitle: translateText('SEMESTER_END_GRADES'),
        collapse: true,
        links:
        [
          {
            linkKey: 'common:GRADE_CHANGES',
            linkDesc: translateText('common:GRADE_CHANGES_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/grades/faculty/'
          },
          {
            linkKey: 'common:MY_GRADE_APPEALS',
            linkDesc: translateText('common:MY_GRADE_APPEALS_DESC'),
            linkTo: 'http://catalog.creighton.edu/undergraduate/academic-policies-procedures/grades/'
          },
          {
            linkKey: 'common:CURRENT_SEMESTER_FINAL_GRADES',
            linkDesc: translateText('common:CURRENT_SEMESTER_FINAL_GRADES_DESC'),
            linkTo: 'http://catalog.creighton.edu/dentistry/administration-supervision-academic-policies/grading-system-policy/'
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
            linkDesc: translateText('common:APPLY_FOR_GRADUATION_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/graduationcommencement/'
          },
          {
            linkKey: 'common:CAREER_SURVEY',
            linkDesc: translateText('common:CAREER_SURVEY_DESC'),
            linkTo: 'https://www.creighton.edu/careercenter/students/careeracademicexploration/careerpersonalityassessments/'
          },
          {
            linkKey: 'common:REMOVE_HOLDS',
            linkDesc: translateText('common:REMOVE_HOLDS_DESC'),
            linkTo: 'https://www.creighton.edu/businessoffice/other/faq/'
          }
        ]
      },
      {
        accordionTitle: translateText('GRADUATION_REQUIREMENTS'),
        links:
        [
          {
            linkKey: 'common:VIEW_PROGRESS_TOWARD_GRADUATION',
            linkDesc: translateText('common:VIEW_PROGRESS_TOWARD_GRADUATION_DESC'),
            linkTo: 'https://www.creighton.edu/registrar/degreeworks/'
          },
          {
            linkKey: 'common:GPA_CALCULATOR',
            linkDesc: translateText('common:GPA_CALCULATOR_DESC'),
            linkTo: 'https://people.creighton.edu/~bjk79676/PHealth/BCPMCalculator.php'
          },
          {
            linkKey: 'common:PLAN_FOR_NEXT_SEMESTER',
            linkDesc: translateText('common:PLAN_FOR_NEXT_SEMESTER_DESC'),
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
            linkDesc: translateText('common:CURRENT_SEMESTER_GRADUATION_DATES_DESC'),
            linkTo: 'http://www.creighton.edu/commencement/schedule/'
          },
          {
            linkKey: 'common:FUTURE_SEMESTER_GRADUATION_DATES',
            linkDesc: translateText('common:FUTURE_SEMESTER_GRADUATION_DATES_DESC'),
            linkTo: 'http://www.creighton.edu/commencement/'
          }
        ]
      }
    ]
  }
];

export default semesterDataObj;