import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import Layout from './Layout';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout/>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
