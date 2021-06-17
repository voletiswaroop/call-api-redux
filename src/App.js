import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary'
import './App.css';

// import EmployeeList from './containers/EmployeeList'
const EmployeeList = React.lazy(() => import('./containers/EmployeeList'));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading component...</div>}>
      <EmployeeList />
    </Suspense>
  </ErrorBoundary>
);

export default App;
