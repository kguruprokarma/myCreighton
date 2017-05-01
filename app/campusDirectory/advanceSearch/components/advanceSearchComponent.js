
import React from 'react';
import { Col, Row, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../../common/translate';
import PopOver from './popOver';
import * as CommonConstants from '../../../constants/commonConstants';
import ImageComponent from '../../../common/imageComponent';
import { SEARCH_ICON, MENUCLOSE_ICON } from '../../../constants/imageConstants';

const AdvanceSearchComponent = (advanceSearchProps) => (
  <section>
    <Row>
  <Col md={10} xs={12}>
    <Form>
       <Row className='form-group'>
              <Col xs={12}>
                <div className='visible-xs'>
                  <FormControl type='search' className='openSansLight advancedSearch input-lg mt20' placeholder={translateText('OPTIONAL_KEYWORD')} />
                  <button className='icon-addon btn btn-link btnnoPadding openSansLight'><ImageComponent imagePath={SEARCH_ICON} /></button>
                </div>
                <p className='pt10'>{translateText('OPTIONAL_ENTRY_NARROWS_THE_SEARCH_RESULTS')}</p>
              </Col>
            </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:PROFILE_LAST_NAME')}>{translateText('common:PROFILE_LAST_NAME')}</label>
        </Col>
        <Col xs={8}>
          <input className='form-control' type='text' />
          <Link className='icon-addon-right btnnoPadding openSansLight advancedTextBox show'><ImageComponent imagePath={MENUCLOSE_ICON} /></Link>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:STAFF_ORGANIZATION')}>{translateText('common:STAFF_ORGANIZATION')}</label>
        </Col>
        <Col xs={8}>
          <div className='styled-select'>
            <select className='form-control' value={advanceSearchProps.orgValue} onChange={advanceSearchProps.handleOrgChange} >
              <option className='list-group-item' value='' disabled>{CommonConstants.DROPDOWN_SELECT_TEXT}</option>
              {
                advanceSearchProps.organizationData.organizationDropDownOptions.map((item, orgIndex) => (<option className='list-group-item' key={orgIndex} value={item.id}>{item.name}</option>))
              }
            </select>
          </div>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:DEPARTMENT')}>{translateText('common:DEPARTMENT')}</label>
        </Col>
        <Col xs={8}>
          <div className='styled-select'>
            {/*<select value={this.state.deptValue} className='form-control'>*/}
            <select className='form-control' value={advanceSearchProps.deptValue}>
              <option className='list-group-item' value='' disabled>{CommonConstants.DROPDOWN_SELECT_TEXT}</option>
              {advanceSearchProps.filteredDepartments && advanceSearchProps.filteredDepartments.map((item, deptIndex) => (<option className='list-group-item' key={deptIndex} value={item.id}>{item.name}</option>))}
            </select>
          </div>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:COMMON_TITLE')}>{translateText('common:COMMON_TITLE')}</label>
        </Col>
        <Col xs={8}>
          <input className='form-control' type='text' />
          <Link className='icon-addon-right btnnoPadding openSansLight advancedTextBox show'><ImageComponent imagePath={MENUCLOSE_ICON} /></Link>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:EXPERTISE_SKILLS')}>{translateText('common:EXPERTISE_SKILLS')}</label>
        </Col>
        <Col xs={8} className='select-content'>
          <Row>
            <Col xs={6}>
              {/*<Link className='popUpClass searchSelect' onClick={advanceSearchProps.showSkillPopOver}>{advanceSearchProps.checkedSkills}</Link></Col>*/}
              <Link className='popUpClass searchSelect' >{advanceSearchProps.checkedSkills}</Link></Col>
            <Col xs={6}>
              <button className='btn btn-link btnnoPadding pull-right' onClick={advanceSearchProps.clearSkills}><span className='glyphicon glyphicon-remove-circle' /></button></Col>
          </Row>
          <div className='skillPopUp'>
            {advanceSearchProps.popOverSkills && <PopOver items={advanceSearchProps.skills.slice()} filedName='mySkills' headerText={translateText('common:EXPERTISE_SKILLS')} onFinalize={advanceSearchProps.selectedSkills} />}
          </div>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <label htmlFor={translateText('common:STAFF_APPLICATIONS/TOOLS')}>{translateText('common:STAFF_APPLICATIONS/TOOLS')}</label>
        </Col>
        <Col xs={8} className='select-content'>
          <Row>
            <Col xs={6}>
              {/*<Link className='popUpClass searchSelect' onClick={advanceSearchProps.showToolPopOver}>{CommonConstants.COMMON_SELECT_TEXT}</Link>*/}
              <Link className='popUpClass searchSelect'>{CommonConstants.COMMON_SELECT_TEXT}</Link>
            </Col>
            <Col xs={6}>
              <button className='btn btn-link btnnoPadding pull-right' onClick={advanceSearchProps.clearTools}><span className='glyphicon glyphicon-remove-circle' /></button>
            </Col>
            <div className='toolPopUp pt20 pl15'>
              {advanceSearchProps.popOverTools && <PopOver items={advanceSearchProps.tools.slice()} filedName='myTools' headerText={translateText('common:STAFF_APPLICATIONS/TOOLS')} />}
            </div>
          </Row>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col xs={4}>
          <div className='form-group'>
            <label htmlFor={translateText('common:CAMPUSDIRECTORY_GROUPS')}>{translateText('common:CAMPUSDIRECTORY_GROUPS')}</label>
          </div>
        </Col>
        <Col xs={8} className='select-content'>
          <Row>
            <Col xs={6}>
              {/*<Link className='popUpClass' onClick={advanceSearchProps.showGroupsPopOver}>{CommonConstants.COMMON_SELECT_TEXT}</Link>*/}
              <Link className='popUpClass'>{CommonConstants.COMMON_SELECT_TEXT}</Link>
            </Col>
            <Col xs={6} className='searchSelect'>
              <button className='btn btn-link btnnoPadding pull-right' onClick={advanceSearchProps.clearGroups}><span className='glyphicon glyphicon-remove-circle' /></button>
            </Col>
            <div className='groupPopUp pt20 pl15'>
              {advanceSearchProps.popOverGroups && <PopOver items={advanceSearchProps.groups.slice()} filedName='myGroups' headerText={translateText('common:CAMPUSDIRECTORY_GROUPS')} />}
            </div>
          </Row>
        </Col>
      </Row>
      <Row className='form-group'>
        <Col sm={5} xs={12} className='pull-right'>
          <button className='btn btn-primary btn-block searchSubmit'>{translateText('common:SEARCH')}</button>
        </Col>
      </Row>
      {/*JSON.stringify(this.state)*/}
    </Form>
  </Col>
  </Row>
  </section>
);

export default AdvanceSearchComponent;