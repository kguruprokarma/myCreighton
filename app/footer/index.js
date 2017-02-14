/*Created Date: - 2nd -02 -2017
*Usage of file: - This component is for Footer details *
*/

import React from 'react';
import CopyRightText from './components/copyRightText';
import UniversityAddress from './components/universityAddress';
import UniversityLogo from './components/universityLogo';
import { Grid, Row, Col } from 'react-bootstrap';
import Style from './style.css';
import { translateText } from '../common/translate';

const Footer = () => (
	<footer className="footer" role="Content info">
		<h1 className="announced-only">{translateText('common:PAGE_FOOTER')}</h1>
		<Grid>
			<Row>
				<Col xs={6} sm={2}>
					<UniversityLogo />
				</Col>
				<Col xs={6} sm={8}>
					<UniversityAddress />
					<div className="hidden-xs"><CopyRightText /></div>
				</Col>
				<Col xs={12} className="visible-xs"><CopyRightText /></Col>
			</Row>
		</Grid>
	</footer>
)

export default Footer;
