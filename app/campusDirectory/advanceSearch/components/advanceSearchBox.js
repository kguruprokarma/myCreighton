/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from '../../actions';
import { Col, Row } from 'react-bootstrap';
import SearchTabController from '../../components/campusTabController';
import '../../style.css';
import AdvanceSearchComponent from './advanceSearchComponent';
import * as commonData from './commonData';
import * as CommonConstants from '../../../constants/commonConstants';


export class AdvanceSearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    //this.onSearchText = this.onSearchText.bind(this);
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
   // this.handleOrgChange = this.handleOrgChange.bind(this);
    //this.handleDeptChange = this.handleDeptChange.bind(this);
    // this.handleLastNameChange = this.handleLastNameChange.bind(this);
    // this.handleTitleChange = this.handleTitleChange.bind(this);
   // this.showSkillPopOver = this.showSkillPopOver.bind(this);
   // this.selectedSkills = this.selectedSkills.bind(this);
   // this.clearSkills = this.clearSkills.bind(this);

   // this.showToolPopOver = this.showToolPopOver.bind(this);
   // this.selectedTools = this.selectedTools.bind(this);
   // this.clearTools = this.clearTools.bind(this);

   // this.showGroupsPopOver = this.showGroupsPopOver.bind(this);
    //this.selectedGroups = this.selectedGroups.bind(this);
   // this.clearGroups = this.clearGroups.bind(this);

    //this.advancedSearch = this.advancedSearch.bind(this);
   // this.handleClick = this.handleClick.bind(this);
  }
  // componentWillMount() {
  //   document.addEventListener('click', this.handleClick, false);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClick, false);
  // }
  // handleClick(event) {
  //   if (!event.target.className.includes('popUpClass')) {
  //     this.setState({ popOverSkills: false, popOverTools: false, popOverGroups: false });
  //   }
  // }
  /*
  
    onSearchText(textValue) {
      const simpleSearchDirectoryPorps = this.props;
      const text = textValue.replace(/ /g, '');
      if (!text) return;
      const searchText = text.toLowerCase().split(',');
      const reqObj = {};
      if (searchText[0]) {
        reqObj.lastName = searchText[0];
      }
      if (searchText[1]) {
        const firstName = searchText[1];
        if (firstName) {
          reqObj.firstName = firstName;
        }
      }
      simpleSearchDirectoryPorps.searchItemClicked();
      simpleSearchDirectoryPorps.getCampusDirectoryData(reqObj);
    }
  
    handleLastNameChange(event) {
      this.setState({ lastName: event.target.value });
    }
  
  
    handleTitleChange(event) {
      this.setState({ title: event.target.value });
    }
  
    advancedSearch() {
      const skills = this.state.skills.filter((skill) => skill.checked).map((skill) => skill.name);
      const tools = this.state.tools.filter((tool) => tool.checked).map((tool) => tool.name);
      const groups = this.state.groups.filter((group) => group.checked).map((group) => group.name);
      const advanceSearchObj = {
        lastname: this.state.lastName,
        organization: this.state.orgValue,
        department: this.state.deptValue,
        title: this.state.title,
        skills: skills,
        tools: tools,
        groups: groups
      };
      console.log(advanceSearchObj);
    }
  */

  /*selectedTools(changedTools) {
    this.setState({ tools: changedTools });
    this.setState({ popOverTools: !this.state.popOverTools });
  }
  selectedGroups(changedGroups) {
    this.setState({ groups: changedGroups });
    this.setState({ popOverGroups: !this.state.popOverGroups });
  }
  selectedSkills(changedSkills) {
    const tempCheckedValues = [];
    let tempCheckedString = '';
    this.setState({ skills: changedSkills });
    this.setState({ popOverSkills: !this.state.popOverSkills });

    for (let i = 0; i < changedSkills.length; i++) {
      if (changedSkills[i].checked) {
        tempCheckedValues.push(changedSkills[i].name);
      }
    }
    if (tempCheckedValues.length > 0) {
      for (let j = 0; j < tempCheckedValues.length; j++) {
        tempCheckedString += tempCheckedValues[j];
        if (j < tempCheckedValues.length - 1) {
          tempCheckedString += ', ';
        }
      }
    } else {
      tempCheckedString = CommonConstants.COMMON_SELECT_TEXT;
    }
    this.setState({ checkedSkills: tempCheckedString });
  }

  handleOrgChange(event) {
    this.setState({ orgValue: event.target.value }, () => {
      this.setState({ filteredDepartments: commonData.organizationData.organizationDropDownOptions[this.state.orgValue - 1].departments });
      this.setState({ deptValue: '' });
    });
  }

  handleDeptChange(event) {
    this.setState({ deptValue: event.target.value });
  }

  clearSkills() {
    //e.preventDefault();
    const skillLength = this.state.skills.length;
    for (let i = 0; i < skillLength; i++) {
      this.state.skills[i].checked = false;
    }
    this.setState({checkedSkills: CommonConstants.COMMON_SELECT_TEXT});
    //this.forceUpdate();
  }

  clearTools() {
    const toolLength = this.state.tools.length;
    for (let i = 0; i < toolLength; i++) {
      this.state.tools[i].checked = false;
    }
    this.forceUpdate();
  }

  clearGroups() {
    const groupLength = this.state.groups.length;
    for (let i = 0; i < groupLength; i++) {
      this.state.groups[i].checked = false;
    }
    this.forceUpdate();
  }

  showSkillPopOver() {
    this.setState({ popOverSkills: true });
  }

  showToolPopOver() {
    this.setState({ popOverTools: true });
  }

  showGroupsPopOver() {
    this.setState({ popOverGroups: true });
  }*/

  render() {
    return (
      <article role='article'>
        <Row>
          <Col md={4} sm={6} xs={12} className='hidden-md hidden-lg hidden-sm controller-buttons'>
            <SearchTabController state={this.state.presentState} />
          </Col>
        </Row>
        <AdvanceSearchComponent organizationData={commonData.organizationData} expertiseOrSkills={commonData.expertiseOrSkills} applicationOrTools={commonData.applicationOrTools} checkedSkills={this.state.checkedSkills} />
        {/* <AdvanceSearchComponent clearSkills={this.clearSkills} clearTools={this.clearTools} clearGroups={this.clearGroups} showGroupsPopOver={this.showGroupsPopOver} showSkillPopOver={this.showSkillPopOver} showToolPopOver={this.showToolPopOver} organizationData={commonData.organizationData} expertiseOrSkills={commonData.expertiseOrSkills} applicationOrTools={commonData.applicationOrTools} popOverSkills={this.state.popOverSkills} popOverTools={this.state.popOverTools} popOverGroups={this.state.popOverGroups} skills={this.state.skills} tools={this.state.tools} groups={this.state.groups} filteredDepartments={this.state.filteredDepartments} handleOrgChange={this.handleOrgChange} orgValue={this.state.orgValue} deptValue={this.state.deptValue} selectedSkills={this.selectedSkills} checkedSkills={this.state.checkedSkills} selectedTools={this.selectedTools} />*/}
      </article>
    );
  }
}

/*const mapStateToProps = (simpleSearchState) => (
  {
    campusSimpleSearchData: simpleSearchState.campusDirectoryReducer.campusSimpleSearch.data,
    searchType: simpleSearchState.campusDirectoryReducer.searchType,
    loading: simpleSearchState.campusDirectoryReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearchBox);*/
export default AdvanceSearchBox;