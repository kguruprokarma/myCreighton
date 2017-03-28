/*Created Date: - 21 -03 -2017
 *Usage of file: - This component is use to display the options in next event filter .*
 */
import React from 'react';
import { ListGroupItem, ListGroup, Col } from 'react-bootstrap';
import { DOWN_ARROW } from '../../../constants/imageConstants';

const labels = {
  EVENT_PERIOD_HEADING: 'EVENT PERIOD',
  DISPLAY_OPTIONS_HEADING: 'DISPLAY OPTIONS',
  DONE_TEXT: 'Done'
};
const EventFilter = (eventFilterProps) => (
  <article className='row'>
    <div className='graybtBorder pb10'>
      <Col xs={9}>
        <p className='filterSettings openSansRegular'>Settings</p>
      </Col>
      <Col xs={3}>
        <button className='filterDoneBtn openSansRegular' onClick={eventFilterProps.showSelected}>{labels.DONE_TEXT}</button>
      </Col>
    </div>
    <p className='filterHeading openSansRegular mt10 mb0 plr15'>{labels.EVENT_PERIOD_HEADING}</p>
    <div className='control-group eventFilterGroup'>
      <ListGroup>
        {eventFilterProps.Items.eventperiodItems.map((eventItem, eventIndex) => (
          <ListGroupItem className='radioLabel' key={eventIndex}>
            <label className='control control-radio'><span className='openSansLight filterRadioText'>{eventItem}</span>
              <input type='radio' value={eventItem} onChange={eventFilterProps.toggleRadio} name='eventPeriod' checked={eventFilterProps.eventPeriod === eventItem} />
              {/*<input type='radio' className='FilterRadioBtn' name='eventPeriod' value={eventItem} onChange={props.toggleRadio} checked={props.eventPeriod === eventItem} /> <span className='openSansLight filterRadioText'>{eventItem}</span>*/}
              <div className='FilterRadioBtn control__indicator' />
            </label>
          </ListGroupItem>
        ))
        }
      </ListGroup>
    </div>
    <p className='filterHeading openSansRegular mt10 mb0 plr15'>{labels.DISPLAY_OPTIONS_HEADING}</p>
    <div className='control-group eventFilterCheckGroup'>
      <ListGroup>
        {eventFilterProps.displayOptions.map((eventItem, eventIndex) => (
          <ListGroupItem key={eventIndex}>
            <label className='control control-checkbox'><span className='openSansLight filterRadioText'>{eventItem.itemName}</span>
              <input type='checkbox' name='eventPeriod' value={eventItem.itemName} onChange={eventFilterProps.toggleCheckBoxParent(eventItem)} checked={eventItem.checked} />
              <div className='control__indicator' />
            </label>
            {eventItem.children.length > 0 && <button className='btn btn-link btnnoPadding downArrowImage' onClick={eventFilterProps.showChild(eventItem)}><img src={DOWN_ARROW} alt='' /></button>}
            {eventItem.showItem && <div>
              {
                eventItem.children.map((eventItemChildren, childrenIndex) => (
                  <div className='childCheckBox pl20' key={childrenIndex}>
                    <label className='control control-checkbox'><span className='openSansLight filterRadioText'>{eventItemChildren.name}</span>
                      <input type='checkbox' name='eventPeriod' value={eventItemChildren.name} onChange={eventFilterProps.toggleCheck(eventItemChildren, eventItem)} checked={eventItemChildren.checked} />
                      <div className='control__indicator' />
                    </label>
                  </div>
                ))
              }
            </div>}
          </ListGroupItem>
        ))
        }
      </ListGroup>


    </div>
  </article>
);

export default EventFilter;