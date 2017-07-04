/*Created Date: - 25th -05 -2017
*Usage of file: - This component is for calendar view of eventlist*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Col, Row } from 'react-bootstrap';
import * as actionCreators from '../../eventFilter/actions';
import * as CommonConstants from '../../../constants/commonConstants';
import { translateText } from '../../../common/translate';


export class Range extends React.Component {
  constructor() {
    super();
    this.state = {
      from: null,
      to: null
    };
    this.showSelectedFilter = this.showSelectedFilter.bind(this);
  }

  componentWillMount() {
    this.checkPreviouseSelectedDates(); 
  }
  componentWillReceiveProps() {
    this.checkPreviouseSelectedDates();
  }

  checkPreviouseSelectedDates() {
    let dateRange;
    if (localStorage.getItem('dateRange') && localStorage.getItem('setFilterValue') === CommonConstants.EVENT_FILTER_CALENDAR) {
      dateRange = JSON.parse(localStorage.getItem('dateRange'));
      this.setState({
        from: moment(dateRange.from)._d,
        to: moment(dateRange.to)._d
      });
    } else {
      this.setState({
        from: null,
        to: null
      });
    }
  }
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };
  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null
    });
  };

  showSelectedFilter() {
    let selctedRange ={
      from: null,
      to: null
    };
    if (this.state.from) {
      selctedRange ={
        from: this.state.from.toString(),
        to: this.state.to ? this.state.to.toString() : this.state.from.toString()
      };
      localStorage.setItem('setFilterValue', CommonConstants.EVENT_FILTER_CALENDAR);
      localStorage.setItem('dateRange', JSON.stringify(selctedRange));
    } else {
      localStorage.setItem('setFilterValue', CommonConstants.EVENT_FILTER_ALL);
    }
    this.props.dateChange(selctedRange);
    this.props.onSave();
  }
  render() {
    const from = this.state.from;
    const to = this.state.to;
    const startDate = moment()._d;
    const endDate = new Date(moment().add(59, 'days'));
    return (
      <div className='RangeExample openSansLight'>
        <span className='calenderPointer visible-xs'>&nbsp;</span>
        <Row className='visible-xs pt10 pb10'>
          <Col xs={12}>
            <Col xs={6}>
              <button className='btn btn-link btnnoPadding' onClick={this.showSelectedFilter}>{translateText('common:COMMON_SAVE')}</button>
            </Col>
            <Col xs={6}>
              <button className='pull-right btn btn-link btnnoPadding' onClick={this.handleResetClick}>{translateText('common:COMMON_RESET')}</button>
            </Col>
          </Col>
        </Row>
        <DayPicker
          numberOfMonths={1}
          fromMonth={startDate}
          toMonth={endDate}
          disabledDays={[{ before: startDate}, { after: endDate }]}
          selectedDays={[this.state.from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
        <Row className='hidden-xs'>
          <Col xs={6}>
            <button className='btn btn-primary calendarSave ml5' onClick={this.showSelectedFilter}>{translateText('common:COMMON_SAVE')}</button>
          </Col>
          <Col xs={6}>
            <button className='btn btn-primary pull-right calenderReset mr5' onClick={this.handleResetClick}>{translateText('common:COMMON_RESET')}</button>
          </Col>
        </Row>
      </div>
    );
  }
}

Range.propTypes = {
  dateChange: React.PropTypes.func,
  onSave: React.PropTypes.func
};
const mapStateToProps = (eventsState) => (
  {
    loading: eventsState.eventsReducer.isLoading,
    EventChangedValue: eventsState.eventsFilterReducer.changedValue
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Range);