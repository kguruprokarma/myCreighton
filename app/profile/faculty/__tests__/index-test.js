/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of bio page*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FacultyProfile } from '../index';
import i18n from '../../../__mock_i18n__/i18n_mockKeys'

describe('index files in faculty testing ----->', () => {
    const minProps = {
        getFacultyProfileData: () => { },
        profile: 'FACULTY',
        facultyprofileparam: 'profile',
        profileData: {
            "facultyProfile": {
                "bioData": {
                    "legalName": {
                        "first": "John",
                        "middle": "J",
                        "last": "Edward"
                    },
                    "address": {
                        "home": {
                            "street1": "12345 Nicolas St",
                            "street2": "21st",
                            "city": "Omaha",
                            "state": "Nebraska",
                            "postalCode": "68154-1234"
                        },
                        "school": {
                            "street1": "2112 California St",
                            "street2": "22nd",
                            "city": "Omaha",
                            "state": "Nebraska",
                            "postalCode": "68179"
                        },
                        "mailing": {
                            "street1": "California West",
                            "street2": "7th",
                            "city": "Omaha",
                            "state": "Omaha West",
                            "postalCode": "89567"
                        }

                    },
                    "contactDetail": {
                        "primaryPhone": "402.334.0477",
                        "emergencyContact": {
                            "name": {
                                "first": "Mary",
                                "middle": "J",
                                "last": "Edward"
                            },
                            "phone": "402.333.5671",
                            "relation": "Mother"
                        },
                        "email": {
                            "school": {
                                "value": "12345678g@creighton.edu"
                            },
                            "personal": {
                                "value": "bluejfan2019@yahoo.com"
                            }
                        },
                        "birthDate": "May 5, 1997",
                        "netID": "bbb12345",
                        "employeeNumber": "1234",
                        "familyDetails": {
                            "maritalStatus": "Married",
                            "spouseName": "Jessi",
                            "dependentsName": "Jessi"
                        }
                    }
                }
            }
        }
    }
    const facultyProfile = shallow(<FacultyProfile {...minProps} />);

    it('FacultyProfile is defined', () => {
        expect(facultyProfile).toBeDefined();
    });

    it('Check HeaderLabel is "My Profile"', () => {
        expect(facultyProfile.find('HeaderLabel').length).toBe(1);
        expect(facultyProfile.find('HeaderLabel').prop('headerLabel')).toBe(i18n.properties['PROFILE_MY_PROFILE']);
    });
    it('Check LegalName component is present', () => {
        expect(facultyProfile.find('LegalName').length).toBe(1);
        expect(facultyProfile.find('LegalName').prop('legalName')).toBe(minProps.profileData.facultyProfile.bioData.legalName);
    });

    it('Check HomeAddress component is present', () => {
        expect(facultyProfile.find('HomeAddress').length).toBe(1);
        expect(facultyProfile.find('HomeAddress').prop('homeAddress')).toBe(minProps.profileData.facultyProfile.bioData.address.home);
    });
    it('Check PrimaryContact component is present', () => {
        expect(facultyProfile.find('PrimaryContact').length).toBe(1);
        expect(facultyProfile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.facultyProfile.bioData.contactDetail);
    });
    it('Check EmergencyContact component is present', () => {
        expect(facultyProfile.find('EmergencyContact').length).toBe(1);
        expect(facultyProfile.find('EmergencyContact').prop('emergencyContact')).toBe(minProps.profileData.facultyProfile.bioData.contactDetail.emergencyContact);
    });
    it('Check Email component is present', () => {
        expect(facultyProfile.find('Email').length).toBe(1);
        expect(facultyProfile.find('Email').prop('email')).toBe(minProps.profileData.facultyProfile.bioData.contactDetail.email);
    });
    it('Check Other component is present', () => {
        expect(facultyProfile.find('Other').length).toBe(1);
        expect(facultyProfile.find('Other').prop('other')).toBe(minProps.profileData.facultyProfile.bioData.contactDetail);
    });
    it('Check FamilyDetail component is present', () => {
        expect(facultyProfile.find('FamilyDetail').length).toBe(1);
        expect(facultyProfile.find('FamilyDetail').prop('familyDetail')).toBe(minProps.profileData.facultyProfile.bioData.contactDetail.familyDetails);
    });

});