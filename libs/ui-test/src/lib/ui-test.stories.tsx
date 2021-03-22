import React from 'react';
import { UiTest, UiTestProps } from './ui-test';

export default {
  component: UiTest,
  title: 'UiTest',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UiTestProps = {};

  return <UiTest />;
};
