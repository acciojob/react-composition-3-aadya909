import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Tooltip text="This is the tooltip text">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="Another tooltip here!">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;

