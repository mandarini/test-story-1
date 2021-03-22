import React from 'react';
import { TestAppComponent, TestAppComponentProps } from './test-app-component';

export default {
  component: TestAppComponent,
  title: 'TestAppComponent',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TestAppComponentProps = {};

  return <TestAppComponent />;
};
