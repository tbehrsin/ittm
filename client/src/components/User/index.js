import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const User = ({ user }) => {
  return (
    <tr className={cx('container')}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.region}</td>
      <td>{user.blocked.toString()}</td>
      <td>{user.status}</td>
      <td>{moment(user.createdAt).format('dddd Do MMMM yyyy')}</td>
      <td>{user.role.id}</td>
      <td>{user.role.name}</td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    blocked: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    role: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export { User };
