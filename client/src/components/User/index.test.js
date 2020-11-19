import React from 'react';
import { render } from '@testing-library/react';
import { User } from './index';
import mockUsers from '../../../../mock-object.json';

mockUsers.data.items.forEach(item => {
  item.id = item.id.toString();
  item.role.id = item.role.id.toString();
});

describe('User', () => {
  test('renders without crashing', () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <User user={mockUsers.data.items[0]} />
        </tbody>
      </table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
