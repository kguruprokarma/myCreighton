/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used for unit testing index js file of bio page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../index';

describe('index files in bio testing ----->', () => {
  const minProps = {
    getStudentProfileData: () => { },
    profile: 'STUDENT',
    profileData: {
      "timing": "-18.934",
      "data": [
        {
          "netid": "bab74e76ba",
          "birth_date": "1988-06-06",
          "email": { "school_email": "bab74e76ba@creighton.edu" },
          "emergency_contact": { "first_name": null, "last_name": null, "middle_name": null },
          "guardian": { "first_name": null, "last_name": null, "middle_name": null },
          "home_address": null,
          "legal_name": { "first_name": "3f0c9b03e8", "last_name": "e5eb1d7455", "middle_name": "R" },
          "parent": { "first_name": null, "last_name": null, "middle_name": null },
          "pidm": "3268947",
          "primary_phone_no": null,
          "school_address": null
        }
      ]
    }
  };
     const profile = shallow(<Profile {...minProps} />);

    it('Profile is defined', () => {
    expect(profile).toBeDefined();
  });

it('Check HeaderLabel is "My Profile"', () => {
  expect(profile.find('HeaderLabel').length).toBe(1);
  expect(profile.find('HeaderLabel').prop('headerLabel')).toBe("PROFILE_MY_PROFILE");
});
it('Check LegalName component is present', () => {
  expect(profile.find('LegalName').length).toBe(1);
  expect(profile.find('LegalName').prop('legalName')).toBe(minProps.profileData.data[0].legal_name);
});
it('Check HomeAddress component is present', () => {
  expect(profile.find('HomeAddress').length).toBe(1);
  expect(profile.find('HomeAddress').prop('homeAddress')).toBe(minProps.profileData.data[0].home_address);
});
// it('Check SchoolAddress component is present', () => {
//   expect(profile.find('Address').length).toBe(1);
//   expect(profile.find('Address').prop('address')).toBe(minProps.profileData.studentProfile.bioData.address.school);
// });
it('Check PrimaryContact component is present', () => {
  expect(profile.find('PrimaryContact').length).toBe(1);
  expect(profile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.data[0].primary_phone_no);
});
it('Check EmergencyContact component is present', () => {
  expect(profile.find('EmergencyContact').length).toBe(1);
  expect(profile.find('EmergencyContact').prop('emergencyContact')).toBe(minProps.profileData.data[0].emergency_contact);
});
it('Check Email component is present', () => {
  expect(profile.find('Email').length).toBe(1);
  expect(profile.find('Email').prop('email')).toBe(minProps.profileData.data[0].email);
});
// it('Check Other component is present', () => {
//   expect(profile.find('Other').length).toBe(1);
//   expect(profile.find('Other').prop('other')).toBe(minProps.profileData.studentProfile.bioData.contactDetail);
// });
it('Check RelationDetail component is present', () => {
  expect(profile.find('RelationDetail').length).toBe(1);
  expect(profile.find('RelationDetail').prop('parentDetail')).toBe(minProps.profileData.data[0].parent);
  expect(profile.find('RelationDetail').prop('gurdianDetail')).toBe(minProps.profileData.data[0].guardian);
});
});