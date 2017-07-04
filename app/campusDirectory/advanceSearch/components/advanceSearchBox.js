/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchTabController from '../../components/campusTabController';
import '../../style.css';
import AdvanceSearchComponent from './advanceSearchComponent';
import * as commonData from './commonData';
import * as CommonConstants from '../../../constants/commonConstants';


export class AdvanceSearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      presentState: '',
      lastName: '',
      orgValue: '',
      filteredDepartments: [],
      deptValue: '',
      title: '',
      popOverSkills: false,
      popOverTools: false,
      popOverGroups: false,
      skills: commonData.expertiseOrSkills,
      tools: commonData.applicationOrTools,
      groups: commonData.groups,
      checkedSkills: CommonConstants.COMMON_SELECT_TEXT
    };
  }
  render() {
    return (
      <article>
        <Row>
          <Col md={4} sm={6} xs={12} className='hidden-md hidden-lg hidden-sm controller-buttons'>
            <SearchTabController state={this.state.presentState} />
          </Col>
        </Row>
        <AdvanceSearchComponent organizationData={commonData.organizationData} expertiseOrSkills={commonData.expertiseOrSkills} applicationOrTools={commonData.applicationOrTools} checkedSkills={this.state.checkedSkills} />
      </article>
    );
  }
}

export default AdvanceSearchBox;