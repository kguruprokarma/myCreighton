
import React, { Component } from 'react';
import EventHeader from './eventHeader';
import EventControls from './eventControls';
import EventList from './eventBox';
//import style from './style.css';

export default class events extends Component {

constructor(props) {
        super();
        this.state = {
            events: [
                  {
                  "name": 'English1234',
                  "time": '11am-12pm',
                  "by": 'Mr. JOhnny',
                  "place": 'D block',
                  "on": 'poetry',
                  "date": 'jan 13'
              },
              {
                  "name": 'English2',
                  "time": '11am-12pm',
                  "by": 'Mr. JOhnny',
                  "place": 'D block',
                  "on": 'poetry',
                  "date": 'jan 13'
              }
            ]
        };
    }
    render() {
        return (
          <section className="margin-top0 padding0">
			     
			      <EventList />
			    </section>
        );
    }
}


