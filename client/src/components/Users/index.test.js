import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';
import { Users, GET_USERS_QUERY } from './index';
import mockUsers from '../../../../mock-object.json';

const immediate = async () => new Promise(resolve => setImmediate(resolve));

mockUsers.data.items.forEach(item => {
  item.id = item.id.toString();
  item.role.id = item.role.id.toString();
});

const mocks = [
  {
    request: {
      query: GET_USERS_QUERY,
    },
    result: {
      data: {
        users: mockUsers?.data?.items,
      },
    },
  },
];

describe('Users', () => {
  test('renders without crashing', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks}>
        <Users />
      </MockedProvider>
    );

    expect(asFragment()).toMatchSnapshot();

    await act(immediate);

    expect(asFragment()).toMatchSnapshot();
  });
});
