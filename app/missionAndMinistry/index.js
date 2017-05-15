/*Created Date: - 6th -04 -2017
*Usage of file: - It displays the mission and ministry details
*/

import React from 'react';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import './style.css';
import MissionAndMinistryInfo from './components/missionandministry';

class MissionAndMinistry extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }
  componentWillMount() {
    const titleValue = `${translateText('common:MISSION_AND_MINISTRY')}`;
    browserTitle(titleValue);
  }
  toggleAccordion() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <section role='region' className='section-container'>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:MISSION_AND_MINISTRY')} /></div>
        <div className='openSansLight fs1pt2 mb10'>{translateText('common:COMMON_DESCRIPTION')} <button className='semisterShow' onClick={this.toggleAccordion} > {this.state.show ? translateText('common:COMMON_HIDE') : translateText('common:COMMON_SHOW')}</button></div>
        <MissionAndMinistryInfo show={this.state.show} />
      </section>
    );
  }
}
export default MissionAndMinistry;