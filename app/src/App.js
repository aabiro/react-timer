import React from 'react';
import AddTimer from './components/AddTimer';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <AddTimer />
    </React.Fragment>
  );
}

export default App;
