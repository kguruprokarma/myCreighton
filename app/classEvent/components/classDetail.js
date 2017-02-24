import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const classDetail = (props) => {
    return (
        <div>
            <Row>
                <div className="Header">
                    <Grid fluid>
                        <span className="heading">Event detail</span>
                    </Grid>
                </div>
            </Row>
            <div className="middle">
                <p className="text-left">Jan 25, 2017</p>
                <Col>
                    <p className="Class">Chemistry 105</p>
                    <p className="classTiming">3:00 p.m. to 4:00 p.m.</p>
                    <p className="classTime">Tomorrow - Starts 17 hr 20 min</p>
                </Col>
                <a className="text-left">Hopper Lecture 100</a>
            </div>
        </div>
    )
}

export default classDetail