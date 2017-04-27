import React from 'react';
import HeaderTitle from '../components/headerTitle';
import i18n from '../../__mock_i18n__/i18n_mockKeys';

describe('HeaderTitle component testing ----->', () => {
  const defaultProps = {
    path: '/dashboard'
  };
  const HeaderTitleC = HeaderTitle(defaultProps);
  it('HeaderTitle is defined', () => {
    expect(HeaderTitleC).toBe(i18n.properties.MY_CREIGHTON);
  });

  const classesPath = { path: '/classes' };

  const ClassTitleC = HeaderTitle(classesPath);
  it('Classes path is defined', () => {
    expect(ClassTitleC).toBe(i18n.properties.CLASS_SCHEDULE);
  });

  const classDetailPath = { path: '/classesdetails' };
  const ClassDetailsTitleC = HeaderTitle(classDetailPath);
  it('Class details path is defined', () => {
    expect(ClassDetailsTitleC).toBe(i18n.properties.CLASS_DETAIL);
  });

  const profilePath = { path: '/profile' };
  const ProfileTitleC = HeaderTitle(profilePath);
  it('Profile path is defined', () => {
    expect(ProfileTitleC).toBe(i18n.properties.PROFILE_MY_PROFILE);
  });

  const academicPath = { path: '/academic' };
  const AcademicTitleC = HeaderTitle(academicPath);
  it('Academic is defined', () => {
    expect(AcademicTitleC).toBe(i18n.properties.PROFILE_ACADEMIC);
  });

  const eventListPath = { path: '/eventlist' };
  const EventListPath = HeaderTitle(eventListPath);
  it('Eventlist is defined', () => {
    expect(EventListPath).toBe(i18n.properties.NEXT_EVENTS);
  });

  const campusdirectoryPath = { path: '/campusdirectory' };
  const CampusdirectoryC = HeaderTitle(campusdirectoryPath);
  it('Campusdirectory is defined', () => {
    expect(CampusdirectoryC).toBe(i18n.properties.CAMPUS_DIRECTORY);
  });

  const searchresults = { path: '/searchresults' };
  const SearchresultsC = HeaderTitle(searchresults);
  it('Searchresults is defined', () => {
    expect(SearchresultsC).toBe(i18n.properties.SEARCH_RESULT);
  });

  const staffDetails = { path: '/staffDetails' };
  const staffDetailsC = HeaderTitle(staffDetails);
  it('StaffDetails is defined', () => {
    expect(staffDetailsC).toBe(i18n.properties.STAFF_DETAIL);
  });

  const schoolsandsemester = { path: '/schoolsandsemester' };
  const schoolsandsemesterC = HeaderTitle(schoolsandsemester);
  it('schoolsandsemester is defined', () => {
    expect(schoolsandsemesterC).toBe(i18n.properties.DASH_BOARD_SCHOOL_AND_SEMESTER);
  });

  const semesteracademics = { path: '/semesteracademics' };
  const semesteracademicsC = HeaderTitle(semesteracademics);
  it('semesteracademics is defined', () => {
    expect(semesteracademicsC).toBe(i18n.properties.SEMESTER_ACADEMICS);
  });

  const librarysearch = { path: '/librarysearch' };
  const librarysearchC = HeaderTitle(librarysearch);
  it('librarysearch is defined', () => {
    expect(librarysearchC).toBe(i18n.properties.LIBRARY_SEARCH);
  });

  const professional = { path: '/staff/professional' };
  const professionalC = HeaderTitle(professional);
  it('professional is defined', () => {
    expect(professionalC).toBe(i18n.properties.STAFF_PROFESSIONAL);
  });

  const facultyProfile = { path: '/faculty/academic' };
  const facultyProfileC = HeaderTitle(facultyProfile);
  it('facultyProfile is defined', () => {
    expect(facultyProfileC).toBe(i18n.properties.PROFILE_ACADEMIC);
  });

  const faculty = { path: '/faculty/profile' };
  const facultyC = HeaderTitle(faculty);
  it('profile is defined', () => {
    expect(facultyC).toBe(i18n.properties.PROFILE_MY_PROFILE);
  });

  const eventdetails = { path: '/eventdetails/eventsclassdetails' };
  const eventdetailsC = HeaderTitle(eventdetails);
  it('eventsclassdetails is defined', () => {
    expect(eventdetailsC).toBe(i18n.properties.CLASS_DETAIL);
  });

  const assignments = { path: '/eventdetails/assignments' };
  const assignmentsC = HeaderTitle(assignments);
  it('assignments is defined', () => {
    expect(assignmentsC).toBe(i18n.properties.NEXT_EVENTS_ASSIGNMENTS_HEADER);
  });  

  const testorquiz = { path: '/eventdetails/testorquiz' };
  const testorquizC = HeaderTitle(testorquiz);
  it('testorquiz is defined', () => {
    expect(testorquizC).toBe(i18n.properties.NEXT_EVENTS_TEST_DETAIL_HEADER);
  });  
});