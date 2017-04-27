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
    profileData: { 'timing': '-4.353', 'data': [{ 'netid': 'ed8ad0b875', 'banner_pidm': '3439269', 'date_of_birth': '1992-03-15 00:00:00.0', 'emergency_contact': { 'first_name': '19669702ab', 'last_name': '0f2eb7129e' }, 'emp_number': '27523', 'faculty_address': { 'home_Address_line1': '1015 North 14th Street', 'home_Address_line2': 'Apt 201', 'home_Address_line3': null, 'home_State_code': 'NE', 'home_postal_code': '68102', 'home_town_or_city': 'Omaha' }, 'faculty_name': { 'first_name': '248715109e', 'last_name': '0f2eb7129e', 'middle_name': 'D' }, 'full_name': 'e739e1f8ba', 'mail_address': { 'mail_Address_line1': null, 'mail_Address_line2': null, 'mail_Address_line3': null, 'mail_State_code': null, 'mail_postal_code': null, 'mail_town_or_city': null }, 'marital_status': 'S', 'personal_email': 'ellietoscan@gmail.com', 'phone': '', 'work_address': { 'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null }, 'work_email': null }] }
  };
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
    expect(staffProfile.find('LegalName').prop('legalName')).toBe(minProps.profileData.data[0].staff_name);
  });


  it('Check PrimaryContact component is present', () => {
    expect(staffProfile.find('PrimaryContact').length).toBe(1);
    expect(staffProfile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.data[0].phone);
  });
  it('Check EmergencyContact component is present', () => {
    expect(staffProfile.find('EmergencyContact').length).toBe(1);
    expect(staffProfile.find('EmergencyContact').prop('data')).toBe(minProps.profileData.data[0]);
  });

  it('Check Other component is present', () => {
    expect(staffProfile.find('Other').length).toBe(1);
    expect(staffProfile.find('Other').prop('detail')).toBe(minProps.profileData.data[0]);
  });
});