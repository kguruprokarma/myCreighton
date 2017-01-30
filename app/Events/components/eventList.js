import React from 'react';
import eventBox from './eventBox';


const eventList = (props) => {
    const eventboxes = props.events.map((classone) => {
        return(
            <eventBox
                 key={classone.name}
                 name={classone.name}
                 time={classone.time}
                 by={classone.by}
                 place={classone.place}
                 on={classone.on}
                 date={classone.date} />
        );
    })
    return(
        <div>
            {eventboxes}
        </div>
    );
}
export default eventList;
