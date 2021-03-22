import React from 'react';

import './test-app-component.module.css';

/* eslint-disable-next-line */
export interface TestAppComponentProps {}

export function TestAppComponent(props: TestAppComponentProps) {
  return (
    <div>
      <h1>Welcome to test-app-component!</h1>
    </div>
  );
}

export default TestAppComponent;
