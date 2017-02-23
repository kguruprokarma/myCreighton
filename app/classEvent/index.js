import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ClassDetail from './Components/classDetail';
import InstructorDetail from './Components/instructorDetail';
import Style from './style.css'

export default class ClassEvent extends Component {

    render() {
        return (
            <section className="eventDetail">
                  <div id="classDetail">
                     <ClassDetail />
                     <InstructorDetail />
                  </div>
               </section>
        );
    }
}