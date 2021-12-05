import React from 'react';
import HOC from '../../shared/hoc';

const Users = ({ data }) => {
  return (
    <div>
      <h2>Users HOC Component</h2>
      {data &&
        data.slice(0, 10).map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

const SearchUsers = HOC(Users, 'users');
export default SearchUsers;
