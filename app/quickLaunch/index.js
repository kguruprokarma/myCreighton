import React from 'react';
import QuickLaunchCards from './components/quickLaunchCards';
import { translateText } from '../common/translate';
import HeaderLabel from '../common/headerLabel';
import { browserTitle } from '../common/utility';
import './style.css';

class QuickLaunch extends React.PureComponent {

  componentWillMount() {
    browserTitle(translateText('common:QUICK_LAUNCH'));
  }

  render() {
    return (
      <section role='region' className='section-container'>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:QUICK_LAUNCH')} /></div>
        <QuickLaunchCards />
      </section>
    );
  }
}
export default QuickLaunch;