/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the summary tabs of school and semester.
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { filter } from 'lodash';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import SemesterNav from './components/semesterNav';
//import Academics from './components/academics';
import SemesterContainer from './components/semesterContainer';
import { SemesterLinks } from './components/semesterLinks';
import { semesterDataObj } from './constants/semesterData';

class SchoolAndSemester extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedArray: {},
      descToggle: false,
      accordToggle: true,
      linkClicked: false,
      descStateClass: '',
      activeNavLink: translateText('common:SEMESTER_SEMESTER_START')
    };
    this.navigateOnClick = this.navigateOnClick.bind(this);
    this.showAllDesc = this.showAllDesc.bind(this);
    this.showAllAccordions = this.showAllAccordions.bind(this);
    this.setStateAccordions = this.setStateAccordions.bind(this);
    this.accordToggleFunc = this.accordToggleFunc.bind(this);
  }
  componentWillMount() {
    const props = this.props;
    const titleValue = `${translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')}`;
    browserTitle(titleValue);
    if (props.params.id) {
      this.navigateOnClick(props.params.id);
    } else {
      this.navigateOnClick('semesterstart');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id) {
      this.navigateOnClick(nextProps.params.id);
    } else {
      this.navigateOnClick('semesterstart');
    }
  }
  setStateAccordions() {
    const tempArray = Object.assign({}, this.state.selectedArray);
    for (let i = 0; i < tempArray.accordionObj.length; i++) {
      tempArray.accordionObj[i].collapse = this.state.accordToggle;
    }
    this.setState({ selectedArray: tempArray });
  }

  showAllDesc() {
    if (this.state.descToggle) {
      this.setState({ descToggle: false });
      this.setState({ descStateClass: '' });
    } else {
      this.setState({ descToggle: true });
      this.setState({ descStateClass: 'accord-active' });
    }
  }

  navigateOnClick(val) {
    const temp = filter(semesterDataObj, { 'objectKey': val });
    this.setState({ selectedArray: temp[0] });
    this.setState({ descToggle: false });
    this.setState({ descStateClass: '' });
    this.setState({ linkClicked: true });
    this.setState({ accordToggle: true }, () => {
      this.setStateAccordions();
    });
    this.setState({ activeNavLink: translateText(temp[0].title) });
  }

  showAllAccordions() {
    if (this.state.accordToggle) {
      this.setState({ accordToggle: false }, () => {
        this.setStateAccordions();
      });
    } else {
      this.setState({ accordToggle: true }, () => {
        this.setStateAccordions();
      });
    }
  }

  accordToggleFunc(accordObj) {
    const accordObjOption = accordObj;
    accordObjOption.collapse = !accordObjOption.collapse;
    let tempCount = 0;
    this.forceUpdate();
    for (let i = 0; i < this.state.selectedArray.accordionObj.length; i++) {
      if (this.state.selectedArray.accordionObj[i].collapse === true) {
        tempCount++;
        if (tempCount === this.state.selectedArray.accordionObj.length - 1) {
          this.setState({ accordToggle: true });
        }
      }
    }
    for (let i = 0; i < this.state.selectedArray.accordionObj.length; i++) {
      if (this.state.selectedArray.accordionObj[i].collapse === false) {
        tempCount = 0;
        this.setState({ accordToggle: false });
      }
    }
  }

  render() {
    return (
      <section role='region' className='school-and-semester section-container init-top'>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')} /></div>
        <Row className='visible-xs'>
          <Col md={3} sm={4}>
            {!this.props.params.id && <SemesterNav linkClicked={this.state.linkClicked} semesterLinks={SemesterLinks} activeNavLink={this.state.activeNavLink} />}
          </Col>
          {this.props.params.id && <Col sm={8} md={9} xs={12}>
            <SemesterContainer
              selectedArray={this.state.selectedArray} descToggle={this.state.descToggle} descStateClass={this.state.descStateClass}
              showAllDesc={this.showAllDesc} accordToggle={this.state.accordToggle} accordToggleFunc={this.accordToggleFunc}
              showAllAccordions={this.showAllAccordions} paramId={this.props.params} activeNavLink={this.state.activeNavLink}
            />
          </Col>}
        </Row>
        <Row className='hidden-xs'>
          <Col md={3} sm={4}>
            {<SemesterNav linkClicked={this.state.linkClicked} semesterLinks={SemesterLinks} activeNavLink={this.state.activeNavLink} />}
          </Col>
          {<Col sm={8} md={9} xs={12}>
            <SemesterContainer
              selectedArray={this.state.selectedArray} descToggle={this.state.descToggle} descStateClass={this.state.descStateClass}
              showAllDesc={this.showAllDesc} accordToggle={this.state.accordToggle} accordToggleFunc={this.accordToggleFunc}
              showAllAccordions={this.showAllAccordions} paramId={this.props.params} activeNavLink={this.state.activeNavLink}
            />
          </Col>}
        </Row>
      </section>
    );
  }
}
SchoolAndSemester.propTypes = {
  params: React.PropTypes.string
};

export default SchoolAndSemester;