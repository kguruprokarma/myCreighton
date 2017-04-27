/*Created Date: - 21 -03 -2017
 *Usage of file: - This component is use to display the options in next event filter .*
 */
import React from 'react';
import { ListGroupItem, ListGroup, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { DOWN_ARROW } from '../../../constants/imageConstants';
import { translateText } from '../../../common/translate';

const EventFilter = (eventFilterProps) => (
  <article className='row'>
    <div className='graybtBorder pb10'>
      <Col xs={12}>
        <p className='filterSettings openSansRegular pl30'>{translateText('common:SETTINGS')}
          <span><button className='filterDoneBtn openSansRegular pull-right' onClick={eventFilterProps.showSelected}>{translateText('common:EVENT_DONE_TEXT')}</button></span>
        </p>
      </Col>
    </div>
    <Scrollbars className='slim-scroll-bar' style={{ height: 300 }}>
      <p className='filterHeading openSansRegular mt10 mb0 plr15'>{translateText('common:EVENT_PERIOD_HEADING')}</p>
      <div className='control-group eventFilterGroup'>
        <ListGroup>
          {eventFilterProps && eventFilterProps.Items && eventFilterProps.Items.eventperiodItems && eventFilterProps.Items.eventperiodItems.map((eventItem, eventIndex) => (
            <ListGroupItem className='radioLabel' key={eventIndex}>
              <label className='control control-radio'><span className='openSansLight filterRadioText'>{eventFilterProps.displayLabel(eventItem)}</span>
                <input type='radio' value={eventItem} onChange={eventFilterProps.toggleRadio} name='eventPeriod' checked={eventFilterProps.eventPeriod === eventItem} />
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
              {eventItem.itemName === 'All' ? <label className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItem.itemName}</span>
                <input type='checkbox' name='eventPeriod' value={eventItem.itemName} onChange={eventFilterProps.toggleCheckAll()} checked={eventFilterProps.checkedAll} />
                <div className='control__indicator' />
              </label> : <label className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItem.itemName}</span>
                <input type='checkbox' name='eventPeriod' value={eventItem.itemName} onChange={eventFilterProps.toggleCheckBoxParent(eventItem)} checked={eventItem.checked} />
                <div className={eventItem.childrenUnselect ? 'control__indicator back_checkbox' : 'control__indicator'}><span className='box-minus' /></div>
              </label>}
              {eventItem.children.length > 0 && <button className='btn btn-link btnnoPadding downArrowImage' onClick={eventFilterProps.showChild(eventItem)}><img src={DOWN_ARROW} alt='' className={eventItem.showItem ? 'revImage' : ''} /></button>}
              {eventItem.showItem && <ListGroup>
                {
                  eventItem.children.map((eventItemChildren, childrenIndex) => (
                    <ListGroupItem className='childCheckBox' key={childrenIndex}>
                      <label className='control control-checkbox'><span className='openSansLight filterCheckText'>{eventItemChildren.name}</span>
                        <input type='checkbox' name='eventPeriod' value={eventItemChildren.name} onChange={eventFilterProps.toggleCheck(eventItemChildren, eventItem)} checked={eventItemChildren.checked} />
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

export default EventFilter;