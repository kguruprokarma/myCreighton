/*Created Date: - 21 -03 -2017
 *Usage of file: - This component is use to display the options in next event filter .*
 */
import React from 'react';
import { ListGroupItem, ListGroup, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { DOWN_ARROW } from '../../../constants/imageConstants';
import { translateText } from '../../../common/translate';

class EventFilter extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRadioFilter = this.toggleRadioFilter.bind(this);
    this.showChildFilter = this.showChildFilter.bind(this);
    this.toggleCheckBoxParentFilter = this.toggleCheckBoxParentFilter.bind(this);
    this.toggleCheckFilter = this.toggleCheckFilter.bind(this);
    this.showSelectedFilter = this.showSelectedFilter.bind(this);
    this.toggleCheckAllFilter = this.toggleCheckAllFilter.bind(this);
  }
  toggleRadioFilter(event) {
    this.props.toggleRadio(event);
  }
  showChildFilter(item) {
    this.props.showChild(item);
  }
  toggleCheckBoxParentFilter(eventItem) {
    this.props.toggleCheckBoxParent(eventItem);
  }
  toggleCheckFilter(eventItemChildren, eventItem) {
    this.props.toggleCheck(eventItemChildren, eventItem);
  }
  showSelectedFilter() {
    this.props.showSelected();
  }
  toggleCheckAllFilter() {
    this.props.toggleCheckAll();
  }
  render() {
    const eventFilterProps = this.props;
    return (
      <article className='row'>
        <div className='graybtBorder pb10'>
          <Col xs={12}>
            <p className='filterSettings openSansRegular pl30'>{translateText('common:SETTINGS')}
              <span><button className='filterDoneBtn openSansRegular pull-right' onClick={this.showSelectedFilter}>{translateText('common:EVENT_DONE_TEXT')}</button></span>
            </p>
          </Col>
        </div>
        <Scrollbars className='slim-scroll-bar' style={{ height: 300 }}>
          <p className='filterHeading openSansRegular mt10 mb0 plr15'>{translateText('common:EVENT_PERIOD_HEADING')}</p>
          <div className='control-group eventFilterGroup'>
            <ListGroup>
              {eventFilterProps && eventFilterProps.Items && eventFilterProps.Items.eventperiodItems && eventFilterProps.Items.eventperiodItems.map((eventItem, eventIndex) => (
                <ListGroupItem className='radioLabel' key={eventIndex}>
                  <label htmlFor={eventItem} className='control control-radio'><span className='openSansLight filterRadioText'>{eventFilterProps.displayLabel(eventItem)}</span>
                    <input type='radio' id={eventItem} value={eventItem} onChange={this.toggleRadioFilter} name='eventPeriod' checked={eventFilterProps.eventPeriod === eventItem} />
                    <div className='FilterRadioBtn control__indicator' />
                  </label>
                </ListGroupItem>
              ))
              }
            </ListGroup>
          </div>
          <p className='filterHeading openSansRegular mt10 mb0 plr15'>{translateText('common:EVENT_DISPLAY_OPTIONS_HEADING')}</p>
          <div className='control-group eventFilterCheckGroup'>
            <ListGroup>
              {eventFilterProps && eventFilterProps.displayOptions && eventFilterProps.displayOptions.map((eventItem, eventIndex) => (
                <ListGroupItem key={eventIndex}>
                  {eventItem.itemName === 'All' ? <label htmlFor='testAll' className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItem.itemName}</span>
                    <input type='checkbox' id='testAll' name='eventPeriod' value={eventItem.itemName} onChange={() => this.toggleCheckAllFilter()} checked={eventFilterProps.checkedAll} />
                    <div className='control__indicator' />
                  </label> : <label htmlFor={eventItem.itemName} className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItem.itemName}</span>
                    <input type='checkbox' id={eventItem.itemName} name='eventPeriod' value={eventItem.itemName} onChange={() => this.toggleCheckBoxParentFilter(eventItem)} checked={eventItem.checked} />
                    <div className={eventItem.childrenUnselect ? 'control__indicator back_checkbox' : 'control__indicator'}><span className='box-minus' /></div>
                  </label>}
                  {eventItem.children.length > 0 && <button className='btn btn-link btnnoPadding downArrowImage' onClick={() => this.showChildFilter(eventItem)}><img src={DOWN_ARROW} alt='Toggle Arrow' className={eventItem.showItem ? 'revImage' : ''} /></button>}
                  {eventItem.showItem && <ListGroup>
                    {
                      eventItem.children.map((eventItemChildren, childrenIndex) => (
                        <ListGroupItem className='childCheckBox' key={childrenIndex}>
                          <label htmlFor={eventItemChildren.parentname} className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItemChildren.name}</span>
                            <input type='checkbox' id={eventItemChildren.parentname} name='eventPeriod' value={eventItemChildren.name} onChange={() => this.toggleCheckFilter(eventItemChildren, eventItem)} checked={eventItemChildren.checked} />
                            <div className='control__indicator' />
                          </label>
                        </ListGroupItem>
                      ))
                    }
                  </ListGroup>}
                </ListGroupItem>
              ))
              }
            </ListGroup>
          </div>
        </Scrollbars>
      </article>
    );
  }
}
EventFilter.propTypes = {
  toggleRadio: React.PropTypes.func,
  showChild: React.PropTypes.func,
  toggleCheckBoxParent: React.PropTypes.func,
  toggleCheck: React.PropTypes.func,
  showSelected: React.PropTypes.func,
  toggleCheckAll: React.PropTypes.func
};
export default EventFilter;