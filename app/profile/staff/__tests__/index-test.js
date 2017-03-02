/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of bio page*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { StaffProfile } from '../index';
import i18n from '../../../__mock_i18n__/i18n_mockKeys';

describe('index files in staff testing ----->', () => {
  const minProps = {
    getStaffProfileData: () => { },
    profile: 'STAFF',
    profileData: {
      'timing': '-1.343',
      'data': [
        {
          'netid': '5de48407ab',
          'birth_date': '1992-05-26',
          'email': {
            'school_email': '5de48407ab@creighton.edu'
          },
          'emergency_contact': {
            'first_name': '3ee294b7e7',
            'last_name': '541af1c56f',
            'middle_name': null
          },
          'guardian': {
            'first_name': null,
            'last_name': null,
            'middle_name': null
          },
          'home_address': {
            'Address_type': 'PR',
            'SPRADDR_CITY': 'Waterloo',
            'SPRADDR_STATE': 'IA',
            'SPRADDR_STREET_LINE1': '1195 Ridgemont Rd',
            'SPRADDR_STREET_LINE2': null,
            'SPRADDR_STREET_LINE3': null,
            'SPRADDR_ZIP': '50701-4841'
          },
          'legal_name': {
            'first_name': '190eb3ebae',
            'last_name': '541af1c56f',
            'middle_name': 'James'
          },
          'parent': {
            'first_name': null,
            'last_name': null,
            'middle_name': null
          },
          'family_details': {
            'maritalStatus': 'Married',
            'spouseName': 'Annika',
            'dependentsName': 'Annika'
          },
          'pidm': '3375259',
          'primary_phone_no': null,
          'school_address': null
        }
      ]
    }};
  const staffProfile = shallow(<StaffProfile {...minProps} />);

  it('StaffProfile is defined', () => {
    expect(staffProfile).toBeDefined();
  });

  it('Check HeaderLabel is "My Profile"', () => {
    expect(staffProfile.find('HeaderLabel').length).toBe(1);
    expect(staffProfile.find('HeaderLabel').prop('headerLabel')).toBe(i18n.properties.PROFILE_MY_PROFILE);
  });
  it('Check LegalName component is present', () => {
    expect(staffProfile.find('LegalName').length).toBe(1);
    expect(staffProfile.find('LegalName').prop('legalName')).toBe(minProps.profileData.data[0].legal_name);
  });

  it('Check HomeAddress component is present', () => {
    expect(staffProfile.find('HomeAddress').length).toBe(1);
    expect(staffProfile.find('HomeAddress').prop('homeAddress')).toBe(minProps.profileData.data[0].home_address);
  });
  it('Check PrimaryContact component is present', () => {
    expect(staffProfile.find('PrimaryContact').length).toBe(1);
    expect(staffProfile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.data[0].primary_phone_no);
  });
  it('Check EmergencyContact component is present', () => {
    expect(staffProfile.find('EmergencyContact').length).toBe(1);
    expect(staffProfile.find('EmergencyContact').prop('emergencyContact')).toBe(minProps.profileData.data[0].emergency_contact);
  });
  it('Check Email component is present', () => {
    expect(staffProfile.find('Email').length).toBe(1);
    expect(staffProfile.find('Email').prop('email')).toBe(minProps.profileData.data[0].email);
  });
  it('Check Other component is present', () => {
    expect(staffProfile.find('Other').length).toBe(1);
    expect(staffProfile.find('Other').prop('detail')).toBe(minProps.profileData.data[0]);
  });
  it('Check FamilyDetail component is present', () => {
    expect(staffProfile.find('FamilyDetail').length).toBe(1);
    expect(staffProfile.find('FamilyDetail').prop('familyDetail')).toBe(minProps.profileData.data[0].family_details);
  });
});