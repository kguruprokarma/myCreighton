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
        You are almost logged out!
        To complete the logout process, please close/exit your browser completely. 
      </div>
    );
  }
}

export default Logout;
