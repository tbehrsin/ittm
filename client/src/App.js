import React from 'react';
import { Users } from 'components/Users';

import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <Users />
    </div>
  );
}

export default App;
