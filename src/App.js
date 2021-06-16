import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary'
import './App.css';

const CallApi = React.lazy(() => import('./callApi'));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading component...</div>}>
      <CallApi />
    </Suspense>
  </ErrorBoundary>
);

export default App;
