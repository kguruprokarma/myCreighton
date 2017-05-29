import React from 'react';
import { browserTitle } from '../common/utility';
import { translateText } from '../common/translate';

class Logout extends React.PureComponent {  
  componentWillMount() {
    browserTitle(translateText('common:LOGOUT_TEXT'));
  }
  render() {
    return (
      <div>
        {translateText('common:SIGNOUT_MESSAGE')} 
      </div>
    );
  }
}

export default Logout;
