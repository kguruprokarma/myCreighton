/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the list of test or quizes .*
*/

import React from 'react';

const TestsOrQuizzes = (testOrQuizzeProps) => (
	<article className="classTestOrQuizz mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{testOrQuizzeProps.i18nTranslate('common:TEST/QUIZZES')}</h4>
		{testOrQuizzeProps.testsOrQuizzes.map((testInfo, testIndex) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={testIndex}>
					{testInfo.date}- {testInfo.assignment}
				</div>
			)
		})
		}
	</article>
)

export default TestsOrQuizzes; 