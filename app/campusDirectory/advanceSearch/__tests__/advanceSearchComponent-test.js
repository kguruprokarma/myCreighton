import { shallow } from 'enzyme';
import React from 'react';
import AdvanceSearchBoxComponent from '../components/advanceSearchComponent';

describe(' Index component testing for campus directory search ----->', () => {
  const defaultProps = {
    organizationData: {
      'organizationDropDownOptions': [
        { 'name': 'Administration', 'id': 1, 'departments': [{ 'name': 'AdminDept1', 'id': 1 }, { 'name': 'AdminDept2', 'id': 2 }, { 'name': 'AdminDept3', 'id': 3 }] }, { 'name': 'Business Office', 'id': 2, 'departments': [{ 'name': 'BusinessDept1', 'id': 1 }, { 'name': 'BusinessDept2', 'id': 2 }, { 'name': 'org2Dept2', 'id': 3 }] }, { 'name': 'DoIT', 'id': 3, 'departments': [{ 'name': 'DoITDept1', 'id': 1 }, { 'name': 'DoITDept2', 'id': 2 }, { 'name': 'DoITDept3', 'id': 3 }] }, { 'name': 'Human Resources', 'id': 4, 'departments': [{ 'name': 'HumanDept1', 'id': 1 }, { 'name': 'HumanDept2', 'id': 2 }, { 'name': 'HumanDept3', 'id': 3 }] }, { 'name': 'Medical Center', 'id': 5, 'departments': [{ 'name': 'MedicalDept1', 'id': 1 }, { 'name': 'MedicalDept2', 'id': 2 }, { 'name': 'MedicalDept3', 'id': 3 }] }, { 'name': 'Registration Office', 'id': 6, 'departments': [{ 'name': 'RegistrationDept1', 'id': 1 }, { 'name': 'RegistrationDept2', 'id': 2 }, { 'name': 'RegistrationDept3', 'id': 3 }] }
      ]
    },
    filteredDepartments: [{ 'name': 'AdminDept1', 'id': 1 }, { 'name': 'AdminDept2', 'id': 2 }, { 'name': 'AdminDept3', 'id': 3 }],
    expertiseOrSkills: [{ 'name': 'Administration' }, { 'name': 'Affirmative action' }, { 'name': 'Applicant tracking systems' }, { 'name': 'Benefits' }, { 'name': 'Candidate search' }],
    applicationOrTools: [{ 'name': 'tool1' }, { 'name': 'tool2' }, { 'name': 'tool3' }],
    groups: [{ 'name': 'group1' }, { 'name': 'group2' }, { 'name': 'group3' }]
  };

  const advanceSearchBoxComponent = shallow(<AdvanceSearchBoxComponent {...defaultProps} />);
  it('Advance Search Box is defined', () => {
    expect(advanceSearchBoxComponent).toBeDefined();
  });
});