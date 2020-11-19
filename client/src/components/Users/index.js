import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { User } from 'components/User';

import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

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

const Users = () => {
  const { data } = useQuery(GET_USERS_QUERY);

  return (
    <table className={cx('container')}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Region</th>
          <th>Blocked</th>
          <th>Status</th>
          <th>Created</th>
          <th>Role ID</th>
          <th>Role Name</th>
        </tr>
      </thead>
      <tbody>
        {data?.users?.map(user => (
          <User key={`${user.id}`} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export { Users };
