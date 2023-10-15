
import React from 'react';
import Home from './Home';
import DataProvider from './DataProvider';

function App() {
  return (
    <DataProvider>    
      <Home/>
    </DataProvider>
  );
}
export default App;
