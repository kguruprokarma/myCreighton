/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the class information .*
*/

import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

const ClassInfo = (props) => (
    <section className="classInfo">
        <Row>
            <Col xs={12}>
                <div className="m-grayBorder">
                    <h3 className="pull-left classDetailHeading">{props.json.name} </h3>
                    <p className="pull-left classDetialOn">{props.json.on}</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <div className="graybtBorder pb10">
                    <Row>
                        <Col xs={6}>
                            <p>{props.json.place}</p>
                            <p>{props.json.recurrence} {props.json.time}</p>
                        </Col>
                        <Col xs={6} className="text-right">
                            <p>{props.json.by}</p>
                            <p>Next: {props.json.date}</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </section>
)
export default ClassInfo;