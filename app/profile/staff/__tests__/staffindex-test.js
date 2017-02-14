/**
 * Created by sgarineypally on 2/14/2017.
 */
/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of bio page*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { StaffProfile } from '../index';
import i18n from '../../../__mock_i18n__/i18n_mockKeys'

describe('index files in staff testing ----->', () => {
    const minProps = {
        getStaffProfileData: () => { },
        profile: 'STAFF',
        profileData: {
            "staffProfile": {
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
    const staffProfile = shallow(<StaffProfile {...minProps} />);

    it('StaffProfile is defined', () => {
        expect(staffProfile).toBeDefined();
    });

    it('Check HeaderLabel is "My Profile"', () => {
        expect(staffProfile.find('HeaderLabel').length).toBe(1);
        expect(staffProfile.find('HeaderLabel').prop('headerLabel')).toBe(i18n.properties['MY_PROFILE']);
    });
    it('Check LegalName component is present', () => {
        expect(staffProfile.find('LegalName').length).toBe(1);
        expect(staffProfile.find('LegalName').prop('legalName')).toBe(minProps.profileData.staffProfile.bioData.legalName);
    });

    it('Check HomeAddress component is present', () => {
        expect(staffProfile.find('HomeAddress').length).toBe(1);
        expect(staffProfile.find('HomeAddress').prop('homeAddress')).toBe(minProps.profileData.staffProfile.bioData.address.home);
    });
    it('Check PrimaryContact component is present', () => {
        expect(staffProfile.find('PrimaryContact').length).toBe(1);
        expect(staffProfile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.staffProfile.bioData.contactDetail);
    });
    it('Check EmergencyContact component is present', () => {
        expect(staffProfile.find('EmergencyContact').length).toBe(1);
        expect(staffProfile.find('EmergencyContact').prop('emergencyContact')).toBe(minProps.profileData.staffProfile.bioData.contactDetail.emergencyContact);
    });
    it('Check Email component is present', () => {
        expect(staffProfile.find('Email').length).toBe(1);
        expect(staffProfile.find('Email').prop('email')).toBe(minProps.profileData.staffProfile.bioData.contactDetail.email);
    });
    it('Check Other component is present', () => {
        expect(staffProfile.find('Other').length).toBe(1);
        expect(staffProfile.find('Other').prop('other')).toBe(minProps.profileData.staffProfile.bioData.contactDetail);
    });
    it('Check FamilyDetail component is present', () => {
        expect(staffProfile.find('FamilyDetail').length).toBe(1);
        expect(staffProfile.find('FamilyDetail').prop('familyDetails')).toBe(minProps.profileData.staffProfile.bioData.contactDetail.familyDetails);
    });

});