import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('components/Users', () => ({
  __esModule: true,
  Users: () => {
    return 'Users';
  },
}));

test('renders learn react link', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
