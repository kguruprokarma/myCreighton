import React from 'react';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Col, Row } from 'react-bootstrap';
import 'react-day-picker/lib/style.css';
import * as actionCreators from '../../eventFilter/actions';
import * as CommonConstants from '../../../constants/commonConstants';


class Range extends React.Component {
  constructor() {
    super();
    this.state = {
      from: null,
      to: null
    };
    this.showSelectedFilter = this.showSelectedFilter.bind(this);
  }
  componentWillMount() {
    let dateRange;
    if (localStorage.getItem('dateRange')) {
      dateRange = JSON.parse(localStorage.getItem('dateRange'));
      this.setState({
        from: moment(dateRange.from)._d,
        to: moment(dateRange.to)._d
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
    if (this.state.from && this.state.to) {
      selctedRange ={
        from: this.state.from.toString(),
        to: this.state.to.toString()
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
    const today = moment()._d;
    return (
      <div className='RangeExample'>
        <span className='calenderPointer'>&nbsp;</span>
        <Row className='visible-xs'>
          <Col xs={12}>
          <Col xs={6}>
            <a onClick={this.showSelectedFilter}>save</a>
          </Col>
          <Col xs={6}>
            <a className='pull-right' onClick={this.handleResetClick}>Reset</a>
          </Col>
          </Col>
        </Row>
        <DayPicker
          numberOfMonths={1}
          disabledDays={[{ before: today }]}
          selectedDays={[this.state.from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
        <Row className='hidden-xs'>
          <Col xs={6}>
            <button className='btn btn-primary' onClick={this.showSelectedFilter}>save</button>
          </Col>
          <Col xs={6}>
            <button className='btn btn-primary pull-right' onClick={this.handleResetClick}>Reset</button>
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
    loading: eventsState.eventsReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Range);