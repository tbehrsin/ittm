import { gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { server } from '../index';

export const GET_USERS_QUERY = gql`
  query getUsers {
    users {
      id
      email
      region
      blocked
      status
      createdAt
      role {
        id
        name
      }
    }
  }
`;

export const GET_USER_QUERY = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      id
      email
      region
      blocked
      status
      createdAt
      role {
        id
        name
      }
    }
  }
`;

describe('User', () => {
  test('#users', async () => {
    const { query } = createTestClient(server);
    const { data } = await query({
      query: GET_USERS_QUERY,
    });
    expect(data).toMatchSnapshot();
  });

  test('#user', async () => {
    const { query } = createTestClient(server);
    const { data } = await query({
      query: GET_USER_QUERY,
      variables: {
        id: 456,
      },
    });
    expect(data).toMatchSnapshot();
  });

  test('#user not found', async () => {
    const { query } = createTestClient(server);
    const { data } = await query({
      query: GET_USER_QUERY,
      variables: {
        id: 0,
      },
    });
    expect(data).toMatchSnapshot();
  });
});
