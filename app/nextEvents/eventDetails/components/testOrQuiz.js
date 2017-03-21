/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HtmlReactParser from 'html-react-parser';
import { translateText } from '../../../common/translate';
import { HtmlEncoding } from '../../../common/utility';

const QuizzesDetails = (quizDetails) => (
  <section>
    <Row>
      {/*{console.log(quizDetails)}*/}
      <Col xs={12}>
        <div className='graybtBorder mb10 pt5 pb5'>
          <div className='eventDetailTitle'>{quizDetails.data.assign_title}</div>
          <div className='eventDetailSubject'>{quizDetails.data.class}</div>
        </div>
      </Col>
    </Row>
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className='eventTiming graybtBorder pb10'>
            <div>Test in Class</div>
            <div>{quizDetails.data.course_name}</div>
            <Row>
              <Col md={4} sm={6} xs={6}>
                <div>{quizDetails.data.startTime}- {quizDetails.data.endTime}</div>
              </Col>
              <Col md={8} sm={6} xs={6}>
                <div className='eventDate text-right'>{quizDetails.data.date}</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
    <article className='questionsScoring mt20 mb25'>
      <h4 className='eventDetail graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>QUESTIONS AND SCORING</h4>
      <div className='eventNotes pt5'>
        <strong>{translateText('common:QUIZ_NUMBER_OF_QUESTIONS')}: </strong> {quizDetails.data.number_of_questions}
      </div>
      <div className='eventNotes pt5'>
        <strong>{translateText('common:QUIZ_POINTS')}: </strong>{quizDetails.data.points_possible}
      </div>
    </article>
    <article className='description mb25'>
      <h4 className='eventDetail graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:COMMON_DESCRIPTION')}</h4>
      <div className='eventNotes pt5' >{HtmlReactParser(HtmlEncoding(quizDetails.data.assign_desc))}</div>
    </article>
  </section>
);

export default QuizzesDetails;
