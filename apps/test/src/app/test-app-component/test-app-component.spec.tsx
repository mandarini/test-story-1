import React from 'react';
import { render } from '@testing-library/react';

import TestAppComponent from './test-app-component';

describe('TestAppComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestAppComponent />);
    expect(baseElement).toBeTruthy();
  });
});
