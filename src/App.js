import React from 'react';
import JoinRoom from './components/JoinRoom';
import socket from './socket';

function App() {
  return (
    <div className="wrapper">
      <JoinRoom/>
    </div>
  );
}

export default App;
