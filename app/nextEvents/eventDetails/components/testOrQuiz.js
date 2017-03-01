/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const QuizzesDetails = (quizDetails) => (
  <section>
    <div>
      <h1 className='bebasregular headerLabel mt5 mb20'>TEST DETAIL</h1>
    </div>
    {
      console.log('number_of_questions ', quizDetails.data)
    }
    <Col className='openSansLight fs1pt2 gbl_lh'>
      <div className='graybtBorder pb10 pt5'>
        <div className='eventTitle pt10'>Chapter 2: Utilitarianism</div>
        <div className='eventSubject'>Philosophy 100</div>
        {/*<div className='eventSubject'>{quizDetails.data.class}</div>*/}
      </div>
    </Col>
    <div>
      <Row className='openSansLight fs1pt2 gbl_lh'>
        <Col md={12} sm={12} xs={12}>
          <div className='eventTiming graybtBorder pb5 pt5'>
            <div>Test in Class</div>
            <div>{quizDetails.data.name}</div>
            <Row>
              <Col md={4} sm={6} xs={6}>
                <div>{quizDetails.data.startTime} - {quizDetails.data.endTime}</div>
              </Col>
              <Col md={8} sm={6} xs={6}>
                <div className='text-right'>{quizDetails.data.date}</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
    <div className='openSansLight fs1pt2 gbl_lh'>
      <div className='eventDetail graybtBorder pb5 pt15'>QUESTIONS AND SCORING</div>
      <article className='testOrQuiz'>
        <div className='eventNotes pt5' >
          <strong>{translateText('common:QUIZ_NUMBER_OF_QUESTIONS')}: </strong> {quizDetails.data.number_of_questions}
        </div>
        <div className='eventNotes pt5' >
          <strong>{translateText('common:QUIZ_POINTS_WORTH')}: </strong>{quizDetails.data.point_worth}
        </div>
      </article>
      <article>
        <div className='eventDetail graybtBorder pb5 pt15'>{translateText('common:COMMON_DESCRIPTION')}</div>
        <div className='eventNotes pt5' >
          {quizDetails.data.description}
        </div>
      </article>
    </div>
  </section>
);

export default QuizzesDetails;