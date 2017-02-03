/*Created Date: - 2nd -02 -2017
*Usage of file: - This component is for Footer details *
*/

import React from 'react';
import CopyRightText from './components/copyRightText';
import UniversityAddress from './components/universityAddress';
import UniversityLogo from './components/universityLogo';

const Footer = () => (
    <section>
    	<UniversityLogo />
    	<UniversityAddress />
    	<CopyRightText />
    </section>
)

export default Footer;
