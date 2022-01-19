import React from 'react';
import CreateContent from './components/CreateContext';
import ForwardRef from './components/ForwardRef';
import UseContent from './components/UseContext';
import UseRefStorage from './components/UseRefStorage';

const App = () => {
  return (
    <div className="App">
      {/* <CreateContent /> */}
      <ForwardRef />
      <UseContent />
      <UseRefStorage />
    </div>
  );
}

export default App;
