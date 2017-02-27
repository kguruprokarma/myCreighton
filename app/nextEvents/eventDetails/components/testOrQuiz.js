/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const QuizzesDetails = (quizDetails) => (
  <section>
    {
      console.log('number_of_questions ', quizDetails.data)
    }
    <Col>
      <h2>{quizDetails.data.title}</h2>
      <div>{quizDetails.data.class}</div>            
    </Col>
    <div className='classAssignment mt20'>
      <h4 className='detailSubhead graybtBorder mb10' />
    </div>
    <div>
      <Row> <Col md={12} sm={12} xs={12}>
        <div>Test in Class</div>
        <div>{quizDetails.data.name}</div>
        <Row className='openSansLight fs1pt2 gbl_lh'>
          <Col md={4} sm={6} xs={6}>
            <div>{quizDetails.data.startTime} - {quizDetails.data.endTime}</div>            
           
          </Col>
          <Col md={8} sm={6} xs={6}>
            <div>{quizDetails.data.date}</div>
          </Col>
        </Row>
      </Col>
      </Row>
    </div>
    <div className='Quiz mt20'>
      <h4 className='detailSubhead graybtBorder mb10' />
    </div>    
    <article className='testOrQuiz mb25 mt20'>
      <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>QUESTIONS AND SCORING</h4>
      <div className='openSansLight fs1pt2 gbl_lh' >
        <strong>{translateText('common:QUIZ_NUMBER_OF_QUESTIONS')}: </strong> {quizDetails.data.number_of_questions}
      </div>
      <div className='openSansLight fs1pt2 gbl_lh' >
        <strong>{translateText('common:QUIZ_POINTS_WORTH')}: </strong>{quizDetails.data.point_worth}
      </div>
    </article>
    <article className='testOrQuiz mb25 mt20'>
      <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:COMMON_DESCRIPTION')}</h4>
      <div className='openSansLight fs1pt2 gbl_lh' >
        {quizDetails.data.description}
      </div>		
    </article>
  </section>

  
);

export default QuizzesDetails;