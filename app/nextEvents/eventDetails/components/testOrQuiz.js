/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import htmlReactParser from 'html-react-parser';
import { translateText } from '../../../common/translate';
import { htmlEncoding, convertDateFromTimeStamp } from '../../../common/utility';

const QuizzesDetails = (quizDetails) => (
  <section role='region'>
    <Row>
      <Col xs={12}>
        <div className='graybtBorder mb10 pt5 pb5'>
          <div className='eventDetailTitle'>{(quizDetails.data && quizDetails.data.assign_title) ?quizDetails.data.assign_title:''}</div>
          <div className='eventDetailSubject'>{(quizDetails.data && quizDetails.data.class)?quizDetails.data.class:''}</div>
        </div>
      </Col>
    </Row>
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className='eventTiming graybtBorder pb10'>
            <div>{translateText('TEST_IN_CLASS')}</div>
            <div>{(quizDetails.data && quizDetails.data.course_name)?quizDetails.data.course_name:''}</div>
            <Row>
              <Col md={4} sm={6} xs={6}>
                {/* <div>{(quizDetails.data && quizDetails.data.startTime} - {(quizDetails.data && quizDetails.data.endTime}</div> */}
                <p><span>{translateText('DUE')} </span> {convertDateFromTimeStamp((quizDetails.data && quizDetails.data.date)?quizDetails.data.date:'')}</p>
              </Col>
              <Col md={8} sm={6} xs={6}>
               &nbsp;
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
    <div className='questionsScoring mt20 mb25'>
      <h4 className='eventDetail graybtBorder mb10'>{translateText('QUESTIONS_AND_SCORING')}</h4>
      <div className='eventNotes pt5'>
        <strong>{translateText('common:QUIZ_NUMBER_OF_QUESTIONS')}: </strong> {(quizDetails.data && quizDetails.data.number_of_questions)?quizDetails.data.number_of_questions:''}
      </div>
      <div className='eventNotes pt5'>
        <strong>{translateText('common:QUIZ_POINTS')}: </strong>{(quizDetails.data && quizDetails.data.points_possible)?quizDetails.data.points_possible:''}
      </div>
    </div>
    <div className='description mb25'>
      <h4 className='eventDetail graybtBorder mb10'>{translateText('common:COMMON_DESCRIPTION')}</h4>
      <div className='eventNotes pt5' >
        {
            quizDetails.data.assign_desc === null || quizDetails.data.assign_desc === '' ? <p className='openSansLight noContent gbl_lh mb30 text-italic'>{translateText('common:NO_DETAILS_PROVIDED')}</p> :
            htmlReactParser(htmlEncoding(quizDetails.data.assign_desc))
        }
      </div>
    </div>
  </section>
);

export default QuizzesDetails;
