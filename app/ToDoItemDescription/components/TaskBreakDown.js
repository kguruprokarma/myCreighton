import React from 'react';
import Vocabulary from './Vocabulary';
import StudyGroup from './StudyGroup';

class TaskBreakDown extends React.Component {
  render() {
    return (<div>
    	<h4>TASK BREAKDOWN STEPS </h4>
    	<Vocabulary />
    	<hr/>
    	<StudyGroup />
      </div>
    );
  }
}

export default TaskBreakDown;