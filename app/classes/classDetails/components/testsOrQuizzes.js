/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the list of test or quizes .*
*/

import React from 'react';

const TestsOrQuizzes = (props) => (
	<article className="classTestOrQuizz mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>TEST/QUIZZES</h4>
		{props.json.testsOrQuizzes.map((data, index) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={index}>
					{data.date}- {data.assignment}
				</div>
			)
		})
		}
	</article>
)

export default TestsOrQuizzes; 