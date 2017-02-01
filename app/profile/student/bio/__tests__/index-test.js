/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used for unit testing index js file of bio page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../index';

describe('index files in bio testing ----->', () => {
    const minProps = {
        getStudentProfileData: () => { },
        profileData: {
						"studentProfile": {
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
						                "relationDetail": {
						                   "parent": {
						                    "firstName": "Terrance",
						                    "middleName": "B",
						                    "lastName": "Edward"
						                },
						                "guardian": {
						                    "firstName": "Adam",
						                    "middleName": "J",
						                    "lastName": "Edwards"
						                }
						            }
						            }
						        }
						    }
						}
    }
     const profile = shallow(<Profile {...minProps} />);

    it('Profile is defined', () => {       
        expect(profile).toBeDefined();
    });

    it('Check HeaderLabel is "My Profile"', () => {
        expect(profile.find('HeaderLabel').length).toBe(1);
    	expect(profile.find('HeaderLabel').prop('headerLabel')).toBe("My Profile");
    });
    it('Check LegalName component is present', () => {
        expect(profile.find('LegalName').length).toBe(1);
        expect(profile.find('LegalName').prop('legalName')).toBe(minProps.profileData.studentProfile.bioData.legalName);
    });
    it('Check HomeAddress component is present', () => {
        expect(profile.find('HomeAddress').length).toBe(1);
        expect(profile.find('HomeAddress').prop('homeAddress')).toBe(minProps.profileData.studentProfile.bioData.address.home);
    });
    it('Check SchoolAddress component is present', () => {
        expect(profile.find('SchoolAddress').length).toBe(1);
        expect(profile.find('SchoolAddress').prop('schoolAddress')).toBe(minProps.profileData.studentProfile.bioData.address.school);
    });
    it('Check PrimaryContact component is present', () => {
        expect(profile.find('PrimaryContact').length).toBe(1);
        expect(profile.find('PrimaryContact').prop('primaryContact')).toBe(minProps.profileData.studentProfile.bioData.contactDetail);
    });
    it('Check EmergencyContact component is present', () => {
        expect(profile.find('EmergencyContact').length).toBe(1);
        expect(profile.find('EmergencyContact').prop('emergencyContact')).toBe(minProps.profileData.studentProfile.bioData.contactDetail.emergencyContact);
    });
    it('Check Email component is present', () => {
        expect(profile.find('Email').length).toBe(1);
        expect(profile.find('Email').prop('email')).toBe(minProps.profileData.studentProfile.bioData.contactDetail.email);
    });
    it('Check Other component is present', () => {
        expect(profile.find('Other').length).toBe(1);
        expect(profile.find('Other').prop('other')).toBe(minProps.profileData.studentProfile.bioData.contactDetail);
    });
    it('Check RelationDetail component is present', () => {
        expect(profile.find('RelationDetail').length).toBe(1);
        expect(profile.find('RelationDetail').prop('relationDetail')).toBe(minProps.profileData.studentProfile.bioData.contactDetail.relationDetail);
    });

});