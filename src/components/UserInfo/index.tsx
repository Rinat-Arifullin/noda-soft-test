import React, {memo} from 'react';
import {IUserInfoProps} from './types';

const UserInfo = ({user}: IUserInfoProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user?.name}</td>
          <td>{user?.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default memo(UserInfo);
