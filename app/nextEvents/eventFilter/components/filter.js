/*Created Date: - 21 -03 -2017
*Usage of file: - This component is use to display the options in next event filter .*
*/
import React from 'react';

const labels = {
  EVENT_PERIOD_HEADING: 'EVENT PERIOD',
  DISPLAY_OPTIONS_HEADING: 'DISPLAY OPTIONS',
  DONE_TEXT: 'Done'
};
const EventFilter = (props) => (
  <article className='profileRow mt30'>
    <button onClick={props.showSelected}>{labels.DONE_TEXT}</button>
    <h3 className='dataHeading openSansRegular'>{labels.EVENT_PERIOD_HEADING}</h3>
    <div className='control-group'>
      {
            props.Items.eventperiodItems.map((eventItem, eventIndex) => (
              <div key={eventIndex}>
                <input type='radio' name='eventPeriod' value={eventItem} onChange={props.toggleRadio} checked={props.eventPeriod === eventItem} /> <span className='openSansRegular'>{eventItem}</span>
              </div>))
          }
    </div>
    <h3 className='dataHeading openSansRegular'>{labels.DISPLAY_OPTIONS_HEADING}</h3>
    <div className='control-group'>
      {
            /*props.Items.displayOptions.map((eventItem, eventIndex) => (<div key={eventIndex}>
              <input type='checkbox' name='eventPeriod' value={eventItem.itemName} onChange={props.toggleCheckBoxParent(eventItem)} checked={eventItem.checked} /> <span className='openSansRegular'>{eventItem.itemName}</span>
              {eventItem.children.length > 0 && <span onClick={props.showChild(eventItem)}>></span>}
              {eventItem.showItem && <div>
                  {
                    eventItem.children.map((eventItemChildren, childrenIndex) => (
                      <div key={childrenIndex}>
                        <input type='checkbox' name='eventPeriod' value={eventItemChildren.itemName} onChange={props.toggleCheck(eventItemChildren, eventItem)} checked={eventItemChildren.checked} /> <span className='openSansRegular'>{eventItemChildren.itemName}</span>
                      </div>
                      ))
                  }
                </div>}
            </div>
              ))*/
          }
    </div>
  </article>
  );

export default EventFilter;